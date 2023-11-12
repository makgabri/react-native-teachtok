import axios from "axios";
import * as endpoints from './endpoints.json'

import { addQuestion, addAnswer } from '@utils/questionSlice';


const api = {
    getQuestion: (dispatch) => {
        axios.get(`${endpoints.head}${endpoints.question}`)
            .then((data) => {
                dispatch(addQuestion(data.data))
            }).catch(err => {
                console.log(err)
            })
    },
    getAnswer: (dispatch, id) => {
        axios.get(`${endpoints.head}${endpoints.answer}?id=${id}`)
            .then((data) => {
                dispatch(addAnswer(data.data))
            }).catch(err => {
                console.log(err)
            })
    }
}

export default api