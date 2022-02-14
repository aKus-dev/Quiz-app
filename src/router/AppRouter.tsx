import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { WelcomeScreen, DifficultyScreen, CategoryScreen } from '../screens';

export const AppRouter = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={ <WelcomeScreen />} />
            <Route path="/difficulty" element={ <DifficultyScreen />} />
            <Route path="/category" element={ <CategoryScreen />} />
        </Routes>
    </Router>
  )
}
