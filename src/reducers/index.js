import { combineReducers } from 'redux';
import postsReducer from './fetchPost';
import UserReducer  from './UserReducer';

export default combineReducers({
    posts : postsReducer,
    users : UserReducer
});