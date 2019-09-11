import React from 'react';

const Results = props => {
    let houseName = '';

    const tallyResutls = () => {
        let topScoresArr = [];
        let tempArr = [];
        let maxScore = 0;
        tempArr = props.res.map(result => result.points);
        maxScore = Math.max(...tempArr);
        topScoresArr = props.res.filter(result => maxScore === result.points);

        if(topScoresArr.length > 1){
            const randomHouse = Math.floor(Math.random() * topScoresArr.length)
            return topScoresArr[randomHouse];
        } else
            return topScoresArr[0];
    }

    houseName = tallyResutls().houseName;

    return(
        <div>
            <h1>You Belong In House {houseName}</h1>
        </div>
    )
}

export default Results;