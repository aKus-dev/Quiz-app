import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { WelcomeScreen, DifficultyScreen } from '../screens';

export const AppRouter = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={ <WelcomeScreen />} />
            <Route path="/difficulty" element={ <DifficultyScreen />} />
        </Routes>
    </Router>
  )
}
