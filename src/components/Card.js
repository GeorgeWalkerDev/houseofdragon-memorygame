import React from 'react'

const Card = ({card}) => {
  return (
    <div className="card card-color m-4" id={card.id}>
        <img className="card-img-top" src={require(`../assets/images/${card.src}`)} alt={`House of Dragons: ${card.name}`}/>
        <div className="card-body">
            <h5 className="card-title text-center">{card.name}</h5>
        </div>
    </div>
  )
}

export default Card