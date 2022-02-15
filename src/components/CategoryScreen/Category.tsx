import styles from '../../scss/CategoryScreen/category.module.scss';
import { CategoryProps } from '../../interfaces/Category';
import { iFadeinL, aFadeinL, tFadeinL } from '../../animations';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { QuizContext } from '../../context/QuizContext';
import { useNavigate } from 'react-router-dom';



export const Category = ({ color, categoryName, id }: CategoryProps) => {

    const navigate = useNavigate();

    const { setCategory } = useContext(QuizContext);

    const handleCategory = () => {
        setCategory(id);
        navigate('/quiz');
    }

    return (
        <motion.div
            onClick={handleCategory}
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
