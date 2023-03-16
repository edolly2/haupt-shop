import './App.css';
import PageLayout from './Layout/PageLayout';
import { Route, Routes } from 'react-router-dom'
import HomePage from './components/Home/HomePage';
import AboutPage from './components/About/AboutPage';
import ServicesPage from './components/Services/ServicesPage';
import ContactPage from './components/Contact/ContactPage';
import InventoryPage from './components/Inventory/InventoryPage';
import QuotePage from './components/Quote/QuotePage';
import GalleryPage from './components/Gallery/GalleryPage';
import Footer from './components/Footer/Footer';
// import MobileNavBar from './components/MobileNavBar';
import Header from './components/Header';
import QuoteModal from './components/Quote/QuoteModal';
import { useState } from 'react';
import Overlay from './components/Overlay';
import SchedulerPage from './Scheduler/SchedulerPage';




function App() {
  const [quoteBtnClicked, setQuoteBtnClicked] = useState(false);
  return (
    <div className="App" style={{ maxHeight: quoteBtnClicked ? '100vh' : null, overflow: quoteBtnClicked ? 'hidden' : null }}>

      <PageLayout>
        <Overlay style={{ display: quoteBtnClicked ? 'flex' : 'none' }} />
        <QuoteModal style={{ display: quoteBtnClicked ? 'flex' : 'none' }} onModalExitClick={() => { setQuoteBtnClicked(false) }} onlineQuoteBtnClick={() => { setQuoteBtnClicked(false) }} schedulerBtnClick={() => { setQuoteBtnClicked(false) }} />
        <Header onQuoteClickMB={() => { setQuoteBtnClicked(true) }} onQuoteClickDT={() => { setQuoteBtnClicked(true) }} />
        <Routes>
          <Route path='/haupt-shop/' exact element={<HomePage />} />
          <Route path='/haupt-shop/about' element={<AboutPage />} />
          <Route path='/haupt-shop/services' element={<ServicesPage />} />
          <Route path='/haupt-shop/gallery' element={<GalleryPage />} />
          <Route path='/haupt-shop/inventory' element={<InventoryPage />} />
          <Route path='/haupt-shop/contact' element={<ContactPage />} />
          <Route path='/haupt-shop/quote' element={<QuotePage />} />
          <Route path='/haupt-shop/scheduler' element={<SchedulerPage />} />

        </Routes>
        <Footer />
      </PageLayout>

    </div>
  );
}

export default App;
