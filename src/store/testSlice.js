import {createSlice} from '@reduxjs/toolkit';
import fetchTest from "./testThunk";

const CHECKBOX = 'checkbox'
const RADIO = 'radio'

export const testSlice = createSlice({
    name: 'test',
    initialState: {
        test: {},
        isLoading: false,
        error: null,
    },
    reducers: {
        change: (state, action) => {
            state.test.questions = [...state.test.questions.map(question => {
                if (question.id === action.payload.questionId) {
                    return {
                        ...question, answers: [...question.answers.map(answer => {
                            if (answer.id === action.payload.answerId) {
                                return {...answer, isChecked: !answer.isChecked}
                            }
                            if (question.type === RADIO) {
                                return {...answer, isChecked: false}
                            }
                            return answer
                        })]
                    }
                } else {
                    return question
                }
            })]
        }
    },
    extraReducers: {
        [fetchTest.pending.type]: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        [fetchTest.fulfilled.type]: (state, {payload}) => {
            state.test = {
                ...payload, questions: [...payload.questions.map(question => {
                    let countCorrectAnswers = 0
                    question.answers.forEach(answer => {
                        if (answer.correct) countCorrectAnswers++
                    })
                    if (countCorrectAnswers > 1) {
                        return {...question, type: CHECKBOX}
                    } else {
                        return {...question, type: RADIO}
                    }
                })]
            };
            state.isLoading = false;
        },
        [fetchTest.rejected.type]: (state, {payload}) => {
            state.test = {};
            state.isLoading = false;
            state.error = payload;
        },
    },
});
export const {change} = testSlice.actions;
export default testSlice.reducer;