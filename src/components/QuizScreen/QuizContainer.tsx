import styles from '../../scss/QuizScreen/quiz.module.scss';

interface QuizContainerProps {
  children: JSX.Element | JSX.Element[] | string;
}

export const QuizContainer = ({ children }: QuizContainerProps) => {
  return (
    <div className={styles.container}>
      {children}
    </div>

  )
}
