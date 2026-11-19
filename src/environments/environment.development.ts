/**
 * Runtime configuration for the Angular app (development build).
 *
 * apiUrl is the base path for ApiService. All REST calls are `${apiUrl}/${endpoint}`.
 */
export const environment = {
  production: false,
  // apiUrl: 'http://localhost:8080/mouseion'
    apiUrl: 'https://jsonplaceholder.typicode.com'
};