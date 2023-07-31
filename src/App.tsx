import React from "react";
import { useAppSelector } from "./hooks.ts";

import { Launch } from "./components/Launch.tsx";
import { SortButton } from "./components/SortButton.tsx";
import { Error } from "./components/Error.tsx";
import { Loading } from "./components/Loading.tsx";

import { query_Successful_2015_2019_Desc } from "./services/queries/queries.ts";

import { useGetLaunchesQuery } from "./services/api.ts";


const App = () => {
    
    // записываем полученные данные в store из-за сортировки asc/desc, чтобы не делать новый запрос на сервер 

    // возможно, решение не очень красиво: 
    // если расширять api - после отработки каждого обращения к серверу 
    // нужно будет обновлять store вручную, (TODO: автоматизировать)
    // но пока так

    const launches = useAppSelector(state => state.launches?.docs);
    
    const { error, isLoading } = useGetLaunchesQuery(query_Successful_2015_2019_Desc);

    
    if (isLoading) return <Loading />
    
    if (error) return <Error errorInfo={error} />
   
        
    return ( 
        <div className="container">   
            <SortButton /> 
            {  
                launches.map((launch) => (
                    <Launch 
                        key={launch.id} 
                        name={launch.name} 
                        details={launch.details}
                        date_unix={launch.date_unix}
                        imgUrl={launch.links.flickr.original[0]}  // TODO: refactor 
                    /> 
                ))
            }  
        </div>
    )
}

export default App;

