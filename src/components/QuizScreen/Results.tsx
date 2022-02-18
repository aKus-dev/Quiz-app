import styles from '../../scss/QuizScreen/quiz.module.scss';
import { useContext } from 'react'
import { QuizContext } from '../../context/QuizContext';
import { generateData } from '../../helpers/generateData';

import Faq from "react-faq-component";

export const Results = () => {

  const { questions } = useContext(QuizContext);

  const data = generateData(questions!);

  return (
    <div className={styles.resultsContainer}>
      <div className={styles.answerContainer}>

        <Faq
          data={data}
          styles={data.styles}
        />

      </div>
    </div>
  )
}
