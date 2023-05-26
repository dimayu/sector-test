import { combineReducers } from 'redux';

import posts from './Posts';
import user from './User';
import comments from './Comments';
import userPosts from './UserPosts';
import errors from './Errors';

const reducer = combineReducers({
  posts,
  user,
  comments,
  userPosts,
  errors,
});

export default reducer;