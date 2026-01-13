import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import Subscribe from '../components/Subscribe';

const POPULAR_POSTS = [
  {
    image: '/assets/images/blog11.jpg',
    date: '07 Jun 2025',
    title: 'How to Plan Your Renovation Project Budget Timeline & Tips',
  },
  {
    image: '/assets/images/blog12.jpg',
    date: '08 Jun 2025',
    title: 'Before & After Stunning Remodeling Transformations You’ll Love',
  },
  {
    image: '/assets/images/blog13.jpg',
    date: '09 Jun 2025',
    title: 'Common Renovation Mistakes and How to Avoid Them',
  },
];

const CATEGORIES = [
  'Interior Painting',
  'Wallpaper Design',
  'Exterior Painting',
  'Wallpaper Removal',
  'Tile installation',
];

const TAGS = ['Painting', 'Construction', 'Interior', 'Furniture', 'Building', 'Space', 'Urban'];

export default function SingleBlogPage() {
  return (
    <>
      <PageBanner
        title="Single Blog"
        backgroundImage="/assets/images/page-bg12.jpg"
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Single Blog' },
        ]}
      />
      <div className="blog-details-area ptb-120">
        <div className="container mw-1690">
          <div className="row g-4">
            <div className="col-xl-8">
              <div className="blog-details-content">
                <div className="blog-details-img">
                  <img src="/assets/images/blog15.jpg" alt="blog" />
                  <span className="tag">Office</span>
                </div>

                <ul className="p-0 mt-0 list-unstyled d-flex align-items-center info">
                  <li>
                    <span className="d-flex align-items-center gap-10 text-decoration-none">
                      <i className="ti ti-calendar-week fs-18"></i>
                      <span>02 Jun 2025</span>
                    </span>
                  </li>
                  <li>
                    <a
                      href="#comment"
                      className="d-flex align-items-center gap-10 text-decoration-none"
                    >
                      <i className="ti ti-message fs-18"></i>
                      <span>01 Comment</span>
                    </a>
                  </li>
                </ul>

                <h2>Green Remodeling Sustainable Choices for a Healthier Home</h2>
                <p>
                  Bedroom renovation is a great way to create a more comfortable, stylish, and
                  functional personal retreat. Whether you're updating the layout, adding smart
                  storage, improving lighting, or refreshing the color scheme, a well-designed
                  bedroom renovation enhances both relaxation and practicality. It allows you to
                  tailor the space to your lifestyle and preferences, turning it into a haven of
                  rest and rejuvenation. With thoughtful design choices and quality finishes,
                  bedroom renovation
                </p>

                <p>
                  An efficient office setup is essential for boosting productivity, comfort, and
                  professionalism in any workspace. Whether it’s a home office or a corporate
                  environment, a well-designed setup includes thoughtful furniture placement,
                  ergonomic solutions, proper lighting, and organized storage. A good office layout
                  encourages focus, reduces distractions, and supports
                </p>

                <blockquote>
                  <div className="d-sm-flex align-items-center gap-30">
                    <div className="flex-shrink-0">
                      <img src="/assets/images/quat.svg" alt="quat" />
                    </div>
                    <div className="flex-grow-1">
                      <p>
                        With the right choice of moisture resistant paints and finishes it not only
                        enhances the visual appeal but also protects the walls from humidity mold
                        and daily wear.
                      </p>
                    </div>
                  </div>
                </blockquote>

                <h3>It’s The Perfect Time To Paint Your Home</h3>
                <p>
                  Kitchen remodeling is a transformative upgrade that enhances the heart of your
                  home, combining style, functionality, and efficiency. Whether you're looking to
                  modernize outdated features, improve layout and storage, or add high-quality
                  appliances, a kitchen remodel creates a space that suits your lifestyle and
                  cooking needs
                </p>

                <p>
                  It’s not just about aesthetics smart remodeling increases your home’s value,
                  energy efficiency, and overall comfort. With thoughtful design and expert
                  craftsmanship, kitchen remodeling turns your cooking area into a beautiful,
                  welcoming space
                </p>

                <div className="d-flex flex-wrap gap-10 align-items-center justify-content-between tags-social bg-gray2">
                  <ul className="p-0 m-0 list-unstyled d-flex align-items-center tags">
                    <li>
                      <i className="ti ti-tag-filled"></i>
                    </li>
                    <li>
                      <Link to="/tags" className="text-decoration-none">
                        Kitchen,
                      </Link>
                    </li>
                    <li>
                      <Link to="/tags" className="text-decoration-none">
                        House,
                      </Link>
                    </li>
                    <li>
                      <Link to="/tags" className="text-decoration-none">
                        Building
                      </Link>
                    </li>
                  </ul>
                  <ul className="p-0 m-0 list-unstyled d-flex align-items-center social-link">
                    <li>
                      <span>Share:</span>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/" className="text-decoration-none" target="_blank" rel="noreferrer">
                        <i className="ti ti-brand-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.twitter.com/" className="text-decoration-none" target="_blank" rel="noreferrer">
                        <i className="ti ti-brand-x"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/" className="text-decoration-none" target="_blank" rel="noreferrer">
                        <i className="ti ti-brand-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/" className="text-decoration-none" target="_blank" rel="noreferrer">
                        <i className="ti ti-brand-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="d-sm-flex author-info bg-gray2">
                  <div className="flex-shrink-0 mb-3 mb-sm-0">
                    <img src="/assets/images/user21.jpg" className="rounded-circle" alt="user" />
                  </div>

                  <div className="flex-grow-1">
                    <h4>William Driscoll</h4>
                    <p>
                      Plumbing works are essential for maintaining a safe, functional, and efficient
                      water system in any residential or commercial property. From installing new
                      pipes and fixtures to repairing leaks and ensuring proper drainage, professional
                      plumbing services help keep your water flow smooth
                    </p>

                    <div className="d-flex align-items-center social-link">
                      <a href="https://www.facebook.com/" className="text-decoration-none" target="_blank" rel="noreferrer">
                        <i className="ti ti-brand-facebook"></i>
                      </a>
                      <a href="https://www.twitter.com/" className="text-decoration-none" target="_blank" rel="noreferrer">
                        <i className="ti ti-brand-x"></i>
                      </a>
                      <a href="https://www.instagram.com/" className="text-decoration-none" target="_blank" rel="noreferrer">
                        <i className="ti ti-brand-instagram"></i>
                      </a>
                      <a href="https://www.linkedin.com/" className="text-decoration-none" target="_blank" rel="noreferrer">
                        <i className="ti ti-brand-linkedin"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <h3 id="comment">01 Comments</h3>

                <div className="d-sm-flex comment-info position-relative z-1 bg-gray2">
                  <div className="flex-shrink-0 mb-3 mb-sm-0">
                    <img src="/assets/images/team1.jpg" alt="author" />
                  </div>

                  <div className="flex-grow-1">
                    <h4>David Cochran</h4>
                    <span>Mar 10,2025 | 08:10 pm</span>
                    <p className="m-0">
                      Quality plumbing work prevents costly water damage, supports hygiene, and
                      enhances overall comfort new construction project a renovation or routine
                      maintenance skilled plumbers ensure everything
                    </p>

                    <Link to="/single-blog" className="reply">
                      Reply
                    </Link>
                  </div>
                </div>

                <form className="comment-form bg-gray2">
                  <h3>Leave A Reply</h3>
                  <p>Your email address will not be published. Required fields are marked</p>

                  <div className="row g-4">
                    <div className="col-lg-6">
                      <input type="text" className="form-control" placeholder="Name" />
                    </div>
                    <div className="col-lg-6">
                      <input type="email" className="form-control" placeholder="Email" />
                    </div>
                    <div className="col-12">
                      <textarea className="form-control" rows={5} placeholder="Comment"></textarea>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="default-btn border-0">
                        <span className="d-flex align-items-center gap-10">
                          Post A Comment
                          <img src="/assets/images/icon-right-arrow.svg" alt="icon-right-arrow" />
                        </span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="sidebar">
                <div className="sidebar-widget widget-search bg-gray2">
                  <h3>Search Here</h3>
                  <form className="position-relative">
                    <input type="text" className="form-control" placeholder="Search..." />
                    <button type="submit" className="search-btn">
                      <i className="ti ti-search"></i>
                    </button>
                  </form>
                </div>

                <div className="sidebar-widget bg-gray2">
                  <h3>Popular Post</h3>
                  <div className="popular-post-list">
                    {POPULAR_POSTS.map((post) => (
                      <Link to="/single-blog" className="d-sm-flex align-items-center item" key={post.title}>
                        <div className="flex-shrink-0 mb-3 mb-sm-0">
                          <img src={post.image} className="object-fit-cover" alt="blog" />
                        </div>
                        <div className="flex-grow-1">
                          <span>{post.date}</span>
                          <h4>{post.title}</h4>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="sidebar-widget bg-gray2">
                  <h3>News Category</h3>
                  <ul className="category-list p-0 m-0 list-unstyled">
                    {CATEGORIES.map((category) => (
                      <li key={category}>
                      <Link
                          to="/categories"
                          className="d-flex justify-content-between align-items-center text-decoration-none"
                        >
                          <span>{category}</span>
                          <i className="ti ti-arrow-right"></i>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="sidebar-widget bg-gray2">
                  <h3>Popular Tags</h3>
                  <ul className="p-0 m-0 list-unstyled d-flex flex-wrap tags">
                    {TAGS.map((tag) => (
                      <li key={tag}>
                        <Link to="/tags">{tag}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Subscribe />
    </>
  );
}
