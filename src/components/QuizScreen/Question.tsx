import '../../scss/global/_global.scss';
import styles from '../../scss/QuizScreen/quiz.module.scss';
import { decodeEntities } from '../../helpers/decodeEntity';
import { QuestionProps } from '../../interfaces/apis/questions';
import { useQuiz } from '../../hooks/useQuiz';


export const Question = ({ questionData }: QuestionProps) => {

    const {
        handleQuestion,
        handleNextQuestion,
        actualQuestion,
        questionFormated,
        answers,
        answered
    } = useQuiz(questionData);

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
                            {
                                actualQuestion !== 9 
                                    ? 'Next'
                                    : 'See results'
                            }
                        </button>
                    )
                }


            </div>
        </div>
    )
}
