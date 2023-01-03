import React from "react";
import {Helmet} from "react-helmet";

function MetaData({title}){
    return(
        <div className="metadata">
            <Helmet>{title}</Helmet>
        </div>

    )
}

export default MetaData;
