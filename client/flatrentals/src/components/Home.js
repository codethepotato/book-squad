import React from "react";
import  useState  from "react";
import HomeCard from './HomeCard'
import TopBanner from './TopBanner'

function Home(){
    return(
        <div className="Homepage"> 
            <div>
                <TopBanner />
                <HomeCard />
            </div>
        </div>
    )
}

export default Home
