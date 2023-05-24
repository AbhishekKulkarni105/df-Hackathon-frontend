import { combineReducers } from "redux";
import { Store } from "../../types/Redux";

import userReducer from "./UserReducer";

const rootReducer = combineReducers<Store>({
  userSession: userReducer,
});

export default rootReducer;
