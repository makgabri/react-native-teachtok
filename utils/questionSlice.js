import { createSlice } from '@reduxjs/toolkit'

export const questionSlice = createSlice({
  name: 'mcq',
  initialState: {
    questions: [],
    currentQuestionCount: 0,
    answers: {},
    error: false,
    errorMessage: ''
  },
  reducers: {
    addQuestion: (state, question) => {
      state.questions.push(question.payload)
      state.currentQuestionCount += 1
    },
    addAnswer: (state, answer) => {
      const answerId = answer.payload?.id
      if (answerId && !Object.keys(state.answers).includes(answerId)) {
        state.answers[answerId] = answer.payload?.correct_options.map(data => data.id)
      }
    },
    setError: (state, message) => {
      state.error = true,
      state.errorMessage = message.payload
    },
    resetMCQs: (state) => {
      state.questions = []
      state.currentQuestionCount = 0
      state.answers = {}
      state.error = false
      state.errorMessage = ''
    }
  }
})

export const { addQuestion, addAnswer, setError, resetMCQs } = questionSlice.actions

export default questionSlice.reducer