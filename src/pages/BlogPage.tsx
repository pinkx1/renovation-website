import { Link } from 'react-router-dom';
import Subscribe from '../components/Subscribe';
import { useI18n } from '../i18n/I18nProvider';

export default function BlogPage() {
  const { t } = useI18n();
  const posts = t<
    { tag: string; date: string; comments: string; title: string; excerpt: string }[]
  >('blogPage.posts', []);
  const popularPosts = t<{ date: string; title: string }[]>('blogPage.popularPosts', []);
  const categories = t<string[]>('blogPage.categories', []);
  const tags = t<string[]>('blogPage.tags', []);
  const blogPosts = [
    { image: '/assets/images/blog5.jpg', ...posts[0] },
    { image: '/assets/images/blog6.jpg', ...posts[1] },
    { image: '/assets/images/blog7.jpg', ...posts[2] },
    { image: '/assets/images/blog12.jpg', ...posts[3] },
    { image: '/assets/images/blog13.jpg', ...posts[4] },
    { image: '/assets/images/blog14.jpg', ...posts[5] },
  ].filter((post) => post.title);

  return (
    <>
      <div className="blog-area ptb-120">
        <div className="container mw-1690">
          <div className="row g-4">
            <div className="col-lg-8">
              <div className="row g-4">
                {blogPosts.map((post) => (
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
                          {t('common.browseMore')}
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
                  <h3>{t('common.searchHere')}</h3>
                  <form className="position-relative">
                    <input type="text" className="form-control" placeholder={t('search.placeholder')} />
                    <button type="submit" className="search-btn">
                      <i className="ti ti-search"></i>
                    </button>
                  </form>
                </div>

                <div className="sidebar-widget bg-gray2">
                  <h3>{t('common.popularPost')}</h3>
                  <div className="popular-post-list">
                    {popularPosts.map((post, index) => (
                      <Link to="/single-blog" className="d-sm-flex align-items-center item" key={post.title}>
                        <div className="flex-shrink-0 mb-3 mb-sm-0">
                          <img src={`/assets/images/blog${index + 11}.jpg`} className="object-fit-cover" alt="blog" />
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
                  <h3>{t('common.newsCategory')}</h3>
                  <ul className="category-list p-0 m-0 list-unstyled">
                    {categories.map((category) => (
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
                  <h3>{t('common.popularTags')}</h3>
                  <ul className="p-0 m-0 list-unstyled d-flex flex-wrap tags">
                    {tags.map((tag) => (
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
