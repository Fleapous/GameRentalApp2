import React, { Component } from 'react';
import BackGround from "./BackGround";
import FloatingBox from "./FloatingBox";

export class Home extends Component {
  static displayName = Home.name;

  constructor(props) {
      super(props);
      this.state = {games: [], loading: true}
  }
  
  componentDidMount() {
      this.populateGames();
  }
  
  async populateGames() {
      const response = await fetch("game");
      const data = await response.json();
      console.log(data);
      this.setState({games: data, loading: false});
  }
  
  renderGames(gamesProps){
      const path = "./static/images/"
      return (
          <div>
            {gamesProps.map(game =>
                <BackGround imgUrl={require(`./static/images/${game.backGroundImg}`)}>
                    <FloatingBox
                        width={200}
                        height={200}
                        borderRad={20}
                        color={"White"}
                        padding={20}
                        position={{ top: '200px', left: '300px' }}
                        rotation={30}
                        positioning={"absolute"}
                        >
                        <h2>{game.name}</h2>
                    </FloatingBox>
                </BackGround>
            )}
          </div>
      );
      
  }
  

    render() {
      let games = this.renderGames(this.state.games);
      return (
          <div>
              {games}
          </div>
      );
  }
}

