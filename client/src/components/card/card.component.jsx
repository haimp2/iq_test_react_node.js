import React from 'react'
import './card.styles.scss'


// const Card = ({ imageUrl, style }) => (
//     <div className={`card ${style}`}>
//         <img src={require('../../icons/cards-icons/' + imageUrl)} alt="card" />
//     </div>
// );

const Card = ({ imageUrl, style }) => (
    <div className={`card ${style}`}>
        <img src={imageUrl} alt="card" />
    </div>
);

export default Card;