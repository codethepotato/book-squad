import React from "react";


function ProgrammerCard({id, name, specialty, picture}){
    return(
        <div className="Card">
            <img src="{picture}"></img>
            <p>{name}</p>
            <p>{specialty}</p>
        </div>
    )
}

export default ProgrammerCard