import React from 'react';

const Welcome = props => {

    const handleClick = () => {
        props.history.push('/question/1')
    }

    return(
        <div>
            <h1>Welcome to Hogwarts</h1>
            <button onClick={handleClick}>Start Sorting</button>
        </div>
    )
}

export default Welcome;