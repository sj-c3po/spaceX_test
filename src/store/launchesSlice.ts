import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ILaunchesList } from "../interfaces.ts";

const initialState: ILaunchesList = {
    docs: [], 
    orderByDesc: true 
} 

const launchesSlice = createSlice({
    name: 'launches', 
    initialState,
    reducers: {
        updateLaunches(state, action: PayloadAction<any[]>) {
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