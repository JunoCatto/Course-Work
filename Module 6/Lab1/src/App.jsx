import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Pet from './Pet.jsx'
import Emoji from './Emoji.jsx'
import { MoviesList } from './Movielist.jsx'
import { BigCats } from './BigCats.jsx'

function App() {
  const [count, setCount] = useState(0)

  const emojiMoods = ["😀","😁","😈","🤕","🤥","🙂‍↕️"]
  const [emojiIndex, setEmojiIndex] = useState(0)

  const changeEmoji = () => {
    setEmojiIndex((prevIndex) => (prevIndex + 1) % emojiMoods.length)
  }

function City ({name, state = 'NSW', country = 'Australia', children}) {
return (
  <div className="City">
    <strong>{name}</strong> is in {state}, {country}.
    {children}
  </div>
)
}

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>My First React App</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {/* <City name="Newcastle">
        <div>Newcastle is a city in NSW, Australia.</div>
      </City> */}
      {/* <Pet name="Monkey" colour="Calico" type="Cat">
        </Pet> */}
        <Emoji emoji={emojiMoods[emojiIndex]}/>
    
        <button onClick={changeEmoji}>Change Emoji</button>

        <MoviesList />
        <BigCats />
        </>
  )
}
export default App
