import {
    configureStore,
    combineReducers,
    getDefaultMiddleware
} from "@reduxjs/toolkit";
import questionNumberSlice from "./questionNumberSlice";
import questionsSlice from "./questionsSlice";
import notificationSlice from "./notification";

const rootReducer = combineReducers({
    [questionNumberSlice.name]:questionNumberSlice.reducer,
    [questionsSlice.name]:questionsSlice.reducer,
    [notificationSlice.name]:notificationSlice.reducer,
});

const store = configureStore({
    reducer: rootReducer,
    middleware: [...getDefaultMiddleware({serializableCheck:false})]
});
store.subscribe(()=> console.log(store.getState()));
export default store;
