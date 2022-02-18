import { useContext, useState, useEffect } from 'react';
import { Loading } from '../';
import { QuizContext } from "../../context/QuizContext"
import { getQuestions } from '../../helpers/getQuestions';
import { Question } from '../';


export const Quiz = () => {

    const { difficulty, category, questions, setQuestions } = useContext(QuizContext);

    useEffect(
        () => {
            getQuestions(difficulty!, category!)
                .then(data => setQuestions(data))
        }, [difficulty, category]

    )

    if (!questions) {
        return <Loading />
    }

    return (
        <Question />
    )
}
