import {
    configureStore,
    combineReducers,
    getDefaultMiddleware
} from "@reduxjs/toolkit";
import questionNumberSlice from "./questionNumberSlice";
import questionsSlice from "./questionsSlice";
import questionTitleSlice from "./questionTitleSlice";

const rootReducer = combineReducers({
    [questionNumberSlice.name]:questionNumberSlice.reducer,
    [questionsSlice.name]:questionsSlice.reducer,
    [questionTitleSlice.name]:questionTitleSlice.reducer,
});

const store = configureStore({
    reducer: rootReducer,
    middleware: [...getDefaultMiddleware({serializableCheck:false})]
});
store.subscribe(()=> console.log(store.getState()));
export default store;
