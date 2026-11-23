/**
 * Generic API response shapes used by services and components.
 *
 * ApiService wraps simple GET/POST bodies in ApiResponse<T>.
 * WorkOrderService.getWorkOrders() returns PaginatedResponse<WorkOrder> for list views.
 */

/** Standard success wrapper from ApiService (data may be undefined on failure paths). */
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  message?: string;
  errors?: string[];
  timestamp: Date;
}

/** List endpoints that include page metadata (client or server pagination). */
export interface PaginatedResponse<T = unknown> {
  success: boolean;
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrevious: boolean;
  };
  message?: string;
  timestamp: Date;
}

//TODO (input query params for our systems)
/** Query parameters passed into WorkOrderService.getWorkOrders(). */
// export interface PaginationParams {
//   page?: number;
//   limit?: number;
//   sortBy?: string;
//   sortOrder?: 'asc' | 'desc';
//   search?: string;
// }

/** Shape for failed API calls (used by error handling utilities). */
export interface ErrorResponse {
  success: false;
  message: string;
  errors?: string[];
  statusCode: number;
  timestamp: Date;
}