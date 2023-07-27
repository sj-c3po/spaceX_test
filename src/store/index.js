import { configureStore } from "@reduxjs/toolkit";
import launchesSlice from "./launchesSlice";

import { api } from '../services/api'

export default configureStore({
    reducer: {
        launches: launchesSlice,
        [api.reducerPath]: api.reducer
    },
    middleware: (getDefaultMiddleware ) =>
        getDefaultMiddleware().concat(api.middleware)
})