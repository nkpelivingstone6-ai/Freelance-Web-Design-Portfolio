import { ArrowDown, ArrowRight, ArrowUpRight, Check, Layers3, LifeBuoy, Mail, MessageCircle, MonitorSmartphone, PenTool, Sparkles } from 'lucide-react';
import { siteConfig } from './site-config';

const whatsappHref = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent('Hi, I would like to talk about a website project.')}`;
const whatsappFor = (message: string) => `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;

const services = [
  { icon: PenTool, number: '01', title: 'Website Design', copy: 'A clear, characterful website that makes your business easy to understand and easy to choose.' },
  { icon: Layers3, number: '02', title: 'Landing Pages', copy: 'One focused page, built around a single offer and a next step your customers can actually find.' },
  { icon: Sparkles, number: '03', title: 'Website Redesign', copy: 'Keep what is working. Rethink what is not. Bring your online presence up to where your business is now.' },
  { icon: MonitorSmartphone, number: '04', title: 'Mobile Optimization', copy: 'Thoughtful layouts and fast-loading pages that feel just as good in a customer’s hand.' },
  { icon: LifeBuoy, number: '05', title: 'Website Maintenance', copy: 'Reliable updates and practical support, so your site stays useful long after launch.' },
];

const plans = [
  { name: 'Starter', price: siteConfig.prices.starter, description: 'A polished first step for a new or independent business.', includes: ['Single-page website', 'Mobile-friendly layout', 'Contact form or direct contact', 'One revision round'] },
  { name: 'Business', price: siteConfig.prices.business, description: 'A complete, confident online home for a growing business.', includes: ['Up to five pages', 'Custom visual direction', 'Search-friendly page structure', 'Two revision rounds', 'Launch support'] },
  { name: 'Premium', price: siteConfig.prices.premium, description: 'More room for a considered brand and a bigger set of needs.', includes: ['Up to eight pages', 'Expanded design system', 'Content and image guidance', 'Three revision rounds', '30 days of post-launch care'] },
];

