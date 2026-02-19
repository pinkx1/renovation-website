import { Link, useParams } from 'react-router-dom';
import { useMemo } from 'react';
import Subscribe from '../components/Subscribe';
import { buildBlogCards, buildBlogDetailContent } from '../data/contentCatalog';
import { useI18n } from '../i18n/I18nProvider';

export default function SingleBlogPage() {
  const { t, language } = useI18n();
  const { postId } = useParams<{ postId?: string }>();
  const posts = t<
    { tag: string; date: string; comments: string; title: string; excerpt: string }[]
  >('blogPage.posts', []);
  const blogPosts = useMemo(() => buildBlogCards(posts), [posts]);
  const activePost = blogPosts.find((post) => post.id === postId) ?? blogPosts[0];

  if (!activePost) {
    return null;
  }

  const postIndex = blogPosts.findIndex((post) => post.id === activePost.id);
  const details = buildBlogDetailContent(activePost, language, postIndex >= 0 ? postIndex : 0);
  const popularPosts = t<{ date: string; title: string }[]>('blogPage.popularPosts', []);
  const categories = t<string[]>('blogPage.categories', []);
  const tags = t<string[]>('blogPage.tags', []);

  return (
    <>
      <div className="blog-details-area ptb-120">
        <div className="container mw-1690">
          <div className="row g-4">
            <div className="col-xl-8">
              <div className="blog-details-content">
                <div className="blog-details-img">
                  <img src={activePost.image} alt={activePost.title} />
                  <span className="tag">{details.tag}</span>
                </div>

                <ul className="p-0 mt-0 list-unstyled d-flex align-items-center info">
                  <li>
                    <span className="d-flex align-items-center gap-10 text-decoration-none">
                      <i className="ti ti-calendar-week fs-18"></i>
                      <span>{details.date}</span>
                    </span>
                  </li>
                  <li>
                    <a
                      href="#comment"
                      className="d-flex align-items-center gap-10 text-decoration-none"
                    >
                      <i className="ti ti-message fs-18"></i>
                      <span>{details.comments}</span>
                    </a>
                  </li>
                </ul>

                <h2>{details.title}</h2>
                {details.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}

                <blockquote>
                  <div className="d-sm-flex align-items-center gap-30">
                    <div className="flex-shrink-0">
                      <img src="/assets/images/quat.svg" alt="quote" />
                    </div>
                    <div className="flex-grow-1">
                      <p>{details.quote}</p>
                    </div>
                  </div>
                </blockquote>

                <h3>{details.subTitle}</h3>
                {details.subParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}

                <div className="d-flex flex-wrap gap-10 align-items-center justify-content-between tags-social bg-gray2">
                  <ul className="p-0 m-0 list-unstyled d-flex align-items-center tags">
                    <li>
                      <i className="ti ti-tag-filled"></i>
                    </li>
                    {details.tags.map((tag) => (
                      <li key={tag}>
                        <Link to="/blog" className="text-decoration-none">
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
                    <img src="/assets/images/user21.jpg" className="rounded-circle" alt={details.authorName} />
                  </div>

                  <div className="flex-grow-1">
                    <h4>{details.authorName}</h4>
                    <p>{details.authorBio}</p>

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

                <h3 id="comment">{details.commentTitle}</h3>

                <div className="d-sm-flex comment-info position-relative z-1 bg-gray2">
                  <div className="flex-shrink-0 mb-3 mb-sm-0">
                    <img src="/assets/images/team1.jpg" alt={details.commentName} />
                  </div>

                  <div className="flex-grow-1">
                    <h4>{details.commentName}</h4>
                    <span>{details.commentMeta}</span>
                    <p className="m-0">{details.commentText}</p>

                    <Link to={`/blog/${activePost.id}`} className="reply">
                      {t('common.reply')}
                    </Link>
                  </div>
                </div>

                <form className="comment-form bg-gray2">
                  <h3>{details.replyTitle}</h3>
                  <p>{details.replyNote}</p>

                  <div className="row g-4">
                    <div className="col-lg-6">
                      <input type="text" className="form-control" placeholder={details.replyPlaceholders.name} />
                    </div>
                    <div className="col-lg-6">
                      <input type="email" className="form-control" placeholder={details.replyPlaceholders.email} />
                    </div>
                    <div className="col-12">
                      <textarea className="form-control" rows={5} placeholder={details.replyPlaceholders.comment}></textarea>
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
                    {popularPosts.map((post, index) => {
                      const linkedPost = blogPosts[index] ?? activePost;

                      return (
                        <Link to={`/blog/${linkedPost.id}`} className="d-sm-flex align-items-center item" key={post.title}>
                          <div className="flex-shrink-0 mb-3 mb-sm-0">
                            <img src={linkedPost.image} className="object-fit-cover" alt={linkedPost.title} />
                          </div>
                          <div className="flex-grow-1">
                            <span>{post.date}</span>
                            <h4>{post.title}</h4>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>

                <div className="sidebar-widget bg-gray2">
                  <h3>{t('common.newsCategory')}</h3>
                  <ul className="category-list p-0 m-0 list-unstyled">
                    {categories.map((category) => (
                      <li key={category}>
                        <Link
                          to="/blog"
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
                        <Link to="/blog">{tag}</Link>
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
