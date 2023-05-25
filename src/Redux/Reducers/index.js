import { combineReducers } from 'redux';

import posts from './Posts';
import user from './User';
import comments from './Comments';

const reducer = combineReducers({
  posts,
  user,
  comments,
});

export default reducer;