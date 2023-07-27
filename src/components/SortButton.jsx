import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { reverseLaunchesOrder } from "../store/launchesSlice";

export function SortButton() {

    const orderByDesc = useSelector(state => state.launches.orderByDesc)

    const dispatch = useDispatch();

    return (
        <button onClick={() => dispatch(reverseLaunchesOrder())}>
            {orderByDesc ? "asc" : "desc"}
        </button>
    );
}