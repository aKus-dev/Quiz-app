import { QuizContext, Difficulties } from './QuizContext';
import { useState } from 'react';
import { QuestionsResponse } from '../interfaces/apis/questions';

interface QuizProviderProps {
  children: JSX.Element | JSX.Element[];
}

export const QuizProvider = ({ children }: QuizProviderProps) => {

  const [difficulty, setDifficulty] = useState<Difficulties | null>(null);
  const [questions, setQuestions] = useState<QuestionsResponse[] | null>(null);
  const [category, setCategory] = useState<number | null>(null);

  return (
    <QuizContext.Provider value={{
      difficulty,
      setDifficulty,
      category,
      setCategory,
      questions,
      setQuestions
    }}>
      {children}
    </QuizContext.Provider>
  )
}
