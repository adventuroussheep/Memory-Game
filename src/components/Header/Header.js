import React from "react";
import './header.css';

function Header(props){
    return(
        <>
        {/* navbar */}
        {/* <nav className="navbar navbar-dark bg-dark">
            <span className="navbar-brand mb-0 h1">Memory Game</span>
            <div>
                <h5>Score: {props.score}</h5>
            </div>
            <div>
                <h5>HighScore: {props.highscore}</h5>
            </div>
        </nav> */}

        <div className="jumbotron jumbotron-fluid">
  <div className="container">
    <h1 className="display-4">King of the Hill Memory Test</h1>
    <p className="lead">Avoid pressing the same image twice! This project user React.js and Bootstrap</p>
  </div>
</div>

<nav className="navbar navbar-dark bg-dark">
            <span className="navbar-brand mb-0 h1">Memory Game</span>
            <div>
                <h5>Score: {props.score}</h5>
            </div>
            <div>
                <h5>HighScore: {props.highscore}</h5>
            </div>
        </nav>
        </>
    )
}

export default Header;