export interface QuizResponse {
    response_code: number;
    results:       Result[];
}

export interface Result {
    category:          Category;
    type:              Type;
    difficulty:        Difficulty;
    question:          string;
    correct_answer:    string;
    incorrect_answers: string[];
}

export enum Category {
    Sports = "Sports",
}

export enum Difficulty {
    Medium = "medium",
}

export enum Type {
    Boolean = "boolean",
    Multiple = "multiple",
}
