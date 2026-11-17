//TODO Example file

/**
 * Shared enumerations and status codes for the campus maintenance app.
 *
 * Backend status codes (seed data in mr-fixit-service) are the source of truth:
 * OPN, NPRGRS, CMPLTD, CNCLD. Use WorkOrderStatusCode everywhere for API/filter comparisons.
 */

/** Canonical work-order status codes from GET /work_order/status */
export const WorkOrderStatusCode = {
  OPEN: 'OPN',
  IN_PROGRESS: 'NPRGRS',
  COMPLETED: 'CMPLTD',
  CANCELLED: 'CNCLD'
} as const;

export type WorkOrderStatusCode =
  (typeof WorkOrderStatusCode)[keyof typeof WorkOrderStatusCode];

/**
 * @deprecated Prefer WorkOrderStatusCode. Kept for older template imports.
 * Values intentionally match backend codes (not display labels).
 */
export enum WorkOrderStatus {
  OPEN = 'OPN',
  IN_PROGRESS = 'NPRGRS',
  COMPLETED = 'CMPLTD',
  CANCELLED = 'CNCLD'
}

/** Optional UI priority (not exposed by mr-fixit-service work-order DTO today). */
export enum Priority {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
  EMERGENCY = 'EMERGENCY'
}

/** Category codes aligned with GET /work_order/category */
export enum Category {
  PLUMBING = 'PLMB',
  ELECTRICAL = 'ELCT',
  HVAC = 'HVC',
  CARPENTRY = 'CRPN',
  PAINTING = 'PNT',
  GENERAL_MAINTENANCE = 'GEN',
  INTERNET_ACCESS = 'INT',
  OTHER = 'OTH'
}