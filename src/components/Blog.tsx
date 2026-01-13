import { Link } from 'react-router-dom';

const BLOG_POSTS = [
  {
    image: '/assets/images/blog5.jpg',
    tag: 'Home',
    date: '01 Jun 2025',
    comments: 'No Comment',
    title: 'The Complete Guide to Planning Your Home Renovation',
    excerpt:
      'During remodeling hidden issues such as plumbing leaks wiring mold structural damage can be identified addressed',
    delay: 0,
  },
  {
    image: '/assets/images/blog6.jpg',
    tag: 'Office',
    date: '02 Jun 2025',
    comments: '01 Comment',
    title: 'Green Remodeling Sustainable Choices for a Healthier Home',
    excerpt:
      'Home remodeling projects can include additions like extra bedrooms home offices finished basements',
    delay: 270,
  },
  {
    image: '/assets/images/blog7.jpg',
    tag: 'Custom',
    date: '03 Jun 2025',
    comments: '02 Comment',
    title: 'Bathroom Remodeling Ideas for a Spa Like Experience',
    excerpt:
      'Older homes may not meet current building codes or safety standards remodeling ensures home complies',
    delay: 540,
  },
];

const baseAnimationStyle = (delay: number) => ({
  animationName: 'slideInUp',
  animationDuration: '900ms',
  animationTimingFunction: 'ease',
  animationDelay: `${delay}ms`,
  animationDirection: 'normal',
  animationFillMode: 'both',
});

export default function Blog() {
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
              latest news
            </span>
            <h2
              className="main-title mx-auto mw-620"
              data-cue="slideInUp"
              data-duration="900"
              data-show="true"
              style={baseAnimationStyle(0)}
            >
              Check Out Latest News Update And Articles
            </h2>
          </div>
          <div
            className="row g-4 justify-content-center"
            data-cues="slideInUp"
            data-duration="900"
            data-disabled="true"
          >
            {BLOG_POSTS.map((post) => (
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
                      Browse More
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
