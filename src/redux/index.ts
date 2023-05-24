import { combineReducers } from "redux";
import userReducers from "./reducers/userReducers";

const rootReducer = combineReducers({
  auth: userReducers,
});

export default rootReducer;
