import '../../scss/global/_global.scss';
import styles from '../../scss/QuizScreen/quiz.module.scss';
import { decodeEntities } from '../../helpers/decodeEntity';
import { QuestionsResponse } from '../../helpers/getQuestions';
import { useState, MouseEvent } from 'react';

interface QuestionProps {
    questionData: QuestionsResponse[];
}

export const Question = ({ questionData }: QuestionProps) => {

    //TODO Simplificar la lógica con un custom hook useQuiz
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
        }
    }

    const handleQuestion = (e: MouseEvent<HTMLButtonElement>) => {

        if(answered) return;

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

    return (
        <div className={styles.questionContainer}>

            <div className={styles.infoContainer}>
                <span className={styles.counter}>{`${actualQuestion + 1}/10`}</span>
                <h1 className={styles.question}>{questionFormated}</h1>
            </div>


            <div className={styles.aswnersContainer}>
                <p>Select the correct answer</p>

                {
                    answers.map((answer, i) => (
                        <button
                            onClick={handleQuestion}
                            key={i}
                            id={i.toString()}
                            className={styles.answerBtn}>{decodeEntities(answer)}
                        </button>
                    ))
                }

                {
                    answered && (
                        <button
                            onClick={handleNextQuestion}
                            className={styles.nextBtn}
                        >
                            Next
                        </button>
                    )
                }


            </div>
        </div>
    )
}
