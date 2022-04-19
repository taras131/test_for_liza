import React from 'react';
import {useDispatch} from "react-redux";
import {change} from "../../store/testSlice";

const Answer = ({answer, questionId, questionType}) => {
    const dispatch = useDispatch()
    const onClick = () => {
        dispatch(change({answerId: answer.id, questionId}))
    }
    return (
        <div>
            <input type={questionType} checked={answer.isChecked} onChange={onClick}/>
        </div>
    );
};

export default Answer;