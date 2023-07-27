import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { updateLaunches } from "../store/launchesSlice";


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
                const { data } = await queryFulfilled

                dispatch(updateLaunches(data.docs))
            }
        })
    })
})

export const { useGetLaunchesQuery } = api;