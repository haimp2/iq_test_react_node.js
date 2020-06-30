import React from 'react'
import './mainpage.styles.scss'
import PlayBoard from '../../components/play-board/play-board.component'


const MainPage = (props) => {

    const moveToLogin = ()=>props.history.push('/login')

    return (
        <div>
            <h1 className='header'>IQ test</h1>
            <PlayBoard moveToLogin = {moveToLogin} />
        </div>
    );
}

export default MainPage;