import axios from 'axios';
import { QuestionsResponse, TypeOfQuestion } from '../interfaces/apis/questions';
import { QuizResponse } from '../interfaces/apis/quiz';

export const getQuestions = async (difficulty: string, category: number) => {

    difficulty = difficulty.toLowerCase();
    const url = `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}`

    const { data } = await axios.get<QuizResponse>(url);

    const questionsArray:QuestionsResponse[] = data.results.map(result => {

        let indexCorrect = 0;
        const question = result.question;
        const type: TypeOfQuestion = result.type;
        const correct = result.correct_answer;
        const answers = result.incorrect_answers;

        if (type === 'boolean') {
            indexCorrect = Math.round(Math.random() * 1);
        } else {
            indexCorrect = Math.round(Math.random() * 3);
        }

        /* answers (inicialmente de respuestas incorrectas) le agrego la respusta correcta
         Esto lo hago porque tengo el index de la respuesta correcta
         */
        answers.splice(indexCorrect, 0, correct);

        return {
            question,
            type,
            indexCorrect,
            answers
        }

    })


    return questionsArray;
}