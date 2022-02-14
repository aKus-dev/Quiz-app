import styles from '../../scss/WelcomeScreen/welcome.module.scss';

interface WelcomeContainerProps {
  children: JSX.Element | JSX.Element[] | string;
}

export const WelcomeContainer = ({ children }: WelcomeContainerProps) => {
  return (
    <div className={styles.container}>
      {children}
    </div>

  )
}
