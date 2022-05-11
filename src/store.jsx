import thunk from "redux-thunk";
import { combineReducers, applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { listsReducer } from "./redux/reducers/reducers";

const middleware = [thunk];
const initialState = {};

const rootReducer = combineReducers({
  listsReducer,
});
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
