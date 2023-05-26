import { combineReducers } from 'redux';

import posts from './Posts';
import user from './User';
import comments from './Comments';
import userPosts from './UserPosts';

const reducer = combineReducers({
  posts,
  user,
  comments,
  userPosts,
});

export default reducer;