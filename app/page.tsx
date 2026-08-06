import QuoteForm from "./quote-form";

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M6.6 2.8 9.7 6a1.4 1.4 0 0 1 .3 1.6L8.7 10a16 16 0 0 0 5.3 5.3l2.4-1.3a1.4 1.4 0 0 1 1.6.3l3.2 3.1a1.4 1.4 0 0 1 .3 1.5c-.6 1.8-2.3 3-4.2 3C9 21.9 2.1 15 2.1 6.7c0-1.9 1.2-3.6 3-4.2.5-.2 1.1 0 1.5.3Z" />
  </svg>
);

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="m5 12 4 4L19 6" />
  </svg>
);

const BuildingIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M4 21V5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v16M8 7h2M13 7h1M8 11h2M13 11h1M8 15h2M13 15h1M2 21h20M17 10h2a1 1 0 0 1 1 1v10" />
  </svg>
);

const FactoryIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M3 21V10l6 3V9l6 4V5h4l2 16M7 17h2M13 17h2M2 21h20" />
  </svg>
);

const WaterIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2S5 10 5 15a7 7 0 0 0 14 0c0-5-7-13-7-13Z" /><path d="M9 16c.4 1.2 1.4 2 2.8 2" />
  </svg>
);

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 3 20 6v5c0 5-3.4 8.5-8 10-4.6-1.5-8-5-8-10V6l8-3Z" /><path d="m8.5 12 2.2 2.2 4.8-5" />
  </svg>
);

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" />
  </svg>
);

const LeafIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20 4C11 4 5 8 5 15c0 2.2 1.8 4 4 4 7 0 10-7 11-15Z" /><path d="M4 21c3-6 7-9 12-12" />
  </svg>
);

const PinIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" />
  </svg>
);

