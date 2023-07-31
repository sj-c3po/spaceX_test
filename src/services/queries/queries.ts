export const query_Successful_2015_2019_Desc = {
    "query":{
        "success": true,
        "date_utc": {
            "$gte": "2014-12-31T00:00:00.000Z",
            "$lte": "2020-01-01T00:00:00.000Z"
            }
    },
    "options":{
        "limit": 100, // 10 by default, TODO: fix hardcode
        "sort":{
            "flight_number":"desc"
        }
    }
}