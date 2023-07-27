import { createSlice } from "@reduxjs/toolkit";

const launchesSlice = createSlice({
    name: 'launches', 
    initialState: {
        docs: [], 
        orderByDesc: true 
    },
    reducers: {
        updateLaunches(state, action) {
            state.docs = action.payload 
        },
        reverseLaunchesOrder(state) {
            state.docs = state.docs.reverse();

            state.orderByDesc = !state.orderByDesc
        }
    }
})

export const { updateLaunches, reverseLaunchesOrder } = launchesSlice.actions;

export default launchesSlice.reducer;