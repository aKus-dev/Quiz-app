import { createContext } from "react";

interface QuizContextProps {
    difficulty: Difficulties | null;
    setDifficulty: (dificulty: Difficulties) => void;
    category: number | null;
    setCategory: (categories: number) => void;
}

export type Difficulties = | 'Easy' | 'Medium' | 'Hard'; 

export const QuizContext = createContext({} as QuizContextProps);