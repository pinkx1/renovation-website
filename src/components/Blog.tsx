import { Link } from 'react-router-dom';
import { useI18n } from '../i18n/I18nProvider';

const baseAnimationStyle = (delay: number) => ({
  animationName: 'slideInUp',
  animationDuration: '900ms',
  animationTimingFunction: 'ease',
  animationDelay: `${delay}ms`,
  animationDirection: 'normal',
  animationFillMode: 'both',
});

export default function Blog() {
  const { t } = useI18n();
  const posts = t<
    { tag: string; date: string; comments: string; title: string; excerpt: string }[]
  >('blogHome.posts', []);
  const blogPosts = [
    { image: '/assets/images/blog5.jpg', delay: 0, ...posts[0] },
    { image: '/assets/images/blog6.jpg', delay: 270, ...posts[1] },
    { image: '/assets/images/blog7.jpg', delay: 540, ...posts[2] },
  ].filter((post) => post.title);

  return (
    <>
      <div className="blog-area ptb-120">
        <div className="container mw-1690">
          <div
            className="text-center mb-50"
            data-cues="slideInUp"
            data-duration="900"
            data-disabled="true"
          >
            <span
              className="top-title"
              data-cue="slideInUp"
              data-duration="900"
              data-show="true"
              style={baseAnimationStyle(0)}
            >
              {t('blogHome.topTitle')}
            </span>
            <h2
              className="main-title mx-auto mw-620"
              data-cue="slideInUp"
              data-duration="900"
              data-show="true"
              style={baseAnimationStyle(0)}
            >
              {t('blogHome.title')}
            </h2>
          </div>
          <div
            className="row g-4 justify-content-center"
            data-cues="slideInUp"
            data-duration="900"
            data-disabled="true"
          >
            {blogPosts.map((post) => (
              <div
                className="col-xl-4 col-md-6"
                data-cue="slideInUp"
                data-duration="900"
                data-show="true"
                style={baseAnimationStyle(post.delay)}
                key={post.title}
              >
                <Link
                  to="/single-blog"
                  className="blog-single-item style-two d-block text-decoration-none bg-transparent"
                >
                  <div className="blog-imgs">
                    <img src={post.image} alt="blog" />
                    <span className="tag">{post.tag}</span>
                  </div>
                  <div className="blog-content p-0">
                    <ul className="p-0 list-unstyled d-flex align-items-center gap-35">
                      <li className="d-flex align-items-center gap-10">
                        <i className="ti ti-calendar-week text-primary"></i>
                        <span>{post.date}</span>
                      </li>
                      <li className="d-flex align-items-center gap-10">
                        <i className="ti ti-message-2 text-primary"></i>
                        <span>{post.comments}</span>
                      </li>
                    </ul>
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <span className="read-more">
                      {t('blogHome.readMore')}
                      <img
                        src="/assets/images/icon-right-arrow-black.svg"
                        alt="icon-right-arrow-black"
                      />
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
