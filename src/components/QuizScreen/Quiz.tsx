import { useContext, useState, useEffect } from 'react';
import { Loading } from '../';
import { QuizContext } from "../../context/QuizContext"
import { getQuestions, QuestionsResponse } from '../../helpers/getQuestions';
import { Question } from '../';

export const Quiz = () => {
    
    const [questions, setQuestions] = useState<QuestionsResponse[]>({} as QuestionsResponse[])
    const { difficulty, category } = useContext(QuizContext);
    const [actualQuestion, setActualQuestion] = useState(0);

    useEffect(
        () => {
            getQuestions(difficulty!, category!)
                .then(data => setQuestions(data))
        }, []
    )
    

    if(JSON.stringify(questions) === '{}') {
        return <Loading />
    }

    return (
        <Question questionData={questions[actualQuestion]} />
    )
}
