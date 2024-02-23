import React, { Component } from 'react';
import BackGround from "../../components/BackGround";
import FloatingBox from "../../components/FloatingBox";
import DataFetcher from "../../components/DataFetcher";

export class Home extends Component {
    static displayName = Home.name;

    renderGames = ({ data, loading, error }) => {
        if (loading) {
            return <div>Loading...</div>;
        }

        if (error) {
            return <div>Error: {error.message}</div>;
        }

        return (
            <div>
                {data.map(game => (
                    <BackGround key={game.id} imgUrl={require(`../../Assets/Images/${game.backGroundImg}`)}>
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
                ))}
            </div>
        );
    };

    render() {
        return (
            <div>
                <DataFetcher url="game" render={this.renderGames} />
            </div>
        );
    }
}
