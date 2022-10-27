// import {useState} from 'react'

function App() {

  return (
    <div className="container">
      <header className="d-flex justify-content-between align-items-center my-4">
        <h1>Memory Game</h1>
        <ul className="list-group">
          <li className="list-group-item">Score:</li>
          <li className="list-group-item">Best Score:</li>
        </ul>
      </header>
      <main className="d-flex justify-content-center">
        <div className="card card-color" style={{width: '18rem'}}>
          <img className="card-img-top" src="..." alt="Game of thrones"/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
