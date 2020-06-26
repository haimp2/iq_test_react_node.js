import React from 'react';
import Card from '../card/card.component';
import './play-board.styles.scss';

const imageBaseUrl = 'http://localhost:5000/main';



class PlayBoard extends React.Component {
    constructor() {
        super()


        this.state = {

            cards: [],
            answerCards: []

        }

    }
   async componentDidMount() {

        try{
        const response = await fetch(imageBaseUrl)
        const data = response.json();
        this.setState({
            cards: data.cardsList,
            answerCards: data.answerCardList.sort(() => Math.random() - 0.5)
        });}
        catch(err){
            console.log(err);
        }
    }


    render() {
        return (
            <div>
                <div className='cards-container'>
                    {this.state.cards.map(({ imageUrl, id }) => (
                        <Card k
                            ey={id} imageUrl={imageUrl} style='' />
                    ))}
                </div>
                <div className='cards-answers-container'>
                    {this.state.answerCards.map(({ imageUrl, id }) => (
                        <Card key={id} imageUrl={imageUrl} style='answer' />
                    ))}
                </div>
            </div>

        );
    }
}

export default PlayBoard;