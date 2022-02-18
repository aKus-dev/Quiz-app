import styles from '../../scss/QuizScreen/quiz.module.scss';
import { useContext } from 'react'
import { QuizContext } from '../../context/QuizContext';
import { generateData } from '../../helpers/generateData';
import { Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import Faq from "react-faq-component";
import { iFadeinB, aFadeinB, tFadeinB } from '../../animations';

export const Results = () => {

  const { questions } = useContext(QuizContext);

  if (!questions) return <Navigate to="/" />

  const data = generateData(questions!);

  return (
    <div className={styles.resultsContainer}>

      <motion.div
        initial={iFadeinB}
        animate={aFadeinB}
        transition={tFadeinB}
        className={styles.answerContainer}
      >

        <Faq
          data={data}
          styles={data.styles}
        />

      </motion.div>
    </div>
  )
}
