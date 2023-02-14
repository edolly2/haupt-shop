import './App.css';
import PageLayout from './layout/PageLayout';
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import InventoryPage from './pages/InventoryPage';
import QuotePage from './pages/QuotePage';
import GalleryPage from './pages/GalleryPage';
import Footer from './components/Footer';
// import MobileNavBar from './components/MobileNavBar';
import Header from './components/Header';
import QuoteModal from './components/QuoteModal';
import { useState } from 'react';
import Overlay from './components/Overlay';




function App() {
  const [quoteBtnClicked, setQuoteBtnClicked] = useState(false);
  return (
    <div className="App" style={{ maxHeight: quoteBtnClicked ? '100vh' : null }}>

      <PageLayout>
        <Overlay style={{ display: quoteBtnClicked ? 'flex' : 'none' }} />
        <QuoteModal style={{ display: quoteBtnClicked ? 'flex' : 'none' }} onModalExitClick={() => { setQuoteBtnClicked(false) }} />
        <Header onQuoteClickMB={() => { setQuoteBtnClicked(true) }} onQuoteClickDT={() => { setQuoteBtnClicked(true) }} />
        <Routes>
          <Route path='/' exact element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/services' element={<ServicesPage />} />
          <Route path='/gallery' element={<GalleryPage />} />
          <Route path='/inventory' element={<InventoryPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/quote' element={<QuotePage />} />
        </Routes>
        <Footer />
      </PageLayout>

    </div>
  );
}

export default App;
