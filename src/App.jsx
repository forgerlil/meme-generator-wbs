import { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";

const meme_url = "https://api.imgflip.com/get_memes";

const Meme = ({ name, url, id }) => (
    <div>
        <h3>
            {name} ({id})
        </h3>
        <img src={url}></img>
    </div>
);

function App() {
    const [memes, setMemes] = useState([]);
    const [meme, setMeme] = useState({});

    useEffect(() => {
        axios.get(meme_url).then((memeData) => {
            console.log(memeData)
            setMemes(memeData.data.data.memes);
            setMeme(memeData.data.data.memes[0]);
        });
    }, []);

    return (
        <div className="App">
            {Meme(meme)}
            <Meme name={meme.name} url={meme.url}></Meme>
            <Meme {...meme}></Meme>
            {/* {memes.map(Meme)} */}
        </div>
    );
}

export default App;
