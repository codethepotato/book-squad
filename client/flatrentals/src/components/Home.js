import React from "react";
import HomeCard from './HomeCard'
import TopBanner from './TopBanner'
import Signup from './Signup'
import User from './User'

function Home({programmers}) {

    const programmerList = programmers.map(p => {
        return <HomeCard
            key={p.id}
            name={p.name}
            picture={p.picture}
            specialty={p.specialty}
            />
    })
    return (
        <div className="Homepage">
            <div>
                <User />
                <TopBanner />
                <Signup />
                <div className="ui stackable four column grid">
                    {programmerList}
                </div>
            </div>
        </div>
    )
    }

export default Home
