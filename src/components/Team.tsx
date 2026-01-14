import { useI18n } from '../i18n/I18nProvider';

const TEAM_SOCIALS = [
  { href: 'https://www.facebook.com/', icon: 'ti ti-brand-facebook', label: 'Facebook' },
  { href: 'https://www.instagram.com/', icon: 'ti ti-brand-instagram', label: 'Instagram' },
  { href: 'https://www.x.com/', icon: 'ti ti-brand-x', label: 'X' },
  { href: 'https://www.linkedin.com/', icon: 'ti ti-brand-linkedin', label: 'Linkedin' },
];

export default function Team() {
  const { t } = useI18n();
  const members = t<{ name: string; role: string }[]>('teamHome.members', []);
  const teamMembers = [
    { photo: '/assets/images/team5.jpg', ...members[0] },
    { photo: '/assets/images/team6.jpg', ...members[1] },
    { photo: '/assets/images/team7.jpg', ...members[2] },
    { photo: '/assets/images/team8.jpg', ...members[3] },
  ].filter((member) => member.name);
  const teamSlides = [...teamMembers, ...teamMembers];

  return (
    <>
      <div className="team-area ptb-120">
        <div className="container mw-1690">
          <div className="mb-50 mt-0 text-center">
            <span className="top-title">{t('teamHome.topTitle')}</span>
            <h2 className="main-title mx-auto mw-550">
              {t('teamHome.title')}
            </h2>
          </div>
          <div className="swiper team-slide">
            <div className="swiper-wrapper">
              {teamSlides.map((member, index) => (
                <div className="swiper-slide" key={`${member.name}-${index}`}>
                  <div className="team-single-item">
                    <img src={member.photo} alt="team" />
                    <div className="team-content">
                      <h3>{member.name}</h3>
                      <span>{member.role}</span>
                    </div>
                    <ul className="p-0 list-unstyled social-link">
                      {TEAM_SOCIALS.map((social) => (
                        <li key={`${member.name}-${social.label}-${index}`}>
                          <a href={social.href} target="_blank" rel="noreferrer">
                            <i className={social.icon}></i>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            <div className="swiper-pagination-team text-center"></div>
          </div>
        </div>
      </div>
    </>
  );
}
