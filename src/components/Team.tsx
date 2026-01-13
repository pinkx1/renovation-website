const TEAM_MEMBERS = [
  {
    name: 'Robert Pineda',
    role: 'Paint Consultant',
    photo: '/assets/images/team5.jpg',
  },
  {
    name: 'Lori Sheffield',
    role: 'Detail Painter',
    photo: '/assets/images/team6.jpg',
  },
  {
    name: 'David Chadwell',
    role: 'Surface Specialist',
    photo: '/assets/images/team7.jpg',
  },
  {
    name: 'Miriam Sherburn',
    role: 'Lead Painter',
    photo: '/assets/images/team8.jpg',
  },
];

const TEAM_SLIDES = [...TEAM_MEMBERS, ...TEAM_MEMBERS];

const TEAM_SOCIALS = [
  { href: 'https://www.facebook.com/', icon: 'ti ti-brand-facebook', label: 'Facebook' },
  { href: 'https://www.instagram.com/', icon: 'ti ti-brand-instagram', label: 'Instagram' },
  { href: 'https://www.x.com/', icon: 'ti ti-brand-x', label: 'X' },
  { href: 'https://www.linkedin.com/', icon: 'ti ti-brand-linkedin', label: 'Linkedin' },
];

export default function Team() {
  return (
    <>
      <div className="team-area ptb-120">
        <div className="container mw-1690">
          <div className="mb-50 mt-0 text-center">
            <span className="top-title">Team Members</span>
            <h2 className="main-title mx-auto mw-550">
              The Team Responsible For Remodeling Projects
            </h2>
          </div>
          <div className="swiper team-slide">
            <div className="swiper-wrapper">
              {TEAM_SLIDES.map((member, index) => (
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
