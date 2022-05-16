import React from 'react';
import Answer from "../answer/Answer";
import styles from "./question.module.css"

const Question = ({status, setStatus, answer, setAnswer}) => {
    const onClick = () => {
        setAnswer(!answer)
    }
    const onSend = () => {
        setStatus('result')
    }
    return (
        <div>
            <form>
                <h2>Вы вменяемый человек?</h2>
                <div className={styles.answer}>
                    <input type={"radio"} checked={answer} onChange={onClick}/>
                    <p>Да</p>
                </div>
                <div className={styles.answer}>
                    <input type={"radio"} checked={!answer} onChange={onClick}/>
                    <p>Нет</p>
                </div>
                <button className={styles.button} onClick={onSend}>
                    Отправить
                </button>
            </form>
        </div>
    );
};

export default Question;