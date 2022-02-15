import axios from 'axios';
import { QuizResponse } from '../interfaces/apis/quiz';

export const getQuestions = async (difficulty:string, category:number) => {
    
    difficulty = difficulty.toLowerCase();
    const url = `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}`

    const  { data } = await axios.get<QuizResponse>(url);

    return data.results;
}