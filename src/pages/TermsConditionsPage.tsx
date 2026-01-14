import Subscribe from '../components/Subscribe';
import { useI18n } from '../i18n/I18nProvider';

export default function TermsConditionsPage() {
  const { t } = useI18n();
  const terms = t<{
    updated: string;
    title: string;
    sections: string[];
    headings: string[];
    paragraphs: string[];
    list: string[];
  }>('terms', {
    updated: '',
    title: '',
    sections: [],
    headings: [],
    paragraphs: [],
    list: [],
  });

  return (
    <>
      <div className="ptb-120">
        <div className="container">
          <div className="main-content-text">
            <span className="update">{terms.updated}</span>
            <h3>{terms.title}</h3>
            <p>{terms.sections[0]}</p>
            <p>{terms.sections[1]}</p>

            <div className="gap-20"></div>

            <h3>{terms.headings[0]}</h3>
            <p>{terms.paragraphs[0]}</p>

            <div className="gap-20"></div>

            <h3>{terms.headings[1]}</h3>
            <p>{terms.paragraphs[1]}</p>
            <p>{terms.paragraphs[2]}</p>
            <ol>
              {terms.list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>

            <div className="gap-20"></div>

            <h3>{terms.headings[2]}</h3>
            <p>{terms.paragraphs[3]}</p>

            <div className="gap-20"></div>

            <h3>{terms.headings[3]}</h3>
            <p>{terms.paragraphs[4]}</p>
            <p>{terms.paragraphs[5]}</p>
          </div>
        </div>
      </div>
      <Subscribe />
    </>
  );
}
