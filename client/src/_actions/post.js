import { GET_POSTS } from "../constants/action-types";
import { API } from "../config/api";

export const getPosts = (id) => {
  const endPoint = `https://jsonplaceholder.typicode.com/posts${
    id ? `/${id}` : ""
  }`;
  return {
    type: GET_POSTS,
    payload: API.get(endPoint),
  };
};
