import { QuizContext, Difficulties } from './QuizContext';
import { Categories } from '../interfaces/Category';
import { useState } from 'react';

interface QuizProviderProps {
    children: JSX.Element | JSX.Element[];
}

export const QuizProvider = ({children}: QuizProviderProps) => {

  const [difficulty, setDifficulty] = useState<Difficulties | null>(null);
  const [category, setCategory] = useState<number | null>(null);

  return (
    <QuizContext.Provider value={{
        difficulty,
        setDifficulty,
        category,
        setCategory
    }}>
        {children}
    </QuizContext.Provider>
  )
}
