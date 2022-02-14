import styles from '../../scss/DifficultyScreen/difficulty.module.scss';

interface DifficultyContainerProps {
  children: JSX.Element | JSX.Element[] | string;
}

export const DifficultyContainer = ({ children }: DifficultyContainerProps) => {
  return (
    <div className={styles.container}>
      {children}
    </div>

  )
}
