import './App.css';
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import fetchTest from "../../store/testThunk";
import {getIsLoading, getTest} from "../../store/testSelector";
import Question from "../question/Question";

function App() {
    const dispatch = useDispatch()
    const isLoading = useSelector(getIsLoading)
    const test = useSelector(getTest)
    useEffect(() => {
        dispatch(fetchTest())
    }, [dispatch])
    if (isLoading) {
        return (
            <div>Загрузка ..... </div>
        )
    }
    let questionsList
    if(test.questions && test.questions.length > 0){
        questionsList = test.questions.map((question, index) => <Question key={question.id}
                                                                          question={question} index={index}/>)
    }
    return (
        <div className="App">
            <header>
                <h1>Тест</h1>
                <p>{`id: ${test.id}`}</p>
            </header>
            {questionsList}
        </div>
    );
}

export default App;
