import React from 'react'
import './mainpage.styles.scss'
import PlayBoard from '../../components/play-board/play-board.component'

const MainPage = () =>(
    <div>
        <h1 className='header'>IQ test</h1>
        <PlayBoard/>
    </div>
);

export default MainPage;