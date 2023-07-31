import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { updateLaunches } from "../store/launchesSlice.ts";
import { ILaunchesList } from "../interfaces.ts"

const SPACE_X_BASE_API_URL = "https://api.spacexdata.com/v5/launches"


export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: SPACE_X_BASE_API_URL
    }),
    endpoints: builder => ({
        getLaunches: builder.query({
            query: (body) => ({
                url: "/query",
                method: "POST",
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                body
            }),
            async onQueryStarted(body, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled

                    dispatch(updateLaunches(data.docs))
                } catch (error) {
                    return error;
                }  
            }
        })
    })
})

export const { useGetLaunchesQuery } = api;