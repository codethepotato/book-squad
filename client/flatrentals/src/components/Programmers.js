import React from 'react';
import CreateProgrammer from './CreateProgram'
import ProgrammerCard from './ProgrammerCard'

function Programmers({ programmers }) {
    const programmerList = programmers.map(p => {
        return <ProgrammerCard
            key={p.id}
            name={p.name}
            picture={p.picture}
            specialty={p.specialty} />
    })
    return (
    <div>
            <CreateProgrammer />
            <div className="ui stackable four column grid" >
            {programmerList}
        </div>
    </div>
    )
}

export default Programmers