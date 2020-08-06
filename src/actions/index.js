import jsonPlaceholder from '../apis/jsonPlaceholder';
export const fetchPosts = () => async dispatch => {
    //Error message: By using async and await we get Actions must be plain objects. 
    //In order to resolve this, we need to use middlewares Redux thunk is the middleware 
    //which we can use to make those http requests.

    //we can pass getState as a parameter as well.
    const response = await jsonPlaceholder.get('/posts');

    //when we have 2 return statements, we are concerned about the outer return statement.
    /* we could use this syntax but below is a shorthand version of it with the dispatch function invoked on it.
    return {
        type: 'FETCH_POSTS',
        payload: promise
    }; */

    dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

/* SYNTAX:
export const searchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts');
    //Suppose to call an action on the dispatch function. 
    dispatch({ type: 'FETCH_POSTS', payload: response })
};

*/

//we pass in a single argument id because it is the ID of the user that we want to fetch.
export const fetchUser = (id) => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({type: 'FETCH_USER',payload: response.data});

}


