import { createStore, applyMiddleware } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./reducers";
import { api } from "./middleware/api";
import { statusReportMiddleware } from "./middleware/statusReport";

const middlewareEnhancers = applyMiddleware(...statusReportMiddleware, api);
const enhancers = [middlewareEnhancers];

const store = createStore(reducer, composeWithDevTools(middlewareEnhancers));
export default store;