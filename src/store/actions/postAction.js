import axios from 'axios';

export const GET_POSTS = 'GET POSTS';

export function getPosts() {
  const request = axios.get('https://jsonplaceholder.typicode.com/posts');

  return (dispatch) =>
    request.then((response) => {
      dispatch({
        type: GET_POSTS,
        payload: response.data
      })
    })

}