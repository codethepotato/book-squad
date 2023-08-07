import React from "react";
import  useState  from "react";
import HomeCard from './HomeCard'
import TopBanner from './TopBanner'

function Home({programmers}){

    const programmerList = programmers.map(p => {
        return <HomeCard
        key={p.id}
        name={p.name}
        picture={p.picture}
        specialty={p.specialty} />
    })
    return(
        <div className="Homepage"> 
            <div>
                <TopBanner />
                <div className="ui stackable four column grid">
                    {programmerList}
                </div>
            </div>
        </div>
    )
}

export default Home
