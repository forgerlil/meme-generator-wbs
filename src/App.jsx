import { useEffect, useState } from "react";
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
        fetch(meme_url)
            .then((response) => {
                return response.json();
            })
            .then((memeData) => {
                setMemes(memeData.data.memes);
                setMeme(memeData.data.memes[0]);
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
