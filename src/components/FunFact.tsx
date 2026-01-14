import { useI18n } from '../i18n/I18nProvider';

const baseAnimationStyle = (delay: number) => ({
  animationName: 'slideInUp',
  animationDuration: '900ms',
  animationTimingFunction: 'ease',
  animationDelay: `${delay}ms`,
  animationDirection: 'normal',
  animationFillMode: 'both',
});

export default function FunFact() {
  const { t } = useI18n();
  const items = t<{ value: number; label: string }[]>('funFacts.items', []);
  const funFacts = [
    { icon: '/assets/images/fun-fact.svg', delay: 0, ...items[0] },
    { icon: '/assets/images/fun-fact2.svg', delay: 270, ...items[1] },
    { icon: '/assets/images/fun-fact3.svg', delay: 540, ...items[2] },
    { icon: '/assets/images/fun-fact4.svg', delay: 810, ...items[3] },
  ].filter((item) => item.label);

  return (
    <>
      <div className="fun-fact-area pt-120">
        <div className="container mw-1690">
          <span className="partner-title mb-60 text-secondary">{t('funFacts.title')}</span>
          <div
            className="d-flex flex-wrap justify-content-between align-items-center gap-15"
            data-cues="slideInUp"
            data-duration="900"
            data-disabled="true"
          >
            {funFacts.map((fact) => (
              <div
                className="fun-fact-single-item"
                data-cue="slideInUp"
                data-duration="900"
                data-show="true"
                style={baseAnimationStyle(fact.delay)}
                key={fact.label}
              >
                <div className="d-flex gap-30 align-items-center">
                  <div className="flex-shrink-0">
                    <img src={fact.icon} alt="fun-fact" />
                  </div>
                  <div className="flex-grow-1">
                    <h1 className="mb-0 lh-1">
                      <span>{fact.value}</span>+
                    </h1>
                    <p>{fact.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