export default function Home() {
  return (
    <main>
      <section className="hero" id="accueil">
        <div className="hero-orb hero-orb-one" />
        <div className="hero-orb hero-orb-two" />

        <header className="site-header shell">
          <a className="brand" href="#accueil" aria-label="Service d’entretien J.V.R., retour à l’accueil">
            <span className="brand-mark">J.V.R.</span>
            <span className="brand-copy">
              <strong>Service d’entretien J.V.R.</strong>
              <small>Lavage de vitres</small>
            </span>
          </a>

          <nav aria-label="Navigation principale">
            <a href="#services">Services</a>
            <a href="#methode">Méthode</a>
            <a href="#secteurs">Secteurs</a>
            <a href="#contact">Contact</a>
          </nav>

          <a className="header-phone" href="tel:+15142374066">
            <span className="icon-wrap"><PhoneIcon /></span>
            <span>
              <small>Parlez-nous de votre projet</small>
              <strong>514 237-4066</strong>
            </span>
          </a>
        </header>

        <div className="hero-grid shell">
          <div className="hero-copy">
            <div className="eyebrow"><span />Commercial · Industriel</div>
            <h1>Des vitres impeccables.<br /><em>Une image qui brille.</em></h1>
            <p>
              Un service professionnel, ponctuel et sécuritaire pour vos vitrines,
              bureaux et bâtiments à grande surface vitrée.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">
                Estimation gratuite <ArrowIcon />
              </a>
              <a className="button button-ghost" href="tel:+15142374066">
                <PhoneIcon /> 514 237-4066
              </a>
            </div>
            <div className="hero-assurances" aria-label="Nos engagements">
              <span><CheckIcon /> Travail professionnel</span>
              <span><CheckIcon /> Service fiable</span>
              <span><CheckIcon /> Résultat sans traces</span>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="glass-building">
              <div className="building-line line-a" />
              <div className="building-line line-b" />
              <div className="building-line line-c" />
              <div className="building-glow" />
            </div>
            <div className="visual-badge">
              <strong>15+</strong>
              <span>ans de savoir-faire</span>
            </div>
            <div className="pure-water-card">
              <span className="drop">0</span>
              <span><strong>ppm TDS</strong><small>Eau ultra-pure</small></span>
            </div>
          </div>
        </div>

        <div className="hero-bottom shell">
          <span className="served-label">Secteurs desservis</span>
          <span>Laval</span><i />
          <span>Montréal</span><i />
          <span>Rive-Nord</span><i />
          <span>Laurentides</span>
        </div>
      </section>

      <section className="proof-strip" aria-label="Service d’entretien J.V.R. en bref">
        <div className="shell proof-grid">
          <div><strong>15+</strong><span>années de savoir-faire</span></div>
          <div><strong>100%</strong><span>commercial et industriel</span></div>
          <div><strong>0 ppm</strong><span>avec notre eau ultra-pure</span></div>
          <div><strong>4</strong><span>grands secteurs desservis</span></div>
        </div>
      </section>

      <section className="section services-section" id="services">
        <div className="shell">
          <div className="section-heading heading-split">
            <div>
              <span className="section-kicker">Nos services</span>
              <h2>La clarté au service<br />de votre <em>entreprise.</em></h2>
            </div>
            <p>
              Nous adaptons notre intervention à votre bâtiment et à vos contraintes
              pour livrer un résultat uniforme, professionnel et sans traces.
            </p>
          </div>

          <div className="service-grid">
            <article className="service-card service-card-featured">
              <span className="card-number">01</span>
              <div className="service-icon"><BuildingIcon /></div>
              <h3>Commercial</h3>
              <p>Boutiques, restaurants, bureaux et immeubles à vitrine : une façade nette qui inspire confiance dès le premier regard.</p>
              <a href="#contact">Obtenir une estimation <ArrowIcon /></a>
            </article>
            <article className="service-card">
              <span className="card-number">02</span>
              <div className="service-icon"><FactoryIcon /></div>
              <h3>Industriel</h3>
              <p>Entrepôts et bâtiments à grande surface vitrée, traités avec une méthode efficace pensée pour les projets d’envergure.</p>
              <a href="#contact">Parler de votre bâtiment <ArrowIcon /></a>
            </article>
            <article className="service-card">
              <span className="card-number">03</span>
              <div className="service-icon"><WaterIcon /></div>
              <h3>Lavage à l’eau pure</h3>
              <p>Une méthode performante sans produits chimiques, idéale pour atteindre les surfaces en hauteur directement depuis le sol.</p>
              <a href="#methode">Voir la méthode <ArrowIcon /></a>
            </article>
          </div>
        </div>
      </section>

      <section className="section water-section" id="methode">
        <div className="shell water-grid">
          <div className="water-visual" aria-hidden="true">
            <div className="water-ring ring-one" />
            <div className="water-ring ring-two" />
            <div className="water-drop-large">0<small>ppm</small></div>
            <div className="water-caption">De l’eau filtrée<br />jusqu’à l’ultra-pure</div>
          </div>
          <div className="water-copy">
            <span className="section-kicker section-kicker-light">Notre méthode à l’eau pure</span>
            <h2>Une finition éclatante,<br /><em>naturellement.</em></h2>
            <p className="water-intro">
              Les minéraux présents dans l’eau du robinet causent les dépôts et les
              traces. Notre système les retire avant même que l’eau touche vos vitres.
            </p>
            <ol className="process-list">
              <li><strong>01</strong><span><b>Filtration avancée</b><small>Préfiltres, osmose inverse et déionisation retirent calcium, magnésium et impuretés.</small></span></li>
              <li><strong>02</strong><span><b>Brossage en douceur</b><small>Une perche télescopique et une brosse non abrasive délogent la saleté sans abîmer les surfaces.</small></span></li>
              <li><strong>03</strong><span><b>Rinçage sans traces</b><small>L’eau pure sèche naturellement, sans essuyage, film ni résidu chimique.</small></span></li>
            </ol>
          </div>
        </div>
      </section>

      <section className="section difference-section">
        <div className="shell difference-grid">
          <div className="section-heading compact-heading">
            <span className="section-kicker">La différence Service d’entretien J.V.R.</span>
            <h2>Propre. Net.<br /><em>Sécuritaire.</em></h2>
            <p>Chaque intervention est menée avec le même souci du détail, peu importe la taille du projet.</p>
          </div>
          <div className="benefit-list">
            <article><span><ShieldIcon /></span><div><h3>Sécurité d’abord</h3><p>Le travail en hauteur peut être effectué depuis le sol grâce à nos perches spécialisées.</p></div></article>
            <article><span><ClockIcon /></span><div><h3>Fiable et ponctuel</h3><p>Un service professionnel qui respecte votre environnement de travail et votre échéancier.</p></div></article>
            <article><span><LeafIcon /></span><div><h3>Moins de produits</h3><p>L’eau pure permet un nettoyage performant sans laisser de produits chimiques sur les surfaces.</p></div></article>
          </div>
        </div>
      </section>

      <section className="section area-section" id="secteurs">
        <div className="shell area-grid">
          <div className="area-copy">
            <span className="section-kicker">Territoire desservi</span>
            <h2>Présents là où<br />vous avez <em>besoin.</em></h2>
            <p>Service d’entretien J.V.R. se déplace pour les entreprises et bâtiments commerciaux ou industriels du Grand Montréal et des environs.</p>
            <a className="button button-dark" href="#contact">Vérifier votre secteur <ArrowIcon /></a>
          </div>
          <div className="area-map" aria-label="Secteurs desservis : Laval, Montréal, Rive-Nord et Laurentides">
            <div className="map-grid-lines" />
            <div className="area-pin pin-laval"><span><PinIcon /></span><b>Laval</b></div>
            <div className="area-pin pin-montreal"><span><PinIcon /></span><b>Montréal</b></div>
            <div className="area-pin pin-rive"><span><PinIcon /></span><b>Rive-Nord</b></div>
            <div className="area-pin pin-laurentides"><span><PinIcon /></span><b>Laurentides</b></div>
          </div>
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <div className="shell contact-shell">
          <div className="contact-copy">
            <span className="section-kicker section-kicker-light">Estimation gratuite</span>
            <h2>Votre bâtiment mérite<br />de <em>briller.</em></h2>
            <p>Décrivez-nous votre projet. Nous vous répondrons avec une estimation claire et adaptée à vos besoins.</p>
            <div className="contact-links">
              <a href="tel:+15142374066"><span><PhoneIcon /></span><div><small>Téléphone</small><strong>514 237-4066</strong></div></a>
              <a href="mailto:rbernard@hotmail.ca"><span><MailIcon /></span><div><small>Courriel</small><strong>rbernard@hotmail.ca</strong></div></a>
            </div>
          </div>
          <QuoteForm />
        </div>
      </section>

      <footer>
        <div className="shell footer-main">
          <a className="brand footer-brand" href="#accueil" aria-label="Service d’entretien J.V.R., retour à l’accueil">
            <span className="brand-mark">J.V.R.</span>
            <span className="brand-copy"><strong>Service d’entretien J.V.R.</strong><small>Lavage de vitres</small></span>
          </a>
          <div className="footer-area">Laval <i /> Montréal <i /> Rive-Nord <i /> Laurentides</div>
          <a className="footer-phone" href="tel:+15142374066"><PhoneIcon /> 514 237-4066</a>
        </div>
        <div className="shell footer-bottom">
          <span>© {new Date().getFullYear()} Service d’entretien J.V.R.</span>
          <span>Site web par <b>VinceProNet</b></span>
        </div>
      </footer>

      <a className="mobile-call" href="tel:+15142374066" aria-label="Appeler Service d’entretien J.V.R. au 514 237-4066">
        <PhoneIcon /><span>Appeler J.V.R.</span>
      </a>
    </main>
  );
}
