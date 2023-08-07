import React from "react";
import { useState } from "react";
import HomeCard from './HomeCard'
import TopBanner from './TopBanner'
import Signup from './Signup'

function Home({ programmers, selectedOrders, setSelectedOrders }) {

    const programmerList = programmers.map(p => {
        return <HomeCard
            key={p.id}
            name={p.name}
            picture={p.picture}
            specialty={p.specialty}
            selectedOrders={selectedOrders}
            setSelectedOrders={setSelectedOrders} />
    })
    return (
        <div className="Homepage">
            <div>
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
