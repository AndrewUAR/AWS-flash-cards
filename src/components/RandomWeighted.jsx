import React from 'react';

export const RandomWeighted = ({question}) => {
    return (
        <div>
            <div className="card-back">
                <div>{question.service}</div>
                <div className="commonality">{question.common}</div>
            </div>
            <div className="card-front">
                <div>{question.cat}</div>
            </div>
        </div>
    )
}

export default RandomWeighted;