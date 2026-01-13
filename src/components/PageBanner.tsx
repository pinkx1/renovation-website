import { Link } from 'react-router-dom';

type Breadcrumb = {
  label: string;
  to?: string;
};

type PageBannerProps = {
  title: string;
  backgroundImage: string;
  breadcrumbs: Breadcrumb[];
};

export default function PageBanner({ title, backgroundImage, breadcrumbs }: PageBannerProps) {
  return (
    <div
      className="page-banner-area bg-img"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container">
        <div className="page-banner-content text-center">
          <h2 className="main-title mx-auto text-white mb-0">{title}</h2>
          <ul className="d-flex p-0 mb-0 list-unstyled d-flex justify-content-center">
            {breadcrumbs.map((crumb) => (
              <li key={`${crumb.label}-${crumb.to ?? 'current'}`}>
                {crumb.to ? <Link to={crumb.to}>{crumb.label}</Link> : <span>{crumb.label}</span>}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
