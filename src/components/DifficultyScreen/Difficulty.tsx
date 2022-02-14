import styles from '../../scss/DifficultyScreen/difficulty.module.scss';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  iFadeinB, aFadeinB, tFadeinB
} from '../../animations';

export const Difficulty = () => {

  return (
    <div className={styles.container}>
      <motion.div
        initial={iFadeinB}
        animate={aFadeinB}
        transition={{...tFadeinB, delay: 0}}
        className={styles.linkContainer}
      >
        <Link to="#" className={`${styles.btn} ${styles.btn1}`}>Easy</Link>
      </motion.div>

      <motion.div
        initial={iFadeinB}
        animate={aFadeinB}
        transition={{...tFadeinB, delay: 0.35}}
        className={styles.linkContainer}
      >
        <Link to="#" className={`${styles.btn} ${styles.btn2}`}>Normal</Link>
      </motion.div>

      <motion.div
        initial={iFadeinB}
        animate={aFadeinB}
        transition={{...tFadeinB, delay: 0.65}}
        className={styles.linkContainer}
      >
        <Link to="#" className={`${styles.btn} ${styles.btn3}`}>Hard</Link>
      </motion.div>
    </div>
  )
}
