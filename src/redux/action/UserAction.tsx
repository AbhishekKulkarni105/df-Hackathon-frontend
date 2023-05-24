import { Dispatch } from "redux";
import axios from "axios";

// login action
const login = (username: string, password: string) => {
  return async (dispatch: Dispatch) => {
    try {
      // API call
      const response = await axios.post("/api/login", { username, password });

      // Store the access token in local storage
      localStorage.setItem("accessToken", response.data.accessToken);

      // Dispatch action to store authenticated user data in Redux store
      dispatch({ type: "LOGIN_SUCCESS", payload: response.data.user });
    } catch (error) {
      // Dispatch action for login failure
      dispatch({ type: "LOGIN_FAILURE", payload: error });
    }
  };
};

// logout action
const logout = () => {
  // Clear the access token from local storage
  localStorage.removeItem("accessToken");

  // Dispatch action to clear user data from Redux store
  return { type: "LOGOUT" };
};

const UserActions = { login, logout };

export default UserActions;
