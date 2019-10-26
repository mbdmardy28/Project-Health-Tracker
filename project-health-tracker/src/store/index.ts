import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./reducers";
import api from "../services";

export default function configureStore() {
    const middlewares = [thunk.withExtraArgument(api)];
    const middlewareEnhancers = applyMiddleware(...middlewares);
    const enhancers = [middlewareEnhancers];
    const store = createStore(reducer, composeWithDevTools(...enhancers));
    return store;
}   