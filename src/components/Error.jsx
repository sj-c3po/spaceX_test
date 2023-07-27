import React from "react";

export function Error({error}) {

    return (
        <div>
            Something goes wrong:
            <p>
                {error.status} {error.data} 
            </p>
        </div>
    );
}