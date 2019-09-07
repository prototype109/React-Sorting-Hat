import React from 'react';

const Results = props => {
    let highestPoint = 0;
    let houseName = '';

    const tallyResutls = () => {
        props.res.forEach(result => {
            if(result.points > highestPoint){
                highestPoint = result.points;
                houseName = result.houseName;
            }
                
        })
    }

    return(
        <div>
            {tallyResutls()}
            <h1>You Belong In House {houseName}</h1>
            {console.log('Result: ', houseName, highestPoint)}
        </div>
    )
}

export default Results;