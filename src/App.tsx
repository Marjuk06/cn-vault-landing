import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/ui/Navbar';
import { Footer } from './components/ui/Footer';
import { ScrollToTop } from './components/ui/ScrollToTop';
import { HomePage } from './pages/HomePage';
import { ProductPage } from './pages/ProductPage';
import { PricingPage } from './pages/PricingPage';
import { DownloadPage } from './pages/DownloadPage';
import { DocsPage } from './pages/DocsPage';
import { SupportPage } from './pages/SupportPage';
import { AboutPage } from './pages/AboutPage';
import { TermsPage } from './pages/TermsPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { RefundPolicyPage } from './pages/RefundPolicyPage';
import { NotFoundPage } from './pages/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-black font-sans text-white/90 relative flex flex-col justify-between">
        {/* Ambient Background */}
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-violet-600/15 blur-[120px] mix-blend-screen" />
          <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-cyan-600/10 blur-[120px] mix-blend-screen" />
          <div className="absolute bottom-[-20%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-indigo-600/15 blur-[120px] mix-blend-screen" />
        </div>

        <Navbar />
        
        <main className="relative z-10 flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/download" element={<DownloadPage />} />
            <Route path="/docs" element={<DocsPage />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/refund-policy" element={<RefundPolicyPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
