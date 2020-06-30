import React from 'react';
import Card from '../card/card.component';
import './play-board.styles.scss';
import Timer from 'react-compound-timer';

const BASE_URL = 'http://localhost:5000';


class PlayBoard extends React.Component {
    constructor() {
        super()


        this.state = {

            cards: [],
            answerCards: [],
            isUser: false,
            msg: ''

        }

    }

    componentDidMount() {


        const userName = localStorage.getItem('userName');
        const uuid = localStorage.getItem('uuid');

        const body = {
            method: 'post',
            body: JSON.stringify({ 'userName': userName, 'uuid': uuid }),
            headers: {
                "Content-Type": "application/json"
            }
        }
        fetch(`${BASE_URL}/main`, body)
            .then(res => {
                if (res.status === 200) {
                    this.setState({ isUser: true });
                    res.json().then(data => this.setState({
                        cards: data.cardsList,
                        answerCards: data.answerCardList.sort(() => Math.random() - 0.5)
                    }))
                        .catch(err => console.log(err));
                }
                else {
                    res.json().then(data => {
                        this.setState({ msg: data.msg });
                    });
                }
            })
            .catch(err => console.log(err));

    }



    render() {

        const onTimeOut = () => {
            alert('time out');
        }

        return (
            <div>
                {this.state.isUser ?
                    (
                        <div className='page-container'>
                            <div className='cards-container'>
                                {this.state.cards.map(({ imageUrl, cardId }) => (
                                    <Card key={cardId} imageUrl={imageUrl} style='' />
                                ))}
                            </div>
                            <div className='cards-answers-container'>
                                {this.state.answerCards.map(({ imageUrl, cardId }) => (
                                    <Card key={cardId} imageUrl={imageUrl} style='answer' />
                                ))}
                            </div>
                            <div className='timer'>
                                <Timer initialTime={59000} direction="backward" checkpoints={[{ time: 0, callback: onTimeOut }]}>
                                    <div className='seconds'>
                                    <Timer.Seconds />
                                    </div>
                                </Timer>
                                <div>
                                    seconds remaining
                                </div>
                            </div>

                        </div>
                    )
                    :
                    (
                        <div className='err-msg'>
                            <h1>{this.state.msg}</h1>
                            <button onClick={this.props.moveToLogin}>Sign in</button>
                        </div>
                    )
                }
            </div>
        );
    }
}

export default PlayBoard;
