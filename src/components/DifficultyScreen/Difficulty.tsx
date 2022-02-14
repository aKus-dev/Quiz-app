import styles from '../../scss/DifficultyScreen/difficulty.module.scss';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  iFadeinL, aFadeinL, tFadeinL,
  iFadeinR, aFadeinR, tFadeinR 
} from '../../animations';

export const Difficulty = () => {

  return (
    <div className={styles.container}>
      <motion.div
        initial={iFadeinL}
        animate={aFadeinL}
        transition={tFadeinL}
        className={styles.linkContainer}
      >
        <Link to="#" className={`${styles.btn} ${styles.btn1}`}>Easy</Link>
      </motion.div>

      <motion.div
        initial={iFadeinR}
        animate={aFadeinR}
        transition={tFadeinR}
        className={styles.linkContainer}
      >
        <Link to="#" className={`${styles.btn} ${styles.btn2}`}>Normal</Link>
      </motion.div>

      <motion.div
        initial={iFadeinL}
        animate={aFadeinL}
        transition={tFadeinL}
        className={styles.linkContainer}
      >
        <Link to="#" className={`${styles.btn} ${styles.btn3}`}>Hard</Link>
      </motion.div>
    </div>
  )
}
