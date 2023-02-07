import './App.css';
import NavBar from './components/NavBar';
import PageLayout from './layout/PageLayout';
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <PageLayout>
        <NavBar />
        <Routes>
          <Route path='/' exact element={<HomePage />} />
        </Routes>
      </PageLayout>
    </div>
  );
}

export default App;
