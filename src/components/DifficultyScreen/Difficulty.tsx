import styles from '../../scss/DifficultyScreen/difficulty.module.scss';
import { motion } from 'framer-motion';
import { useState, MouseEvent, useContext, useEffect } from 'react';
import { iFadeinB, aFadeinB, tFadeinB } from '../../animations';
import { Difficulties, QuizContext } from '../../context/QuizContext';
import { useNavigate } from 'react-router-dom';


export const Difficulty = () => {

  // Navigate
  const navigate = useNavigate();

  // Reset buttons delay after render
  const [delay1, setDealy1] = useState(0.35);
  const [delay2, setDealy2] = useState(0.65);

  useEffect(
    () => {
      setTimeout(() => setDealy1(0), 350)
      setTimeout(() => setDealy2(0), 650)

      return () => {
        setDealy1(0);
        setDealy2(0);
      }

    }, [setDealy1, setDealy2]
  )

  // Get context
  const { setDifficulty } = useContext(QuizContext);

  const handleDificulty = (e: MouseEvent) => {
    const button = e.target as Element;
    const difficult = button.id as Difficulties;

    setDifficulty(difficult);
    navigate('/category');
  }

  return (
    <>
      <motion.button
        onClick={handleDificulty}
        initial={iFadeinB}
        animate={aFadeinB}
        transition={{ ...tFadeinB, delay: 0 }}
        whileHover={{
          backgroundColor: "#5951d4",
          color: "#FFFFFF"
        }}
        className={`${styles.btn} ${styles.btn1}`}
        id="Easy"
      >
        Easy
      </motion.button>

      <motion.button
        onClick={handleDificulty}
        initial={iFadeinB}
        animate={aFadeinB}
        transition={{ ...tFadeinB, delay: delay1 }}
        whileHover={{
          backgroundColor: "#3930c2",
          color: "#FFFFFF"
        }}
        className={`${styles.btn} ${styles.btn2}`}
        id="Medium"
      >
        Medium
      </motion.button>

      <motion.button
        onClick={handleDificulty}
        initial={iFadeinB}
        animate={aFadeinB}
        transition={{ ...tFadeinB, delay: delay2 }}
        whileHover={{
          backgroundColor: "#211c70",
          color: "#FFFFFF"
        }}
        className={`${styles.btn} ${styles.btn3}`}
        id="Hard"
      >
        Hard
      </motion.button>
    </>
  )
}
