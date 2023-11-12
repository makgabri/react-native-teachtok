import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Question {
  id: string;
  text: string;
}

interface Answer {
  id: string;
  correct_options: { id: string }[];
}

interface QuestionState {
  questions: Question[];
  currentQuestionCount: number;
  answers: { [id: string]: string[] };
  error: boolean;
  errorMessage: string;
}

const initialState: QuestionState = {
  questions: [],
  currentQuestionCount: 0,
  answers: {},
  error: false,
  errorMessage: ''
};

const questionSlice = createSlice({
  name: 'mcq',
  initialState,
  reducers: {
    addQuestion: (state, action: PayloadAction<Question>) => {
      state.questions.push(action.payload);
      state.currentQuestionCount += 1;
    },
    addAnswer: (state, action: PayloadAction<Answer>) => {
      const answerId = action.payload?.id;
      if (answerId && !Object.keys(state.answers).includes(answerId)) {
        state.answers[answerId] = action.payload?.correct_options.map(data => data.id);
      }
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = true;
      state.errorMessage = action.payload;
    },
    resetMCQs: (state) => {
      state.questions = [];
      state.currentQuestionCount = 0;
      state.answers = {};
      state.error = false;
      state.errorMessage = '';
    }
  }
});

export const { addQuestion, addAnswer, setError, resetMCQs } = questionSlice.actions;

export default questionSlice.reducer;