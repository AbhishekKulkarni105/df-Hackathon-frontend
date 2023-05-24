interface AuthState {
  isAuthenticated: boolean;
  user: object; // Replace with appropriate user data type
  error: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: {},
  error: null,
};

const userReducers = (state = initialState, action: any) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        error: null,
      };
    case "LOGIN_FAILURE":
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        error: null,
      };
    default:
      return state;
  }
};

export default userReducers;
