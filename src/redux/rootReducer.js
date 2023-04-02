import { combineReducers } from "redux";
import filtersReducer from "./filters/reducer";
import todosReducer from "./todos/reducer";

const rootReducer = combineReducers({
    todos: todosReducer,
    filters: filtersReducer
})
export default rootReducer;