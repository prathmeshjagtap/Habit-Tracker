import { authentication } from "./authentication";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
	authentication,
});

export { rootReducer };
