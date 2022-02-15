import { useContext, useState, useEffect } from 'react';
import { Loading } from '../';
import { QuizContext } from "../../context/QuizContext"
import { getQuestions, QuestionsResponse } from '../../helpers/getQuestions';

export const Quiz = () => {
    
    const [questions, setQuestions] = useState<QuestionsResponse[]>({} as QuestionsResponse[])
    const { difficulty, category } = useContext(QuizContext);

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
        <div>

        </div>
    )
}
