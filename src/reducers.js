import { combineReducers } from "redux";

import courseSlice from "./features/courseSlice";
import userSlice from "./features/userSlice";

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  user: userSlice,
  course: courseSlice,
});

export default rootReducer;
