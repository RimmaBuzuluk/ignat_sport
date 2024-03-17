import { combineReducers, configureStore } from '@reduxjs/toolkit';
import productReducer from './reduser/ProductReduser';
import commentReducer from './reduser/CommentReduser';

const rootReducer = combineReducers({
	product: productReducer,
	comment: commentReducer,
});

const store = configureStore({
	reducer: rootReducer,
});

export default store;
