import {createAsyncThunk} from "@reduxjs/toolkit";

const initialTest = {
    id: 325426347,
    questions: [
        {
            id: 1,
            title:
                'В каких случаях перспективно применение следовых кинологических расчётов?',
            answers: [
                {
                    id: 1,
                    text: 'Оказание помощи гражданам, оказавшимся в зонах бедствия или пропавшим в безлюдной местности',
                    correct: true,
                    isChecked: false
                },
                {
                    id: 2,
                    text: 'Обучение животного идти как по горячему, так и по остывшему следу',
                    correct: true,
                    isChecked: false
                },
                {
                    id: 3,
                    text: 'Поиск тел и их остатков с применением специально обученных собак',
                    correct: true,
                    isChecked: false
                },
            ],
        },
        {
            id: 2,
            title: 'С какого возраста следует начинать дрессировку по курсу ПСС?',
            answers: [
                {
                    id: 1,
                    text: '6 месяцев',
                    correct: false,
                    isChecked: false
                },
                {
                    id: 2,
                    text: '1–1,5 года',
                    correct: true,
                    isChecked: false
                },
                {
                    id: 3,
                    text: '3 года',
                    correct: false,
                    isChecked: false
                },
            ],
        },
    ]
}

const fetchTest = createAsyncThunk(
    'course/fetch',
    async (courseId, {rejectWithValue}) => {
        try {
            async function timeout() {
                return new Promise((resolve) => setTimeout(resolve, 3000));
            }
            await timeout();
            return initialTest;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export default fetchTest;