import axios, { AxiosResponse } from "axios";
import * as endpoints from './endpoints.json'

import { addQuestion, addAnswer, setError } from '../utils/questionSlice';
import { Dispatch } from 'redux';

interface Api {
    getQuestion: (dispatch: Dispatch<any>) => void;
    getAnswer: (dispatch: Dispatch<any>, id: string) => void;
}

const api: Api = {
    getQuestion: (dispatch: Dispatch<any>) => {
        axios.get(`${endpoints.head}${endpoints.question}`)
            .then((data: AxiosResponse) => {
                dispatch(addQuestion(data.data))
            }).catch((err: Error) => {
                dispatch(setError(err.message))
            })
    },
    getAnswer: (dispatch: Dispatch<any>, id: string) => {
        axios.get(`${endpoints.head}${endpoints.answer}?id=${id}`)
            .then((data: AxiosResponse) => {
                dispatch(addAnswer(data.data))
            }).catch((err: Error) => {
                dispatch(setError(err.message))
            })
    }
}

export default api;