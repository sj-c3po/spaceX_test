import React from "react";

// TODO: fix type ts
export function Error({errorInfo}: any) {

    return (
        <div>
            Something goes wrong:
            <p>
                {errorInfo.status} {errorInfo.data} 
            </p>
        </div>
    );
}