import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { QuizContainer, Quiz } from '../components';
import { QuizContext } from '../context/QuizContext';

export const QuizScreen = () => {

    const { difficulty, category } = useContext(QuizContext);

    if(!difficulty || !category) {
        return <Navigate to="/" />
    }
    
    return (
        <QuizContainer>
            <Quiz />
        </QuizContainer>
    )
}
