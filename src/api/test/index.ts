import HTTP_REQUEST, { TDefaultResponse } from '@/api';

export default class TestApi {
  static async getPosts(): Promise<TDefaultResponse<unknown> | TDefaultResponse<never>> {
    return await HTTP_REQUEST.get('/posts').then((response) => response);
  }
}
