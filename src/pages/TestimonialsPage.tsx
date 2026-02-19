import { Link } from 'react-router-dom';
import { useI18n } from '../i18n/I18nProvider';

export default function TestimonialsPage() {
  const { t } = useI18n();
  const testimonials = t<{ text: string; name: string; role: string }[]>('testimonialsPage.items', []);
  return (
    <>
      <div className="testimonial-area mx-0 rounded-0 ptb-120">
        <div className="container mw-1690">
          <div className="row g-4">
            {testimonials.map((item, index) => (
              <div className="col-lg-6" key={item.name}>
                <div className="testimonial-single-item style-four">
                  <div className="d-flex gap-6 mb-4">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <i className="ti ti-star-filled fs-20" key={index}></i>
                    ))}
                  </div>

                  <p>{item.text}</p>

                  <div className="mt-4 pt-lg-3">
                    <div className="d-flex flex-wrap align-items-center gap-10 justify-content-between">
                      <div className="d-flex align-items-center gap-25">
                        <div className="flex-shrink-0">
                          <img
                            src={`/assets/images/user${15 + index}.jpg`}
                            className="rounded-2 border-0"
                            alt="user"
                          />
                        </div>
                        <div className="flex-grow-1">
                          <h3 className="mb-0">{item.name}</h3>
                          <span>{item.role}</span>
                        </div>
                      </div>
                      <img src="/assets/images/quote2.svg" className="border-0" alt="quote" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="col-lg-12">
              <div className="pagination-area mt-lg-4 d-flex align-items-center justify-content-center">
                <Link to="/testimonials" className="next page-numbers border-0">
                  <i className="ti ti-chevron-left"></i>
                </Link>
                <span className="page-numbers border-0 current" aria-current="page">
                  1
                </span>
                <Link to="/testimonials" className="page-numbers border-0">
                  2
                </Link>
                <Link to="/testimonials" className="page-numbers border-0">
                  3
                </Link>
                <Link to="/testimonials" className="next page-numbers border-0">
                  <i className="ti ti-chevron-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
