import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import urlReducer from "./urlReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  error: errorReducer,
  url: urlReducer
});

export default rootReducer;
