import { configureStore } from "@reduxjs/toolkit";
import launchesSlice from "./launchesSlice.ts";

import { api } from '../services/api.ts'

const store = configureStore({
    reducer: {
        launches: launchesSlice,
        [api.reducerPath]: api.reducer
    },
    middleware: (getDefaultMiddleware ) =>
        getDefaultMiddleware().concat(api.middleware)
})

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;