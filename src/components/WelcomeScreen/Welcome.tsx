import styles from '../../scss/WelcomeScreen/_welcome.module.scss';
import { motion } from 'framer-motion';
import { Bold } from '../../utilities';

import {
    iPopup, aPopup ,tPopup,
    iFadeinR, aFadeinR, tFadeinR,
    iFadeinL, aFadeinL, tFadeinL
} from '../../animations'


export const Welcome = () => {

    return (
        <div className={styles.container}>

            <div className={styles.infoContainer}>
                <motion.h1
                    initial={iPopup}
                    animate={aPopup}
                    transition={tPopup}
                    className={styles.heading}
                >
                    Quizz App
                </motion.h1>

                <motion.p
                    initial={iFadeinR}
                    animate={aFadeinR}
                    transition={tFadeinR}
                    className={styles.subtitle}
                >
                    A quiz <Bold>app</Bold> to have some fun and learn
                </motion.p>

                <motion.div initial={iFadeinL} animate={aFadeinL} transition={tFadeinL}>
                    <a href="/difficulty" className={styles.getStarted}>
                        Let's get started
                    </a>
                </motion.div>
            </div>

            <img src="./img/pc.png" alt="PC" id="pc" />
            <img src="./img/todos.png" alt="Todos" id="todos" />
            <img src="./img/math.png" alt="Math" id="math" />
            <img src="./img/planet.png" alt="Planet" id="planet" />
            <img src="./img/donut.png" alt="Donut" id="donut" />
            <img src="./img/boxes.png" alt="Boxes" id="boxes" />

        </div>
    )
}

