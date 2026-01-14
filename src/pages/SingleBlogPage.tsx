import { Link } from 'react-router-dom';
import Subscribe from '../components/Subscribe';
import { useI18n } from '../i18n/I18nProvider';

export default function SingleBlogPage() {
  const { t } = useI18n();
  const popularPosts = t<{ date: string; title: string }[]>('blogPage.popularPosts', []);
  const categories = t<string[]>('blogPage.categories', []);
  const tags = t<string[]>('blogPage.tags', []);
  const singleBlog = t<{
    tag: string;
    date: string;
    comments: string;
    title: string;
    paragraphs: string[];
    quote: string;
    subTitle: string;
    subParagraphs: string[];
    tags: string[];
    authorName: string;
    authorBio: string;
    commentTitle: string;
    commentName: string;
    commentMeta: string;
    commentText: string;
    replyTitle: string;
    replyNote: string;
    replyPlaceholders: { name: string; email: string; comment: string };
  }>('singleBlog', {
    tag: '',
    date: '',
    comments: '',
    title: '',
    paragraphs: [],
    quote: '',
    subTitle: '',
    subParagraphs: [],
    tags: [],
    authorName: '',
    authorBio: '',
    commentTitle: '',
    commentName: '',
    commentMeta: '',
    commentText: '',
    replyTitle: '',
    replyNote: '',
    replyPlaceholders: { name: '', email: '', comment: '' },
  });

  return (
    <>
      <div className="blog-details-area ptb-120">
        <div className="container mw-1690">
          <div className="row g-4">
            <div className="col-xl-8">
              <div className="blog-details-content">
                <div className="blog-details-img">
                  <img src="/assets/images/blog15.jpg" alt="blog" />
                  <span className="tag">{singleBlog.tag}</span>
                </div>

                <ul className="p-0 mt-0 list-unstyled d-flex align-items-center info">
                  <li>
                    <span className="d-flex align-items-center gap-10 text-decoration-none">
                      <i className="ti ti-calendar-week fs-18"></i>
                      <span>{singleBlog.date}</span>
                    </span>
                  </li>
                  <li>
                    <a
                      href="#comment"
                      className="d-flex align-items-center gap-10 text-decoration-none"
                    >
                      <i className="ti ti-message fs-18"></i>
                      <span>{singleBlog.comments}</span>
                    </a>
                  </li>
                </ul>

                <h2>{singleBlog.title}</h2>
                {singleBlog.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}

                <blockquote>
                  <div className="d-sm-flex align-items-center gap-30">
                    <div className="flex-shrink-0">
                      <img src="/assets/images/quat.svg" alt="quat" />
                    </div>
                    <div className="flex-grow-1">
                      <p>{singleBlog.quote}</p>
                    </div>
                  </div>
                </blockquote>

                <h3>{singleBlog.subTitle}</h3>
                {singleBlog.subParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}

                <div className="d-flex flex-wrap gap-10 align-items-center justify-content-between tags-social bg-gray2">
                  <ul className="p-0 m-0 list-unstyled d-flex align-items-center tags">
                    <li>
                      <i className="ti ti-tag-filled"></i>
                    </li>
                    {singleBlog.tags.map((tag) => (
                      <li key={tag}>
                        <Link to="/tags" className="text-decoration-none">
                          {tag}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <ul className="p-0 m-0 list-unstyled d-flex align-items-center social-link">
                    <li>
                      <span>{t('common.share')}</span>
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
                    <h4>{singleBlog.authorName}</h4>
                    <p>{singleBlog.authorBio}</p>

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

                <h3 id="comment">{singleBlog.commentTitle}</h3>

                <div className="d-sm-flex comment-info position-relative z-1 bg-gray2">
                  <div className="flex-shrink-0 mb-3 mb-sm-0">
                    <img src="/assets/images/team1.jpg" alt="author" />
                  </div>

                  <div className="flex-grow-1">
                    <h4>{singleBlog.commentName}</h4>
                    <span>{singleBlog.commentMeta}</span>
                    <p className="m-0">{singleBlog.commentText}</p>

                    <Link to="/single-blog" className="reply">
                      {t('common.reply')}
                    </Link>
                  </div>
                </div>

                <form className="comment-form bg-gray2">
                  <h3>{singleBlog.replyTitle}</h3>
                  <p>{singleBlog.replyNote}</p>

                  <div className="row g-4">
                    <div className="col-lg-6">
                      <input type="text" className="form-control" placeholder={singleBlog.replyPlaceholders.name} />
                    </div>
                    <div className="col-lg-6">
                      <input type="email" className="form-control" placeholder={singleBlog.replyPlaceholders.email} />
                    </div>
                    <div className="col-12">
                      <textarea className="form-control" rows={5} placeholder={singleBlog.replyPlaceholders.comment}></textarea>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="default-btn border-0">
                        <span className="d-flex align-items-center gap-10">
                          {t('common.postComment')}
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
