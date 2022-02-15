import { useContext, useState, useEffect } from 'react';
import { QuizContext } from "../../context/QuizContext"
import { getQuestions } from '../../helpers/getQuestions';

//TODO  Tengo las preguntas en questions, crear componentes y mostrarlas al usuario


export const Quiz = () => {

    const [questions, setQuestions] = useState({})
    const { difficulty, category } = useContext(QuizContext);

    useEffect(
        () => {
            getQuestions(difficulty!, category!)
                .then(data => setQuestions(data))
        }, []
    )

    return (
        <div>

        </div>
    )
}