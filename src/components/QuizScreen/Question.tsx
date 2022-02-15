import { decodeEntities } from '../../helpers/decodeEntity';
import { QuestionsResponse } from '../../helpers/getQuestions';
import styles from '../../scss/QuizScreen/quiz.module.scss';
import { useState, MouseEvent } from 'react';

interface QuestionProps {
    questionData: QuestionsResponse[];
}

export const Question = ({ questionData }: QuestionProps) => {

    const [actualQuestion, setActualQuestion] = useState(0);
    const { question, indexCorrect, answers } = questionData[actualQuestion];

    const questionFormated = decodeEntities(question);

    const handleNextQuestion = () => {

        if (actualQuestion !== 9) {
            setActualQuestion(actualQuestion + 1);
        }
    }

    const handleQuestion = (e: MouseEvent<HTMLButtonElement>) => {
        const button = e.target as Element;
        const id = parseInt(button.id);

        if(id === indexCorrect) {
            //TODO Si es el indice correcto, indicarle al usuario que acertó
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

                <button
                    onClick={handleNextQuestion}
                    className={styles.nextBtn}
                >
                    Next
                </button>
            </div>
        </div>
    )
}
