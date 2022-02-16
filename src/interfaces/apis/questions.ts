
export interface QuestionProps {
    questionData: QuestionsResponse[];
}


export interface QuestionsResponse {
    question: string;
    type: TypeOfQuestion;
    indexCorrect: number;
    answers: string[];
}

export type TypeOfQuestion = 'multiple' | 'boolean';