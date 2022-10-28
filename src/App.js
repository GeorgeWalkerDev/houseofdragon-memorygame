import {useState, useEffect} from 'react'
import Main from './components/Main'
import Header from './components/Header'

function App() {

  const [cards, setCards] = useState([
    {id: 1, order: 0, name:'Rhaenyra Targaryen' , src:'Queen_Rhaenyra.webp' },
    {id: 2, order: 1, name:'Aegon II Targaryen', src:'King_Aegon_II_profile.webp' },
    {id: 3, order: 2, name:'Daemon Targaryen', src:'Daemon-Targaryen-profile.webp' },
    {id: 4, order: 3, name:'Viserys I Targaryen', src:'Viserys_I_Targaryen_Official_Guide.webp' },
    {id: 5, order: 4, name:'Aemond Targaryen', src:'Aemond_Targaryen_Official_Guide_2.webp' },
    {id: 6, order: 5, name:'Alicent Hightower', src:'Alicent_Hightower_Infobox.webp' },
    {id: 7, order: 6, name:'Rhaenys Targaryen', src:'Rhaenys_HiRes.webp' },
    {id: 8, order: 7, name:'Meleys', src:'Meleys_Official_Guide_2.webp' },
    {id: 9, order: 8, name:'Corlys Velaryon', src:'Corlys_Velaryon_Infobox.webp' },
    {id: 10, order: 9, name:'Jacaerys Velaryon', src:'JacaerysVelaryonOlderInfobox.PNG.webp' },
    {id: 11, order: 10, name:'Laenor Velaryon', src:'Laenor_Velaryon_Official_Guide_3.webp' },
    {id: 12, order: 11, name:'Otto Hightower', src:'Otto_Hightower_Official_Guide.webp' },
  ])

  const [score, setScore] = useState({
    currentScore: 0,
    bestScore: 0,
    currentMemory: []
  })

  useEffect(() => {
    const randomiseCards = (e) => {
      if (score.currentMemory.includes(e.currentTarget.id)) {
        const newScore = {currentScore: 0, bestScore: score.currentScore > score.bestScore ? score.currentScore : score.bestScore, currentMemory: []}
        setScore(newScore)
      } else {
        const newScore = {currentScore: score.currentScore + 1, bestScore: score.bestScore, currentMemory: [...score.currentMemory, e.currentTarget.id]}
        setScore(newScore)
      }
      const randomOrderCards = cards.map(card => {
        const randomOrder = Math.floor(Math.random() * 1000) + 1;
        return {...card, order: randomOrder}
      })
      .sort((a,b) => a.order-b.order);
      setCards(randomOrderCards);
    }

    const cardsDOM = document.querySelectorAll('.card')
    cardsDOM.forEach((node) => node.addEventListener('click', randomiseCards));
    return () => {
      cardsDOM.forEach((node) => node.removeEventListener('click', randomiseCards))
    };
  })

  return (
    <div className="mx-4">
      <Header score={score}/>
      <p>Get points by clicking on an image but don't click any more than once!</p>
      <Main cards={cards}/>
    </div>
  );
}

export default App;
