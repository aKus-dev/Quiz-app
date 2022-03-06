import styles from '../../scss/WelcomeScreen/welcome.module.scss';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Bold } from '../../utilities';

import {
    iPopup, aPopup ,tPopup,
    iFadeinR, aFadeinR, tFadeinR,
    iFadeinL, aFadeinL, tFadeinL
} from '../../animations'


export const Welcome = () => {

    return (
        <>

            <div className={styles.infoContainer}>
                <motion.h1
                    initial={iPopup}
                    animate={aPopup}
                    transition={tPopup}
                    className={styles.heading}
                >
                    Quiz App
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
                    <Link to="/difficulty" className={styles.getStarted}>
                        Let's get started
                    </Link>
                </motion.div>
            </div>

            <img src="./img/pc.png" alt="PC" id={styles.pc} />
            <img src="./img/todos.png" alt="Todos" id={styles.todos} />
            <img src="./img/math.png" alt="Math" id={styles.math} />
            <img src="./img/planet.png" alt="Planet" id={styles.planet} />
            <img src="./img/donut.png" alt="Donut" id={styles.donut} />
            <img src="./img/boxes.png" alt="Boxes" id={styles.boxes} />

        </>
    )
}

