import Subscribe from '../components/Subscribe';
import { useI18n } from '../i18n/I18nProvider';

export default function PrivacyPolicyPage() {
  const { t } = useI18n();
  const privacy = t<{
    updated: string;
    title: string;
    sections: string[];
    headings: string[];
    paragraphs: string[];
    list: string[];
  }>('privacy', {
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
            <span className="update">{privacy.updated}</span>
            <h3>{privacy.title}</h3>
            <p>{privacy.sections[0]}</p>
            <p>{privacy.sections[1]}</p>

            <div className="gap-20"></div>

            <h3>{privacy.headings[0]}</h3>
            <p>{privacy.paragraphs[0]}</p>

            <div className="gap-20"></div>

            <h3>{privacy.headings[1]}</h3>
            <p>{privacy.paragraphs[1]}</p>
            <p>{privacy.paragraphs[2]}</p>
            <ol>
              {privacy.list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>

            <div className="gap-20"></div>

            <h3>{privacy.headings[2]}</h3>
            <p>{privacy.paragraphs[3]}</p>

            <div className="gap-20"></div>

            <h3>{privacy.headings[3]}</h3>
            <p>{privacy.paragraphs[4]}</p>
            <p>{privacy.paragraphs[5]}</p>
          </div>
        </div>
      </div>
      <Subscribe />
    </>
  );
}
