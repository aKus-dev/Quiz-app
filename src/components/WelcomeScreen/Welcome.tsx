import styles from '../../scss/WelcomeScreen/_welcome.module.scss';
import { Bold } from '../../utilities';


export const Welcome = () => {

    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Quizz App</h1>

            <p className={styles.subtitle}>
                A quiz <Bold>app</Bold> to have some fun and learn
            </p>

            <a href="#" className={styles.getStarted}>
                Let's get started 
            </a>

            <img src="./img/pc.png" alt="PC" id="pc"/>
            <img src="./img/todos.png" alt="Todos" id="todos"/>
            <img src="./img/math.png" alt="Math" id="math"/>
            <img src="./img/planet.png" alt="Planet" id="planet"/>
            <img src="./img/donut.png" alt="Donut" id="donut"/>
            <img src="./img/boxes.png" alt="Boxes" id="boxes"/>
    
        </div>
    )
}

