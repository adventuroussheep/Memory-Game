import React, {Component} from 'react';
import TileCards from "./components/TileCards/TileCards";
import Wrapper from "./components/Wrapper/Wrapper";
import Header from "./components/Header/Header";
import ImageJson from "./images.json";

// Shuffle Function
function shuffle(array){
  for (let i = array.length - 1; i > 0; i--){
    const x = Math.floor(Math.random() * ( i + 1 ));
    [array[i], array[x]] = [array[x], array[i]];
  }
  return array;
}


class App extends Component {
  state = {
    ImageJson,
    score: 0,
    highscore: 0,
    clickedImagesArr: []
  };

  
  // Function when image is clicked
  clickedImage = id => {
    let clickedImagesArr = this.state.clickedImagesArr;
    let score = this.state.score;
    let highscore = this.state.highscore;

    // Set Highscore
    if (score > highscore){
      this.setState({highscore: score});
    }

    // pushes image id to images arr
    if (clickedImagesArr.indexOf(id) === -1){
      clickedImagesArr.push(id);
      console.log(clickedImagesArr);
      this.addToScore();
      this.shuffleImages();

      // winning conditions
    } else if (this.state.score >= 11){
      alert("Congratulations, your memory is great!");
      this.setState({
        score: 0,
        clickedImagesArr:[]
      })

      // losing conditions
    } else {
      alert("You Lost! You scored: " + score);
      this.setState({
        score: 0,
        clickedImagesArr: []
        })
    }
  }

  
  // adds to score
  addToScore = () => {
    this.setState({ score: this.state.score + 1 })
  };

  // shuffles images
  shuffleImages = () => {
    this.setState({ImageJson: shuffle(ImageJson)});
  }



  render(){
    return(
      <>
      <Header
        score = {this.state.score}
        highscore = {this.state.highscore}
      />
      <Wrapper>
        {this.state.ImageJson.map(images => (
          <TileCards 
            key={images.id}
            id={images.id}
            name={images.name}
            image={images.image}
            class = {"imgClass"}
            clickedImage = {this.clickedImage}
          />
        ))}
        </Wrapper>
      </>

    )
  }

}

export default App;