import { useContext, useState, useEffect } from 'react';
import { Loading } from '../';
import { QuizContext } from "../../context/QuizContext"
import { QuestionsResponse } from '../../interfaces/apis/questions';
import { getQuestions } from '../../helpers/getQuestions';
import { Question } from '../';


export const Quiz = () => {

    const [questions, setQuestions] = useState<QuestionsResponse[]>({} as QuestionsResponse[])
    const { difficulty, category } = useContext(QuizContext);

    useEffect(
        () => {
            getQuestions(difficulty!, category!)
                .then(data => setQuestions(data))

            return () => {
                setQuestions([])
            }

        }, [difficulty, category]

    )


    if (JSON.stringify(questions) === '{}') {
        return <Loading />
    }

    return (
        <Question
            questionData={questions}
        />
    )
}
