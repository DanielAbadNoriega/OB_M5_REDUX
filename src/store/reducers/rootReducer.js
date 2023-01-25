import { combineReducers } from "redux";
import { filterReducer } from "./filterReducer";
import { todosReducer } from "./todosReducer";

export const rootReducer = combineReducers(
  {
    // Receives state name : reducer that will control it
    todosState: todosReducer,
    filterState: filterReducer
    // ...add more state and reducers to include them in the store
  }
)