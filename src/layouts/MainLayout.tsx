import { Outlet } from 'react-router-dom';
import BackToTop from '../components/BackToTop';
import CopyRight from '../components/CopyRight';
import Footer from '../components/Footer';
import HeaderTop from '../components/HeaderTop';
import MobileNavbar from '../components/MobileNavbar';
import Navbar from '../components/Navbar';
import Preloader from '../components/Preloader';
import RequestQuoteModal from '../components/RequestQuoteModal';
import SearchModal from '../components/SearchModal';
import SidebarInfo from '../components/SidebarInfo';
import useTemplateScripts from '../hooks/useTemplateScripts';

export default function MainLayout() {
  useTemplateScripts();

  return (
    <>
      <Preloader />
      <HeaderTop />
      <Navbar />
      <MobileNavbar />
      <SidebarInfo />
      <SearchModal />
      <RequestQuoteModal />

      <Outlet />

      <Footer />
      <CopyRight />
      <BackToTop />
    </>
  );
}
