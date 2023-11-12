import { createSlice } from '@reduxjs/toolkit'

export const questionSlice = createSlice({
  name: 'mcq',
  initialState: {
    questions: [],
    currentQuestionCount: 0,
    answers: {}
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
    }
  }
})

export const { addQuestion, addAnswer } = questionSlice.actions

export default questionSlice.reducer