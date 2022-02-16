import styles from '../scss/QuizScreen/quiz.module.scss';
import { QuestionsResponse } from '../interfaces/apis/questions';
import { decodeEntities } from '../helpers/decodeEntity';
import { MouseEvent, useState } from 'react';


export const useQuiz = (questionData: QuestionsResponse[]) => {

    const [actualQuestion, setActualQuestion] = useState(0);
    const [buttonClickedId, setButtonClickedId] = useState(0);
    const [answered, setAnswered] = useState(false);
    const { question, indexCorrect, answers } = questionData[actualQuestion];

    const questionFormated = decodeEntities(question);


    const handleNextQuestion = () => {

        // Reset styles
        const btn = document.querySelector(`button[id="${buttonClickedId}"]`)
        btn?.classList.remove(`${styles.correct}`, `${styles.incorrect}`)

        if (actualQuestion !== 9) {
            setActualQuestion(actualQuestion + 1);
            setAnswered(false);
        } else {
            // TODO Show results
        }
    }

    const handleQuestion = (e: MouseEvent<HTMLButtonElement>) => {

        if (answered) return;

        const button = e.target as Element;
        const id = parseInt(button.id);

        if (id === indexCorrect) {
            button.classList.add(styles.correct);
            setAnswered(true);
            setButtonClickedId(id);
        } else {
            button.classList.add(styles.incorrect);
            setAnswered(true);
            setButtonClickedId(id);
        }

    }

    return {
        handleQuestion, 
        handleNextQuestion,
        actualQuestion,
        questionFormated,
        answers,
        answered
    }

}