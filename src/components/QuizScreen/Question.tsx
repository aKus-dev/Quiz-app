import styles from '../../scss/QuizScreen/quiz.module.scss';

export const Question = () => {
    return (
        <div className={styles.questionContainer}>

            <div className={styles.infoContainer}>
                <span className={styles.counter}>1/10</span>
                <h1 className={styles.question}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae numas?</h1>
            </div>


            <div className={styles.aswnersContainer}>
                <p>Select the correct answer</p>
                <button className={styles.answerBtn}>Respuesta 1</button>
                <button className={styles.answerBtn}>Respuesta 1</button>
                <button className={styles.answerBtn}>Respuesta 1</button>
                <button className={styles.answerBtn}>Respuesta 1</button>

                <button className={styles.nextBtn}>Next</button>
            </div>
        </div>
    )
}
