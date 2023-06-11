import { BlogActionTypes, BLOG_ACTION } from '../_types/blogTypes';

export const blogAction = (payload: string): BlogActionTypes => ({
  type: BLOG_ACTION,
  payload,
});