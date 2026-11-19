import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/HomePage';
import Capabilities from './pages/CapabilitiesPage';
import CapabilityDetail from './pages/CapabilityDetail';
import Industries from './pages/IndustriesPage';
import IndustryDetail from './pages/IndustryDetail';
import UseCases from './pages/UseCasesPage';
import UseCaseDetail from './pages/UseCaseDetail';
import UseCaseCaseDetail from './pages/UseCaseCaseDetail';
import Insights from './pages/InsightsPage';
import InsightDetail from './pages/InsightDetail';
import About from './pages/AboutPage';
import Contact from './pages/ContactPage';
import Careers from './pages/Careers';
import CareersApply from './pages/CareersApply';
import { Toaster } from './components/ui/toaster';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/capabilities" element={<Capabilities />} />
            <Route path="/capabilities/:slug" element={<CapabilityDetail />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/industries/:slug" element={<IndustryDetail />} />
            <Route path="/use-cases" element={<UseCases />} />
            <Route path="/use-cases/:slug" element={<UseCaseDetail />} />
            <Route path="/use-cases/:slug/:caseSlug" element={<UseCaseCaseDetail />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/insights/:slug" element={<InsightDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/careers/apply" element={<CareersApply />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App;