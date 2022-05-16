import './App.css';
import {useState} from "react";
import Question from "../question/Question";
import Result from "../result/result";

function App() {
    const [status, setStatus] = useState('question')
    const [answer, setAnswer] = useState(false)

    return (
        <div className="App">
            <header>
                <h1>Тест вменяемости</h1>
            </header>
            {status === 'question' && (
                <Question status = {status} setStatus={setStatus}
                          answer = {answer} setAnswer = {setAnswer}/>
            )}
            {status === 'result' && (
                <Result status = {status} setStatus={setStatus}
                          answer = {answer} setAnswer = {setAnswer}/>
            )}

        </div>
    );
}

export default App;
