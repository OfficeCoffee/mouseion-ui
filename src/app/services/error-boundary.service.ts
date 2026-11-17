/**
 * Global error and notification hub (signal-based for OnPush consumers).
 *
 * Provide as Angular ErrorHandler in app.config.ts.
 * ErrorNotificationComponent reads notifications / hasActiveNotifications.
 *
 * Auto-dismiss uses RxJS `timer` + `takeUntilDestroyed` (not setTimeout) so
 * subscriptions tear down with the app injector.
 */
import {
  Injectable,
  ErrorHandler,
  Injector,
  inject,
  signal,
  computed,
  DestroyRef
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { timer } from 'rxjs';

const TOAST_DURATION_MS = 3000;

export interface ErrorInfo {
  id: string;
  message: string;
  type: 'error' | 'warning' | 'success' | 'info';
  stack?: string;
  timestamp: Date;
  url?: string;
  userAgent?: string;
  details?: string;
  dismissible?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ErrorBoundaryService implements ErrorHandler {
  private readonly injector = inject(Injector);
  private readonly destroyRef = inject(DestroyRef);

  private readonly _notifications = signal<ErrorInfo[]>([]);
  private readonly _lifetimeCount = signal(0);

  readonly notifications = this._notifications.asReadonly();
  readonly hasActiveNotifications = computed(() => this._notifications().length > 0);
  readonly activeCount = computed(() => this._notifications().length);
  readonly lifetimeCount = this._lifetimeCount.asReadonly();

  handleError(error: Error): void {
    console.error('Error caught by ErrorBoundaryService:', error);

    this.pushNotification({
      id: this.generateErrorId(),
      message: error.message || 'An unexpected error occurred',
      type: 'error',
      stack: error.stack,
      timestamp: new Date(),
      url: this.getCurrentUrl(),
      userAgent: navigator.userAgent,
      dismissible: true
    });
  }

  handleAsyncError(error: unknown): void {
    if (error instanceof Error) {
      this.handleError(error);
    } else {
      this.handleError(new Error(String(error)));
    }
  }

  removeError(errorId: string): void {
    this._notifications.update(list => list.filter(e => e.id !== errorId));
  }

  clearAllErrors(): void {
    this._notifications.set([]);
    this._lifetimeCount.set(0);
  }

  showSuccess(message: string, _autoRemove = true): void {
    this.pushToast('success', message, true);
  }

  showWarning(message: string, dismissible = true): void {
    this.pushToast('warning', message, dismissible);
  }

  showInfo(message: string, _autoRemove = true): void {
    this.pushToast('info', message, true);
  }

  private pushToast(
    type: ErrorInfo['type'],
    message: string,
    dismissible: boolean
  ): void {
    const info: ErrorInfo = {
      id: this.generateErrorId(),
      message,
      type,
      timestamp: new Date(),
      dismissible
    };
    this.pushNotification(info);
  }

  private pushNotification(errorInfo: ErrorInfo): void {
    this._lifetimeCount.update(n => n + 1);
    this._notifications.update(list => [errorInfo, ...list].slice(0, 5));
    timer(TOAST_DURATION_MS)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => this.removeError(errorInfo.id));
  }

  private getCurrentUrl(): string {
    try {
      return this.injector.get(Router).url;
    } catch {
      return globalThis.location.href;
    }
  }

  private generateErrorId(): string {
    return `error_${Date.now()}_${Math.random().toString(36).slice(2, 11)}`;
  }
}