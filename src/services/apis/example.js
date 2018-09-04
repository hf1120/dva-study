import request from '../../utils/request';

export async function query500() {
  return request('api/currentUser');
}
