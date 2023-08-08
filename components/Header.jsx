import logo from "../images/troll-face.png"

export default function Header(){
    return(
        <header>
            <div className="header--title">
                <img src={logo} alt="" className="header--logo"></img>
                <h1>Meme Generator</h1>
            </div>
            <p className="header--task">React Course - Project 3</p>
        </header>
    )
}