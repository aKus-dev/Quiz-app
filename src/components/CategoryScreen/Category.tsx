import styles from '../../scss/CateogryScreen/category.module.scss';
import { CategoryProps } from '../../interfaces/Category';


export const Category = ({color, categoryName}: CategoryProps) => {
    return (
        <div className={`${ styles[color] } ${styles.categoryCard}`}>
            <p className={styles.difficulty}>Easy</p>
            <h2 className={styles.categoryName}>{categoryName}</h2>

            <img 
                className={styles.icon}
                src={`./img/assets/${categoryName}.png`} 
                alt={categoryName} 
            />
        </div>
    )
}
