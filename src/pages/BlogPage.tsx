import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import Subscribe from '../components/Subscribe';

const BLOG_POSTS = [
  {
    image: '/assets/images/blog5.jpg',
    tag: 'Home',
    date: '01 Jun 2025',
    comments: 'No Comment',
    title: 'The Complete Guide to Planning Your Home Renovation',
    excerpt:
      'During remodeling hidden issues such as plumbing leaks wiring mold structural damage can be identified addressed',
  },
  {
    image: '/assets/images/blog6.jpg',
    tag: 'Office',
    date: '02 Jun 2025',
    comments: '01 Comment',
    title: 'Green Remodeling Sustainable Choices for a Healthier Home',
    excerpt:
      'Home remodeling projects can include additions like extra bedrooms home offices finished basements',
  },
  {
    image: '/assets/images/blog7.jpg',
    tag: 'Custom',
    date: '03 Jun 2025',
    comments: '02 Comment',
    title: 'Bathroom Remodeling Ideas for a Spa Like Experience',
    excerpt:
      'Older homes may not meet current building codes or safety standards remodeling ensures home complies',
  },
  {
    image: '/assets/images/blog12.jpg',
    tag: 'Home',
    date: '01 Jun 2025',
    comments: 'No Comment',
    title: 'The Complete Guide to Planning Your Home Renovation',
    excerpt:
      'During remodeling hidden issues such as plumbing leaks wiring mold structural damage can be identified addressed',
  },
  {
    image: '/assets/images/blog13.jpg',
    tag: 'Office',
    date: '02 Jun 2025',
    comments: '01 Comment',
    title: 'Green Remodeling Sustainable Choices for a Healthier Home',
    excerpt:
      'Home remodeling projects can include additions like extra bedrooms home offices finished basements',
  },
  {
    image: '/assets/images/blog14.jpg',
    tag: 'Custom',
    date: '03 Jun 2025',
    comments: '02 Comment',
    title: 'Bathroom Remodeling Ideas for a Spa Like Experience',
    excerpt:
      'Older homes may not meet current building codes or safety standards remodeling ensures home complies',
  },
];

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

export default function BlogPage() {
  return (
    <>
      <PageBanner
        title="Latest Blog"
        backgroundImage="/assets/images/page-bg11.jpg"
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Latest Blog' },
        ]}
      />
      <div className="blog-area ptb-120">
        <div className="container mw-1690">
          <div className="row g-4">
            <div className="col-lg-8">
              <div className="row g-4">
                {BLOG_POSTS.map((post) => (
                  <div className="col-lg-6" key={`${post.title}-${post.image}`}>
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
                          <img src="/assets/images/icon-right-arrow-black.svg" alt="icon-right-arrow-black" />
                        </span>
                      </div>
                    </Link>
                  </div>
                ))}
                <div className="col-lg-12">
                  <div className="pagination-area mt-lg-4 d-flex align-items-center justify-content-center">
                    <Link to="/blog" className="next page-numbers border-0">
                      <i className="ti ti-chevron-left"></i>
                    </Link>
                    <span className="page-numbers border-0 current" aria-current="page">
                      1
                    </span>
                    <Link to="/blog" className="page-numbers border-0">
                      2
                    </Link>
                    <Link to="/blog" className="page-numbers border-0">
                      3
                    </Link>
                    <Link to="/blog" className="next page-numbers border-0">
                      <i className="ti ti-chevron-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
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
