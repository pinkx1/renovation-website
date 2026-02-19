import Banner from '../components/Banner';
import WhatWeDo from '../components/WhatWeDo';
import GetToKnowUs from '../components/GetToKnowUs';
import Services from '../components/Services';
import Projects from '../components/Projects';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import Team from '../components/Team';
import ContactUs from '../components/ContactUs';
import Blog from '../components/Blog';
import Consultation from '../components/Consultation';
import { useI18n } from '../i18n/I18nProvider';

export default function HomePage() {
  const { language } = useI18n();
  const teamTitle = language === 'ru' ? '\u041d\u0430\u0448\u0430 \u043a\u043e\u043c\u0430\u043d\u0434\u0430' : 'Our Team';

  return (
    <div className="home-page">
      <Banner />
      <WhatWeDo />
      <GetToKnowUs />
      <Services />
      <Projects />
      <WhyChooseUs showTopTitle={false} />
      <Testimonials />
      <Team showTopTitle={false} titleOverride={teamTitle} />
      <ContactUs />
      <Blog />
      <Consultation />
    </div>
  );
}
