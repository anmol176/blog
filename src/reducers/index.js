import {combineReducers} from 'redux';
import postReducer from './postReducer'; 
import userReducer from './userReducer';
export default combineReducers({
    //replaceMe: () => 10 // this line is just to return some value so the app doesn't throw an error
    //and ask for a reducer.
    posts: postReducer,
    user: userReducer
});