function App() {
  return (
    <div className="site-shell">
      <header className="header">
        <div className="wrap nav-inner">
          <a className="brand" href="#top" aria-label={`${siteConfig.name}, home`} data-testid="link-home">
            <span className="brand-mark">{siteConfig.initials}</span>
            <span className="brand-name">{siteConfig.name}<small>Independent web designer</small></span>
          </a>
          <nav className="nav-links" aria-label="Main navigation">
            <a href="#services" data-testid="link-nav-services">Services</a>
            <a href="#work" data-testid="link-nav-work">Selected work</a>
            <a href="#about" data-testid="link-nav-about">About</a>
            <a className="nav-cta" href={whatsappHref} target="_blank" rel="noreferrer" data-testid="link-nav-whatsapp">Let’s talk <ArrowUpRight size={14} /></a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="wrap hero-grid">
            <div>
              <div className="eyebrow reveal">Web design for small business</div>
              <h1 className="serif reveal reveal-delay">I Build Modern Websites for Businesses</h1>
              <p className="hero-copy reveal reveal-later">Fast, mobile-friendly websites that help small businesses look their best and turn a first visit into a real conversation. Thoughtfully designed, built remotely, and made around the way you work.</p>
              <div className="hero-actions reveal reveal-later">
                <a className="button" href={whatsappHref} target="_blank" rel="noreferrer" data-testid="link-hero-whatsapp">Start a WhatsApp chat <ArrowUpRight size={15} /></a>
                <a className="button button-light" href="#work" data-testid="link-hero-work">See selected work <ArrowDown size={14} /></a>
              </div>
              <div className="availability"><i /> Available for select projects <span>·</span> Working remotely, wherever you are</div>
            </div>
            <div className="hero-art" aria-label="Abstract architectural illustration of a welcoming storefront">
              <span className="hero-index">01 / INDEPENDENT BY DESIGN</span>
              <div className="art-frame"><div className="arch" /><div className="sun-disc" /><div className="shape-one" /><div className="shape-two" /></div>
              <div className="art-label">Good work, online<span>Designed around your business.</span></div>
            </div>
          </div>
        </section>

        <div className="ticker" aria-label="Service highlights">
          <div className="wrap ticker-inner">
            <span>Strategy with clarity</span><b>·</b><span>Built for every screen</span><b>·</b><span>Remote, human collaboration</span><b>·</b><span>Support beyond launch</span>
          </div>
        </div>

        <section className="section" id="services">
          <div className="wrap">
            <div className="section-head">
              <div><div className="eyebrow">What I can help with</div><h2 className="serif section-title">A better website starts with the right kind of help.</h2></div>
              <p className="section-intro">From a first online home to a much-needed refresh, each project gets the same care: clear thinking, direct communication and a site that works in the real world.</p>
            </div>
            <div className="services-grid">
              {services.map(({ icon: Icon, number, title, copy }) => (
                <article className="service" key={number} data-testid={`card-service-${number}`}>
                  <div className="service-top"><Icon size={19} strokeWidth={1.5} /><span>{number}</span></div>
                  <div><h3>{title}</h3><p>{copy}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="project-section" id="work">
          <div className="wrap project-grid">
            <div className="project-copy">
              <div className="eyebrow">Selected project · 01</div>
              <h2 className="serif">Royal Cuts<br />Barbershop</h2>
              <p>A modern neighborhood barbershop deserves an online first impression with the same confidence as a great cut. This concept brings the shop’s character forward and makes the essential details easy to find.</p>
              <div className="project-meta"><div><span>Project</span><span>Website design</span></div><div><span>Focus</span><span>Local business</span></div></div>
              <a
                className="button"
                href={siteConfig.projectUrlIsPlaceholder ? '#contact' : siteConfig.projectUrl}
                target={siteConfig.projectUrlIsPlaceholder ? undefined : '_blank'}
                rel={siteConfig.projectUrlIsPlaceholder ? undefined : 'noreferrer'}
                data-testid="link-project-site"
              >
                {siteConfig.projectUrlIsPlaceholder ? 'Ask about this project' : 'Visit the live website'} <ArrowUpRight size={15} />
              </a>
              {siteConfig.projectUrlIsPlaceholder && <p className="project-link-note">The published website link will appear here once it’s added.</p>}
            </div>
            <div className="browser" aria-label="Preview illustration of the Royal Cuts Barbershop website">
              <div className="browser-top"><i /><i /><i /><span>royal cuts · barbershop</span></div>
              <div className="barber-screen">
                <div className="barber-nav"><span className="barber-logo">ROYAL CUTS</span><span>Services&nbsp;&nbsp;&nbsp; The shop&nbsp;&nbsp;&nbsp; Contact</span></div>
                <div className="barber-hero-copy"><small>YOUR NEIGHBORHOOD BARBER</small><strong>Good cuts.<br />Good company.</strong><p>Classic barbering, with a modern edge. Drop in and make yourself at home.</p><span>Book your chair</span></div>
                <div className="chair" />
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="wrap about-section">
            <div className="about-mark"><blockquote>Good design should feel like <span>your business,</span> at its very best.</blockquote></div>
            <div className="about-content">
              <div className="eyebrow">A little about me</div>
              <h2 className="serif">Small studio.<br />Direct relationship.</h2>
              <p>I’m {siteConfig.name}, a freelance web designer working remotely with small businesses. You work directly with me—from the first conversation to launch—so the person shaping the site is the person listening to what your business needs.</p>
              <p>No big-agency layers or confusing hand-offs. Just thoughtful design, a clear process and a website that gives your customers a good reason to get in touch.</p>
              <div className="about-points">
                <div className="about-point"><i><Check size={15} /></i><span>One-to-one communication, start to finish</span></div>
                <div className="about-point"><i><Check size={15} /></i><span>Built to feel at home on mobile</span></div>
                <div className="about-point"><i><Check size={15} /></i><span>Clear scope and pricing before work begins</span></div>
                <div className="about-point"><i><Check size={15} /></i><span>Remote collaboration that respects your time</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="pricing-section" id="pricing">
          <div className="wrap">
            <div className="section-head">
              <div><div className="eyebrow">Straightforward starting points</div><h2 className="serif section-title">A good place to begin.</h2></div>
              <p className="section-intro">Every business is different. These starting prices make the first conversation easier; your final quote is shaped around your goals and scope.</p>
            </div>
            <div className="pricing-grid">
              {plans.map((plan) => (
                  <article className={`price-card${plan.name === 'Business' ? ' featured' : ''}`} key={plan.name} data-testid={`card-price-${plan.name.toLowerCase()}`}>
                  <small>Starting at</small><h3 className="serif">{plan.name}</h3>
                  <div className="price">{plan.price}</div><div className="price-note">{siteConfig.currency} · project starting price</div>
                  <p className="price-desc">{plan.description}</p>
                  <ul className="price-list">{plan.includes.map((item) => <li key={item}>{item}</li>)}</ul>
                  <a className="button" href={whatsappFor(`Hi, I would like to ask about the ${plan.name} website package.`)} target="_blank" rel="noreferrer" data-testid={`link-price-${plan.name.toLowerCase()}`}>Ask about {plan.name} <ArrowRight size={14} /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="process-section">
          <div className="wrap">
            <div className="section-head">
              <div><div className="eyebrow">How we’ll work together</div><h2 className="serif section-title">A clear path from hello to live.</h2></div>
              <p className="section-intro">Good work comes from a good working relationship. Here’s what to expect when we make something together.</p>
            </div>
            <div className="process-grid">
              <article className="process-item"><span className="process-num">01 / LISTEN</span><h3>We talk it through</h3><p>A relaxed conversation about your business, your people and what the website needs to do.</p></article>
              <article className="process-item"><span className="process-num">02 / PLAN</span><h3>Agree the shape</h3><p>Get a clear scope, timeline and price before any design work begins. No surprises later.</p></article>
              <article className="process-item"><span className="process-num">03 / DESIGN</span><h3>Make it yours</h3><p>Review a thoughtful first direction, share feedback and refine the details together.</p></article>
              <article className="process-item"><span className="process-num">04 / LAUNCH</span><h3>Put it to work</h3><p>Go live with a mobile-ready site, then get practical help finding your feet.</p></article>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="wrap contact-grid">
            <div>
              <div className="eyebrow">Your next step</div>
              <h2 className="serif">Let’s make your website work harder.</h2>
              <p>Tell me a little about your business and what you have in mind. No pressure, no pitch deck—just a useful first conversation.</p>
            </div>
            <div className="contact-card">
              <a className="contact-item" href={whatsappHref} target="_blank" rel="noreferrer" data-testid="link-contact-whatsapp">
                <span className="contact-icon"><MessageCircle size={17} /></span><span><small>WhatsApp · quickest reply</small><strong>{siteConfig.phoneDisplay}</strong></span><ArrowUpRight size={15} />
              </a>
              <a className="contact-item" href={`mailto:${siteConfig.email}`} data-testid="link-contact-email">
                <span className="contact-icon"><Mail size={17} /></span><span><small>Email</small><strong>{siteConfig.email}</strong></span><ArrowUpRight size={15} />
              </a>
              <a className="button" href={whatsappHref} target="_blank" rel="noreferrer" data-testid="link-contact-start">Tell me about your project <ArrowRight size={15} /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footer-inner">
          <a className="brand" href="#top" data-testid="link-footer-home">
            <span className="brand-mark">{siteConfig.initials}</span><span className="brand-name">{siteConfig.name}<small>Independent web designer</small></span>
          </a>
          <span className="footer-note">Thoughtful websites for real businesses · Working remotely</span>
          <div className="footer-links"><a href="#services" data-testid="link-footer-services">Services</a><a href="#work" data-testid="link-footer-work">Work</a><a href="#pricing" data-testid="link-footer-pricing">Starting prices</a><a href={whatsappHref} target="_blank" rel="noreferrer" data-testid="link-footer-whatsapp">WhatsApp</a></div>
          <span className="footer-note">© {new Date().getFullYear()} {siteConfig.name}</span>
        </div>
      </footer>
    </div>
  );
}

export default App;