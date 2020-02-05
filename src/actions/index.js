import jsonPlaceholder from '../apis/jsonplaceholder';

export const fetchPosts = () => { 
  //in case of api call action to be dispatched manually
  return async (dispatch) => {
    const response = await jsonPlaceholder.get('/posts');

    dispatch({type: 'FETCH_POSTS', payload: response.data });
  };
};

export const fetchuser = (id) => { 

  return async (dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({type: 'FETCH_USER', payload: response.data });
  };
};










//way to apply redux thunk and with redux thunk we are able to return function also with power to manual dispatch
  //and get state of the action
  //Also now we can use async await while dispatching our action
  //manually using dispatch
  //asynchronous action creator

    //now instead of returning this action and getting error we can use dispatch to manually returning action
    /*return {
        type : 'FETCH_POSTS',
        payload: promise
    };*/