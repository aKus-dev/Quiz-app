import styles from '../../scss/CategoryScreen/category.module.scss';

interface CategoryContainerProps {
  children: JSX.Element | JSX.Element[] | string;
}

export const CategoryContainer = ({ children }: CategoryContainerProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.categoriesContainer}>
        {children}
      </div>
    </div>

  )
}
