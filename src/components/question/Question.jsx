import React from 'react';
import Answer from "../answer/Answer";

const Question = ({question, index}) => {
    console.log(question)
    const answersList = question.answers.map((answer) => <Answer key={answer.id}
                                                                 answer={answer}
                                                                 questionId={question.id}
                                                                 questionType={question.type}/>)
    return (
        <div>
            <h2>{`${index + 1}. ${question.title}`}</h2>
            {answersList}
        </div>
    );
};

export default Question;