import { useI18n } from '../i18n/I18nProvider';

export default function SearchModal() {
  const { t } = useI18n();

  return (
    <>
      <div className="modal fade src-modal" id="staticBackdrop" tabIndex={-1} aria-hidden="true">
          <div className="modal-dialog modal-fullscreen">
              <div className="modal-content" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
                  <div className="modal-header border-0">
                      <div className="modal-title"></div>
                      <button type="button" className="btn-close bg-primary text-white opacity-100" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body d-flex justify-content-center align-items-center">
                      <form className="w-100" style={{ maxWidth: "500px" }}>
                          <div className="position-relative">
                          <input id="searchInput" type="text" className="form-control bg-gray border-0" placeholder={t('search.placeholder')} />
                              <button className="border-0 bg-primary d-flex justify-content-center align-items-center position-absolute top-50 end-0 translate-middle-y m-2 my-0 rounded-3" type="button" style={{ width: "40px", height: "40px" }}>
                                  <i className="ti ti-search text-white"></i>
                              </button>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
      </div>
    </>
  );
}
