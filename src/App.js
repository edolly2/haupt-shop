import './App.css';
import NavBar from './components/NavBar';
import PageLayout from './layout/PageLayout';
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import InventoryPage from './pages/InventoryPage';
import QuotePage from './pages/QuotePage';
import GalleryPage from './pages/GalleryPage';



function App() {
  return (
    <div className="App">
      <PageLayout>
        <NavBar />
        <Routes>
          <Route path='/' exact element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/services' element={<ServicesPage />} />
          <Route path='/gallery' element={<GalleryPage />} />
          <Route path='/inventory' element={<InventoryPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/quote' element={<QuotePage />} />
        </Routes>
      </PageLayout>
    </div>
  );
}

export default App;
