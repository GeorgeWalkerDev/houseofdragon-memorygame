import React from 'react'
import Card from './Card'

const Main = ({cards}) => {
    return (
    <main className="d-flex justify-content-center flex-wrap">
        {cards.map(card => {
            return <Card key={card.id} card={card}/>
        } )}
    </main>
    )
}

export default Main