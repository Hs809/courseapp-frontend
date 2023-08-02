import { combineReducers } from "redux";

import { userSlice } from "./features/userSlice";

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  user: userSlice.reducer,
});

export default rootReducer;
