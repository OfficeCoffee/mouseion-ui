/**
 * Barrel file. Re-exports services so imports can use `@app/services`.
 *
 * Layering (top = UI, bottom = HTTP):
 *   Components (dashboard, list, form, detail)
 *        ↓ inject
 *   Feature services (WorkOrderService, LookupService, BuildingService, …)
 *        ↓ inject
 *   ApiService (HTTP + environment.apiUrl)
 *        ↓ HttpClient + interceptors
 *   mr-fixit-service (Java backend)
 *
 * WorkOrderService holds in-memory signal state; other services may call the API directly.
 */

// Core infrastructure
export { ApiService } from './api.service';
export { ErrorBoundaryService } from './error-boundary.service';

// Feature / domain services
export { WordService } from './word.service';
// export { DeckService } from './deck.service';
// export { WordDeckService } from './word-deck.service';
