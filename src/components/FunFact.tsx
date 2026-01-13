const FUN_FACTS = [
  {
    icon: '/assets/images/fun-fact.svg',
    value: 85,
    label: 'Repeat clients',
    delay: 0,
  },
  {
    icon: '/assets/images/fun-fact2.svg',
    value: 38,
    label: 'Team experience',
    delay: 270,
  },
  {
    icon: '/assets/images/fun-fact3.svg',
    value: 74,
    label: 'Projects Done',
    delay: 540,
  },
  {
    icon: '/assets/images/fun-fact4.svg',
    value: 62,
    label: 'Contractors Employed',
    delay: 810,
  },
];

const baseAnimationStyle = (delay: number) => ({
  animationName: 'slideInUp',
  animationDuration: '900ms',
  animationTimingFunction: 'ease',
  animationDelay: `${delay}ms`,
  animationDirection: 'normal',
  animationFillMode: 'both',
});

export default function FunFact() {
  return (
    <>
      <div className="fun-fact-area pt-120">
        <div className="container mw-1690">
          <span className="partner-title mb-60 text-secondary">
            INTERESTING AND UNEXPECTED FACTS
          </span>
          <div
            className="d-flex flex-wrap justify-content-between align-items-center gap-15"
            data-cues="slideInUp"
            data-duration="900"
            data-disabled="true"
          >
            {FUN_FACTS.map((fact) => (
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
                      <span className="counter">{fact.value}</span>+
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
