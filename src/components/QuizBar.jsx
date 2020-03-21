import React from 'react';
import QuizType from './QuizType';

const QuizBar = (props) => {
    const quizArray = [
        {
            icon: "dice",
            quizType: "Random"
        },
        {
            icon: "file-alt",
            quizType: "Regular"
        },
        {
            icon: "dumbbell",
            quizType: "Weighted"
        },
        {
            icon: "font",
            quizType: "Multi"
        }
    ];

    const quizTypes = quizArray.map((qt, index) => {
        return <QuizType key={index} icon={qt.icon} quizType={qt.quizType} userChoice={props.userChoice}/>
    })

    return (
        <div className="quiz-bar">
            <h1>Choose your study type</h1>
            <ul className="nav nav-pills nav-fill">
              {quizTypes} 
            </ul>
        </div>
    )
}

export default  QuizBar;

