import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { WelcomeScreen, DifficultyScreen, CategoryScreen, QuizScreen } from '../screens';
import { QuizProvider } from '../context';

export const AppRouter = () => {
  return (
    <Router>
      <QuizProvider>
        <Routes>
          <Route path="/" element={<WelcomeScreen />} />
          <Route path="/difficulty" element={<DifficultyScreen />} />
          <Route path="/category" element={<CategoryScreen />} />
          <Route path="/quiz" element={<QuizScreen />} />
        </Routes>
      </QuizProvider>
    </Router>
  )
}
