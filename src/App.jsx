import React from "react";
import { useSelector } from "react-redux";

import { Launch } from "./components/Launch.jsx";
import { SortButton } from "./components/SortButton.jsx";
import { Error } from "./components/Error.jsx";
import { Loading } from "./components/Loading.jsx";

import { query_Successful_2015_2019_Desc } from "./services/queries/queries";

import { useGetLaunchesQuery } from "./services/api";


const App = () => {    
    
    // записываем полученные данные в store из-за сортировки asc/desc, чтобы не делать новый запрос на сервер 

    // возможно, решение не очень красиво: 
    // если расширять api - после отработки каждого обращения к серверу 
    // нужно будет обновлять store вручную, (TODO: автоматизировать)
    // но пока так

    const launches = useSelector(state => state.launches.docs);
    
    const { error, isLoading } = useGetLaunchesQuery(query_Successful_2015_2019_Desc);

    
    if (isLoading) return <Loading />
    if (error) return <Error error={error} />
        
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

