import { combineReducers } from "redux";

import userReducer from "./features/userSlice";

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  user: userReducer,
});

export default rootReducer;
