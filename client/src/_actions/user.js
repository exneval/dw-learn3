import { GET_USERS, POST_USER } from "../constants/action-types";
import { API } from "../config/api";

export const getUsers = () => {
  return {
    type: GET_USERS,
    async payload() {
      try {
        const users = await API.get("/users");
        return users.data;
      } catch (error) {
        console.log(error);
      }
    },
  };
};

export const postUser = (data) => {
  return {
    type: POST_USER,
    async payload() {
      try {
        await API.post("/users", data);
        const users = await API.get("/users");
        return users.data;
      } catch (error) {
        console.log(error);
      }
    },
  };
};
