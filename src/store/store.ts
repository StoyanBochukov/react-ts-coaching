import { configureStore } from "@reduxjs/toolkit";
import sessionsSlide from "../reducers/sessionsSlide";

const store  = configureStore({
    reducer:{
        session: sessionsSlide,
    }
});

export default store
export type AppDispatch = typeof store.dispatch;
export type RootStore = ReturnType<typeof store.getState>;