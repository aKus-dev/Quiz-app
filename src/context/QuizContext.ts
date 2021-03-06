import { createContext } from "react";
import { QuestionsResponse } from '../interfaces/apis/questions';

interface QuizContextProps {
    difficulty: Difficulties | null;
    setDifficulty: (dificulty: Difficulties) => void;
    category: number | null;
    setCategory: (categories: number) => void;
    questions: QuestionsResponse[] |null;
    setQuestions: (questions: QuestionsResponse[]) => void;
}

export type Difficulties = | 'Easy' | 'Medium' | 'Hard'; 

export const QuizContext = createContext({} as QuizContextProps);