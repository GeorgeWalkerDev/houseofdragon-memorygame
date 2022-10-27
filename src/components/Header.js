import React from 'react'

const Header = ({score}) => {
  return (
    <header className="d-flex justify-content-between align-items-center my-4">
        <h1>House of the Dragon - Memory Game</h1>
        <ul className="list-group">
        <li className="list-group-item">Score: {score.currentScore}</li>
        <li className="list-group-item">Best Score: {score.bestScore}</li>
        </ul>
  </header>
  )
}

export default Header