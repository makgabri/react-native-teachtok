import axios from "axios";
import * as endpoints from './endpoints.json'

import { addQuestion, addAnswer, setError } from '@utils/questionSlice';


const api = {
    getQuestion: (dispatch) => {
        axios.get(`${endpoints.head}${endpoints.question}`)
            .then((data) => {
                dispatch(addQuestion(data.data))
            }).catch(err => {
                dispatch(setError(err.message))
            })
    },
    getAnswer: (dispatch, id) => {
        axios.get(`${endpoints.head}${endpoints.answer}?id=${id}`)
            .then((data) => {
                dispatch(addAnswer(data.data))
            }).catch(err => {
                dispatch(setError(err.message))
            })
    }
}

export default api