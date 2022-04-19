import React from 'react';

const Question = ({question, index}) => {
    console.log(question)
    return (
        <div>
            <h2>{`${index + 1}. ${question.title}`}</h2>
        </div>
    );
};

export default Question;