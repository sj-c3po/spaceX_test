import React from "react";

// TODO: если нет фотки - кртинку
export function Launch({name, details, date_unix, imgUrl}) {

    return (
        <div className="launch">
            <div> 
                <h2>{name}</h2>
                <span>
                    { (new Date(date_unix * 1000)).toLocaleDateString() }
                </span>
            </div>
            <div>
                <img src={imgUrl} />  
                <p>
                    {details} 
                </p>
            </div>
        </div>
    );
}