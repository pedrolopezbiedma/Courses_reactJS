import React from 'react';

const Ninjas = ({ninjas, deleteNinja}) => {
    const ninjasList = ninjas.map(ninja => {
        if(ninja.age >= 10){
            return(
                <div className='ninja' key={ninja.id}>
                    <div>Name: { ninja.name } </div>
                    <div>Age: { ninja.age } </div>
                    <div>Belt:  { ninja.belt } </div>
                    <button onClick={() => { deleteNinja(ninja.id)} }>Delete Ninja</button>
                </div>
            )
        }
        else{
            return null
        }
    })
    return(
        <div className="ninja-list">
            { ninjasList }
        </div>
    )
}

export default Ninjas;