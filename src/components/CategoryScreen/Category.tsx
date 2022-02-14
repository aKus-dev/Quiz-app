import styles from '../../scss/CateogryScreen/category.module.scss';
import { CategoryProps } from '../../interfaces/Category';
import { iFadeinL, aFadeinL, tFadeinL } from '../../animations';
import { motion } from 'framer-motion';



export const Category = ({ color, categoryName }: CategoryProps) => {
    return (
        <motion.div
            initial={iFadeinL}
            whileInView={aFadeinL}
            whileHover={{ rotate: "-3deg" }}
            viewport={{ once: true }}
            transition={tFadeinL}
            className={`${styles[color]} ${styles.categoryCard}`}
        >
            <p className={styles.difficulty}>Easy</p>
            <h2 className={styles.categoryName}>{categoryName}</h2>

            <img
                className={styles.icon}
                src={`./img/assets/${categoryName}.png`}
                alt={categoryName}
            />
        </motion.div>
    )
}
