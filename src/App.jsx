import './App.css';
import { useState, useEffect } from 'react'
import imgFetch from './APIs/meme-img-fetch'

const randomMeme = Math.floor(Math.random()* 100);

function App() {
  const [ memeImgs, setMemeImgs ] = useState(false);
  const [ firstText, setFirstText ] = useState('');
  const [ secondText, setSecondText ] = useState('');

  const goBack = () => {
    alert(`Going back...`)
  }

  const goNext = () => {
    alert(`Going forward...`)
  }

  const goRandom = () => {
    alert(`Selecting a random meme...`)
  }

  const topText = (e) => {
    setFirstText(e.target.value)
  }

  const bottomText = (e) => {
    setSecondText(e.target.value)
  }

  //Learning here: Run the fetch first, then assign the returned object in the variable state!
  //  If assigning the fetch to the variable (setVariable(fetch...)), you're storing a PROMISE
  //  in the variable and not the result!
  useEffect(() => {
  // When passing a function as a parameter for another function, don't call the function when passing
  // function(parameterFunc) and NOT function(parameterFunc())
    imgFetch(setMemeImgs)
  }, [])

  return (
    memeImgs &&
    <div className="app">
      <div className="meme-wrapper">
        <p className="top-text">{firstText}</p>
        <p className="bottom-text">{secondText}</p>
        <img className="meme-img" src={memeImgs[randomMeme].url} alt={memeImgs[randomMeme].name} />
      </div>
      <div className="input-wrapper">
        <h3>{memeImgs[randomMeme].name}</h3>
        <label for="top-text-input">Top text</label>
        <input className="" type="text" name="top-text" id="top-text-input" onChange={topText} />
        <label for="bottom-text-input">Bottom text</label>
        <input className="" type="text" name="bottom-text" id="bottom-text-input" onChange={bottomText} />
      </div>
      <button onClick={goBack}>Previous Meme</button>
      <button onClick={goNext}>Next Meme</button>
      <button onClick={goRandom}>Random Meme</button>
    </div>
  );
}

export default App;