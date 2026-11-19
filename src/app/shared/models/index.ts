
//TODO fix comment
/**
 * Barrel file. Re-exports all shared TypeScript models.
 *
 * Use these types in components and services so shapes stay aligned with the backend:
 * - backend-dtos.interface.ts → raw API JSON (camelCase)
 * - work-order.interface.ts   → app-level aliases (WorkOrder extends backend DTO)
 * - enums.ts                  → display / filter constants
 * - api-response.interface.ts → pagination and generic API wrappers
 */

export * from './api-response.interface';
export * from './backend-dtos.interface';