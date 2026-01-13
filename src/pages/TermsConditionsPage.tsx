import PageBanner from '../components/PageBanner';
import Subscribe from '../components/Subscribe';

export default function TermsConditionsPage() {
  return (
    <>
      <PageBanner
        title="Terms & Conditions"
        backgroundImage="/assets/images/page-bg14.jpg"
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Terms & Conditions' },
        ]}
      />
      <div className="ptb-120">
        <div className="container">
          <div className="main-content-text">
            <span className="update">Last updated: December 2025</span>
            <h3>Terms &amp; Conditions</h3>
            <p>
              Turpis gravida turpis mauris magna in libero ac dis consequat. Imperdiet
              ac semper quisque volutpat consectetur cursus non pretium pharetra. Nisl
              duis blandit dui imperdiet nec id integer. Elit varius cras arcu tempor
              integer in.
            </p>
            <p>
              Quam nunc arcu nunc a lobortis convallis magnis dolor. Integer malesuada
              vel mi eu elementum. Etiam eget urna quis dui amet facilisis fringilla
              sed. Massa vitae accumsan viverra in morbi nec volutpat aenean tortor.
              At nec sagittis eget placerat. Mi accumsan massa vitae etiam nisi
              suspendisse condimentum elementum. Arcu varius id ipsum arcu et diam non
              rutrum. Auctor elit malesuada non aenean posuere mattis iaculis mauris
              nibh.
            </p>

            <div className="gap-20"></div>

            <h3>What type of personal information do we collect?</h3>
            <p>
              Turpis gravida turpis mauris magna in libero ac dis consequat. Imperdiet
              ac semper quisque volutpat consectetur cursus non pretium pharetra. Nisl
              duis blandit dui imperdiet nec id integer. Elit varius cras arcu tempor
              integer in. Quam nunc arcu nunc a lobortis convallis magnis dolor.
              Integer malesuada vel mi eu elementum. Etiam eget urna quis dui amet
              facilisis fringilla sed. Massa vitae accumsan viverra in morbi nec
              volutpat aenean tortor. At nec sagittis eget placerat. Mi accumsan massa
              vitae etiam nisi suspendisse condimentum elementum. Arcu varius id ipsum
              arcu et diam non rutrum. Auctor elit malesuada non aenean posuere mattis
              iaculis mauris nibh.
            </p>

            <div className="gap-20"></div>

            <h3>How do we collect your personal data?</h3>
            <p>
              Turpis gravida turpis mauris magna in libero ac dis consequat. Imperdiet
              ac semper quisque volutpat consectetur cursus non pretium pharetra. Nisl
              duis blandit dui imperdiet nec id integer. Elit varius cras arcu tempor
              integer in.
            </p>
            <p>
              Quam nunc arcu nunc a lobortis convallis magnis dolor. Integer malesuada
              vel mi eu elementum. Etiam eget urna quis dui amet facilisis fringilla
              sed. Massa vitae accumsan viverra in morbi nec volutpat aenean tortor.
              At nec sagittis eget placerat. Mi accumsan massa vitae etiam nisi
              suspendisse condimentum elementum. Arcu varius id ipsum arcu et diam non
              rutrum. Auctor elit malesuada non aenean posuere mattis iaculis mauris
              nibh.
            </p>
            <ol>
              <li>Imperdiet ac semper quisque volutpat consectetur cursus non pretium pharetra.</li>
              <li>Nisl duis blandit dui imperdiet nec id integer.</li>
              <li>Quam nunc arcu nunc a lobortis convallis magnis dolor.</li>
              <li>Massa vitae accumsan viverra in morbi nec volutpat aenean tortor.</li>
            </ol>

            <div className="gap-20"></div>

            <h3>What are our legal bases for processing your data?</h3>
            <p>
              Turpis gravida turpis mauris magna in libero ac dis consequat. Imperdiet
              ac semper quisque volutpat consectetur cursus non pretium pharetra. Nisl
              duis blandit dui imperdiet nec id integer. Elit varius cras arcu tempor
              integer in. Quam nunc arcu nunc a lobortis convallis magnis dolor.
              Integer malesuada vel mi eu elementum. Etiam eget urna quis dui amet
              facilisis fringilla sed. Massa vitae accumsan viverra in morbi nec
              volutpat aenean tortor. At nec sagittis eget placerat. Mi accumsan massa
              vitae etiam nisi suspendisse condimentum elementum. Arcu varius id ipsum
              arcu et diam non rutrum. Auctor elit malesuada non aenean posuere mattis
              iaculis mauris nibh.
            </p>

            <div className="gap-20"></div>

            <h3>Security</h3>
            <p>
              Turpis gravida turpis mauris magna in libero ac dis consequat. Imperdiet
              ac semper quisque volutpat consectetur cursus non pretium pharetra. Nisl
              duis blandit dui imperdiet nec id integer. Elit varius cras arcu tempor
              integer in.
            </p>
            <p>
              Quam nunc arcu nunc a lobortis convallis magnis dolor. Integer malesuada
              vel mi eu elementum. Etiam eget urna quis dui amet facilisis fringilla
              sed. Massa vitae accumsan viverra in morbi nec volutpat aenean tortor.
              At nec sagittis eget placerat. Mi accumsan massa vitae etiam nisi
              suspendisse condimentum elementum. Arcu varius id ipsum arcu et diam non
              rutrum. Auctor elit malesuada non aenean posuere mattis iaculis mauris
              nibh.
            </p>
          </div>
        </div>
      </div>
      <Subscribe />
    </>
  );
}
