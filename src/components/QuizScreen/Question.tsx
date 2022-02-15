import { decodeEntities } from '../../helpers/decodeEntity';
import { QuestionsResponse } from '../../helpers/getQuestions';
import styles from '../../scss/QuizScreen/quiz.module.scss';

interface QuestionProps {
    questionData: QuestionsResponse;
}

export const Question = ({ questionData }: QuestionProps) => {

    const { question, indexCorrect, answers, type } = questionData;

    const questionFormated = decodeEntities(question);

    return (
        <div className={styles.questionContainer}>

            <div className={styles.infoContainer}>
                <span className={styles.counter}>1/10</span>
                <h1 className={styles.question}>{questionFormated}</h1>
            </div>


            <div className={styles.aswnersContainer}>
                <p>Select the correct answer</p>

                {
                    answers.map(answer => (
                        <button className={styles.answerBtn}>{answer}</button>
                    ))
                }

             {/*    <button className={styles.nextBtn}>Next</button> */}
            </div>
        </div>
    )
}
