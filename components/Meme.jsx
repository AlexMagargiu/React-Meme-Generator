import { useState } from "react"
import memesData from "../memesData"

export default function Meme(){
    const [memeImage, setMemeImage] = useState("");

    function getRandomMeme(){
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
    }
    return(
        <main>
            <div className="form">
                <input type="text" className="form--input" placeholder="Top text"></input>
                <input type="text" className="form--input" placeholder="Bottom text"></input>
                <button className="form--submit" onClick={getRandomMeme}>Get a new meme image 🖼</button>
                <img src={memeImage} className="meme--image" />
            </div>
        </main>
    )
}