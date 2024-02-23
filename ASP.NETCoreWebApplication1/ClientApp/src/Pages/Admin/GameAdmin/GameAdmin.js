import React, {Component} from "react";
import {Outlet} from "react-router-dom";
import DataFetcher from "../../../components/DataFetcher";

export class GameAdmin extends Component {
    static displayName = GameAdmin.name;

    GameData = ({game}) => {
        return (
            <li>
                <p>{game.name}</p>
            </li>
        );
    };
    RenderGameData = ({data, loading, error}) =>{
        if(loading){
            return (
                <h3>Loading...</h3>
            );
        }
        
        if(error){
            return <h3>Error: {error.message}</h3>
        }
        
        const {GameData} = this;
        
        return (
            <div>
                <ol>
                    {data.map(game => (
                        <GameData key={game.id} game={game}/>
                    ))}
                </ol>
            </div>
        );
    }
    
    render() {
        return (
            <DataFetcher url="game" render={this.RenderGameData} />
        );
    }
}