import React from 'react';
import styles from './result.module.css'

const Result = ({status, setStatus, answer, setAnswer}) => {
    const onClick = () => {
        setStatus('question')
    }
    return (
        <div>
            <p>Вы неадекватная сука</p>
            {answer && (
                <p>с неадекватной самооценкой</p>
            )}
            {!answer && (
                <p>трезво оценивающая себя</p>
            )}
            <button className={styles.button} onClick={onClick}>
                Попробовать снова
            </button>
            <p>но ваши ножки, как ,полагаю, и пряники</p>
            <p>- безупречны</p>
        </div>
    );
};

export default Result;