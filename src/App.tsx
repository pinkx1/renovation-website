import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import AboutUsPage from './pages/AboutUsPage';
import BlogPage from './pages/BlogPage';
import ContactUsPage from './pages/ContactUsPage';
import ErrorPage from './pages/ErrorPage';
import FaqsPage from './pages/FaqsPage';
import HomePage from './pages/HomePage';
import PricingPage from './pages/PricingPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import ProjectsPage from './pages/ProjectsPage';
import RequestQuotePage from './pages/RequestQuotePage';
import ServicesPage from './pages/ServicesPage';
import SingleBlogPage from './pages/SingleBlogPage';
import SingleProjectPage from './pages/SingleProjectPage';
import SingleServicePage from './pages/SingleServicePage';
import TermsConditionsPage from './pages/TermsConditionsPage';
import TestimonialsPage from './pages/TestimonialsPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/faqs" element={<FaqsPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/request-a-quote" element={<RequestQuotePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/single-blog" element={<SingleBlogPage />} />
          <Route path="/single-project" element={<SingleProjectPage />} />
          <Route path="/single-service" element={<SingleServicePage />} />
          <Route path="/terms-conditions" element={<TermsConditionsPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/error-404" element={<ErrorPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
