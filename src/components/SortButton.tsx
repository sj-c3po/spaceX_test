import React from "react";
import { useAppSelector, useAppDispatch  } from "../hooks.ts";


import { reverseLaunchesOrder } from "../store/launchesSlice.ts";

export function SortButton() {

    const orderByDesc = useAppSelector(state => state.launches.orderByDesc)

    const dispatch = useAppDispatch();

    return (
        <button onClick={() => dispatch(reverseLaunchesOrder())}>
            {orderByDesc ? "asc" : "desc"}
        </button>
    );
}