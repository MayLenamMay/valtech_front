import ApiClient from './config/api-client';

export async function get(resourceName, headers = null) {
  if (headers) {
    return await ApiClient.get(resourceName, headers);
  }
  return await ApiClient.get(resourceName);
}
