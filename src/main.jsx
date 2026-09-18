import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import heroOffice from './assets/hero-office.jpg'
import aboutTeam from './assets/about-team.jpg'
import leaderPhoto from './assets/leader.jpg'

const nav = [
  ['Home', 'home'],
  ['Services', 'services'],
  ['Industries', 'industries'],
  ['How It Works', 'process'],
  ['Compliance', 'compliance'],
  ['Clients', 'clients'],
  ['Contact', 'contact'],
]

const Icon = ({ name }) => {
  const paths = {
    target: 'M12 2a10 10 0 1 0 10 10M12 6a6 6 0 1 0 6 6M12 10a2 2 0 1 0 2 2M22 2l-6 6M17 2h5v5',
    people: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75',
    shield: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10M9 12l2 2 4-4',
    chart: 'M3 3v18h18M7 16l4-5 4 3 5-7',
    check: 'M20 6 9 17l-5-5',
    clock: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20M12 6v6l4 2',
    globe: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20M2 12h20M12 2c3 3 3 17 0 20M12 2c-3 3-3 17 0 20',
    mail: 'M4 4h16v16H4zM4 6l8 7 8-7',
    phone: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.28-1.28a2 2 0 0 1 2.11-.45c.9.34 1.84.57 2.8.7A2 2 0 0 1 22 16.92z',
    pin: 'M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6',
    doc: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M9 13h6M9 17h6',
    briefcase: 'M20 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2M2 12h20',
    building: 'M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18M6 22h12M4 22h16M9 6h1M14 6h1M9 10h1M14 10h1M9 14h1M14 14h1',
    rocket: 'M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09zM12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2zM9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5',
    heart: 'M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z',
    spark: 'M12 3l1.9 5.8H20l-4.9 3.6 1.9 5.8L12 14.6 7 18.2l1.9-5.8L4 8.8h6.1z',
    alert: 'M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0zM12 9v4M12 17h.01',
    linkedin: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM6 9H2v12h4zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z',
    facebook: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z',
    instagram: 'M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM17.5 6.5h.01',
    twitter: 'M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z',
    plus: 'M12 5v14M5 12h14',
    minus: 'M5 12h14',
  }
  return <svg aria-hidden="true" viewBox="0 0 24 24"><path d={paths[name]} /></svg>
}

function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="header"><div className="container nav-wrap">
      <a className="brand" href="#home" aria-label="SKAPS HR Solutions home"><span className="brand-mark">S</span><span>SKAPS <b>HR Solutions</b></span></a>
      <button className="menu" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(!open)}><span /><span /><span /></button>
      <nav className={open ? 'nav open' : 'nav'} aria-label="Main navigation">
        {nav.map(([label, id]) => <a key={id} onClick={() => setOpen(false)} href={`#${id}`}>{label}</a>)}
        <a className="btn small" href="#contact" onClick={() => setOpen(false)}>Schedule Consultation</a>
      </nav>
    </div></header>
  )
}

const SectionTitle = ({ eyebrow, title, copy }) => (
  <div className="section-title reveal">{eyebrow && <span className="eyebrow">{eyebrow}</span>}<h2>{title}</h2>{copy && <p>{copy}</p>}</div>
)

function Hero() {
  return (
    <section id="home" className="hero"><div className="container hero-grid">
      <div className="hero-copy reveal">
        <span className="eyebrow">Trusted HR Partner</span>
        <h1>Scale Your <em>Workforce</em> with Reliable HR Solutions</h1>
        <p>SKAPS HR Solutions helps growing businesses manage payroll, hire skilled professionals, and stay fully compliant with labor regulations. Our team handles the complexity of workforce management so you can focus on building and expanding your business.</p>
        <div className="actions">
          <a className="btn" href="#contact">Schedule a Consultation <span>→</span></a>
          <a className="btn secondary" href="#services">Explore Our Services</a>
        </div>
      </div>
      <div className="hero-visual reveal">
        <div className="hero-photo"><img src={heroOffice} alt="SKAPS HR Solutions team working in a modern open-plan office" loading="eager" /></div>
        <div className="float f1"><Icon name="check" /><span>Payroll Processed<strong>100% Accurate</strong></span></div>
        <div className="float f2"><Icon name="people" /><span>New Hires<strong>+24 This Week</strong></span></div>
        <div className="float f3"><Icon name="shield" /><span>Compliance Status<strong>Verified</strong></span></div>
      </div>
    </div></section>
  )
}

const clientLogos = ['GYANSYS', 'kanerika', 'SAFE', 'SNOWRELIC', 'Squizify', 'ivy mobility', 'MICROCHIP', 'EY', 'Wizcom', 'MARVELL', 'TORQ', 'Arunachala']

function Trust() {
  return (
    <section className="trust"><div className="container">
      <p>Trusted By Organizations Managing <strong>Modern And Distributed Workforces</strong> Across Multiple Industries.</p>
      <div className="logos" aria-label="Client organizations">{clientLogos.map(l => <span key={l}>{l}</span>)}</div>
    </div></section>
  )
}

function About() {
  return (
    <section id="about" className="about section"><div className="container split">
      <div className="about-visual reveal">
        <img src={aboutTeam} alt="SKAPS leadership team in a strategy meeting" loading="lazy" />
        <div className="experience"><strong>10+</strong><span>Years of<br />Industry Excellence</span></div>
      </div>
      <div className="reveal">
        <span className="eyebrow">About SKAPS</span>
        <h2>All About <em>SKAPS HR Solutions</em></h2>
        <p>SKAPS HR Solutions is a modern workforce management and workforce solutions provider delivering staffing, payroll outsourcing, and HR compliance services to organizations across diverse industries.</p>
        <p>We specialize in helping businesses build efficient workforce structures, streamline operations, and manage compliance requirements through reliable and scalable HR solutions. Our team combines industry expertise with a people-focused approach to deliver customized workforce strategies that support long-term business growth and operational success.</p>
        <a href="#process" className="text-link">Discover our approach →</a>
      </div>
    </div></section>
  )
}

const stats = [['500+', 'Clients Supported'], ['3k+', 'Workforce Managed'], ['8K+', 'Successful Placements'], ['₹20 Cr+', 'Payroll Processed'], ['99.9%', 'Compliance Accuracy']]

function Stats() {
  return (
    <section className="stats dark"><div className="container stats-grid">
      {stats.map(([n, l]) => <div className="stat reveal" key={l}><strong>{n}</strong><span>{l}</span></div>)}
    </div></section>
  )
}

function PainAdvantage() {
  const pains = ['Payroll Delays and Errors', 'Difficulty Scaling Teams', 'Complex Compliance Requirements']
  const wins = ['Efficient Payroll Management', 'Access to Qualified Talent Networks', 'Reliable Compliance Solutions']
  return (
    <section className="section soft"><div className="container pa-grid">
      <div className="pa-card reveal">
        <h3>Common HR Pain Points</h3>
        <ul className="pa-list pain">{pains.map(p => <li key={p}><span className="pa-ic"><Icon name="alert" /></span>{p}</li>)}</ul>
      </div>
      <div className="pa-card advantage reveal">
        <h3>The SKAPS Advantage</h3>
        <ul className="pa-list">{wins.map(w => <li key={w}><span className="pa-ic"><Icon name="check" /></span>{w}</li>)}</ul>
      </div>
    </div></section>
  )
}

const services = [
  ['Payroll Outsourcing', 'Accurate, timely, and compliant payroll processing tailored to your organization\u2019s specific needs.', 'doc'],
  ['Contract Staffing', 'Flexible workforce solutions to scale your team up or down based on project demands and business cycles.', 'people'],
  ['HR Compliance', 'Navigate complex labor laws and statutory requirements with our expert compliance management.', 'shield'],
  ['Employee Administration', 'Streamlined onboarding, benefits administration, and lifecycle management for your entire workforce.', 'briefcase'],
  ['Remote Workforce', 'Tools and strategies to manage, monitor, and engage distributed teams effectively and securely.', 'globe'],
  ['Office Infrastructure', 'Comprehensive support for physical workspace management and facility operations.', 'building'],
]

function Services() {
  return (
    <section id="services" className="section"><div className="container">
      <SectionTitle eyebrow="What we do" title={<>Comprehensive <em>Workforce Solutions</em> for Growing Businesses</>} copy="Practical HR services that help teams move faster, operate confidently and stay focused on growth." />
      <div className="cards">{services.map(([t, d, i], n) => (
        <article className="card reveal" key={t}>
          <span className="card-num">0{n + 1}</span>
          <span className="service-icon"><Icon name={i} /></span>
          <h3>{t}</h3><p>{d}</p>
          <a href="#contact" aria-label={`Discuss ${t}`}>Learn more <span>→</span></a>
        </article>
      ))}</div>
    </div></section>
  )
}

const industries = [
  ['Technology and IT Services', 'target'],
  ['Healthcare', 'heart'],
  ['Manufacturing', 'building'],
  ['Financial Services', 'chart'],
  ['Retail and E-Commerce', 'briefcase'],
  ['Startups and Growing Businesses', 'rocket'],
]

function Industries() {
  return (
    <section id="industries" className="section soft"><div className="container">
      <SectionTitle eyebrow="Industries" title={<>Supporting Workforce Growth Across <em>Multiple Industries</em></>} copy="Flexible expertise for organizations at different stages of growth." />
      <div className="industry-grid">{industries.map(([x, i]) => (
        <div className="industry reveal" key={x}><span className="industry-ic"><Icon name={i} /></span><h3>{x}</h3></div>
      ))}</div>
    </div></section>
  )
}

const benefits = [['Workforce Flexibility', 'people'], ['Cost Efficiency', 'chart'], ['Access to Specialized Talent', 'target'], ['Reduced Compliance Risk', 'shield']]

function Flexible() {
  return (
    <section className="section"><div className="container">
      <SectionTitle eyebrow="Why SKAPS" title={<>The Smart Way to Build a <em>Flexible Workforce</em></>} copy="A practical model that keeps your teams agile, cost-efficient and compliant." />
      <div className="benefit-grid">{benefits.map(([t, i]) => (
        <div className="benefit reveal" key={t}><span className="benefit-ic"><Icon name={i} /></span><b>{t}</b></div>
      ))}</div>
    </div></section>
  )
}

const needs = [
  ['Contract Staffing', 'Bring in qualified professionals for defined project timelines and workloads.', 'people'],
  ['Temporary Staffing', 'Cover seasonal peaks and short-term demand without long-term overhead.', 'clock'],
  ['Dedicated Teams', 'Build reliable, long-term teams aligned to your operational goals.', 'target'],
  ['Payroll Outsourcing', 'Hand off payroll processing and compliance to a dependable partner.', 'doc'],
]

function Needs() {
  return (
    <section className="section soft"><div className="container">
      <SectionTitle eyebrow="Tailored solutions" title={<>Workforce Solutions Designed Around <em>Your Business Needs</em></>} copy="Choose the engagement model that fits how your organization scales." />
      <div className="cards needs-cards">{needs.map(([t, d, i]) => (
        <article className="card reveal" key={t}>
          <span className="service-icon"><Icon name={i} /></span>
          <h3>{t}</h3><p>{d}</p>
        </article>
      ))}</div>
    </div></section>
  )
}

const steps = [
  ['01', 'Consultation and Workforce Planning', 'We understand your goals, gaps and workforce priorities.'],
  ['02', 'Talent Sourcing and Selection', 'We identify and screen role-ready professionals for your team.'],
  ['03', 'Onboarding and Documentation', 'We handle onboarding, documentation and statutory formalities.'],
  ['04', 'Payroll and Compliance Management', 'We run accurate payroll and keep operations fully compliant.'],
  ['05', 'Ongoing Workforce Support', 'We measure, improve and continue supporting your growth.'],
]

function Process() {
  return (
    <section id="process" className="section process dark"><div className="container">
      <SectionTitle eyebrow="How it works" title={<>A Structured Approach to <em>Workforce Management</em></>} copy="A focused process keeps every engagement transparent, efficient and aligned." />
      <div className="steps five">{steps.map(([n, t, d]) => (
        <article className="step reveal" key={n}><b>{n}</b><div><h3>{t}</h3><p>{d}</p></div></article>
      ))}</div>
    </div></section>
  )
}

function Compliance() {
  const items = ['Statutory Compliance Management', 'Labor Law Adherence', 'Employee Benefits Administration', 'Risk Reduction and Documentation']
  return (
    <section id="compliance" className="section"><div className="container compliance-grid">
      <div className="reveal">
        <span className="eyebrow">Built on confidence</span>
        <h2>Reliable Compliance for a <em>Secure Workforce</em></h2>
        <p>Managing workforce compliance is essential for protecting both organizations and employees. SKAPS HR Solutions ensures that all workforce operations follow the latest labor regulations and statutory requirements. Our dedicated compliance expertise helps businesses operate confidently while reducing legal risks and administrative complexity.</p>
        <a className="btn" href="#contact">Talk to a specialist →</a>
      </div>
      <div className="compliance-panel reveal">
        {items.map(i => <div className="status" key={i}><span>{i}</span><Icon name="check" /></div>)}
      </div>
    </div></section>
  )
}

function Leadership() {
  return (
    <section className="section soft"><div className="container">
      <SectionTitle title={<>The Leadership Driving <em>SKAPS</em> Forward</>} />
      <div className="leader reveal">
        <div className="leader-photo"><img src={leaderPhoto} alt="Srinivasarao Khasimsetty, Vice President Business Operations & Co-founder" loading="lazy" /></div>
        <div className="leader-body">
          <p>Srinivas is Vice President, Business Operations, with an accomplished track record in leading large-scale talent acquisition and workforce operations for global enterprises. He has held key leadership positions with industry-leading staffing organizations and consistently delivered high-impact workforce solutions across diverse industries and geographies.</p>
          <p>His career reflects deep expertise in designing scalable recruitment strategies, driving operational excellence, and building high-performing teams while supporting complex hiring initiatives for global technology and Fortune 500 organizations.</p>
          <strong>Srinivasarao Khasimsetty</strong>
          <small>Vice President, Business Operations &amp; Co-founder</small>
        </div>
      </div>
    </div></section>
  )
}

function GlobalMap() {
  return (
    <section className="section global"><div className="container global-grid">
      <div className="reveal">
        <span className="eyebrow">Global reach</span>
        <h2>Supporting Organizations Across <em>Global Markets</em></h2>
        <p>Local attention backed by the perspective needed to support modern and distributed teams.</p>
        <div className="region-tags"><span>United States</span><span>India (Headquarters)</span><span>Australia</span></div>
      </div>
      <div className="map reveal" aria-label="Stylized world map"><Icon name="globe" /><i className="pin p1" /><i className="pin p2" /><i className="pin p3" /></div>
    </div></section>
  )
}

const testimonials = [
  ['SKAPS helped us scale our team quickly through their contract staffing services. The hiring process was efficient, the candidates were highly qualified, and their HR management ensured everything remained compliant and well organized.', 'Anita Mehta', 'Head of Human Resources, Manufacturing Organization'],
  ['Outsourcing our payroll management to SKAPS was one of the best decisions for our organization. Their accuracy, professionalism, and understanding of compliance requirements have given us complete confidence in our workforce operations.', 'Michael Fernandes', 'Chief Financial Officer, Retail and Distribution Company'],
  ['Working with SKAPS has significantly improved the way we manage our workforce. Their team handled our payroll, operations, and compliance requirements seamlessly, allowing us to focus on expanding our business without worrying about administrative complexities.', 'Rohit Sharma', 'Director of Operations, Technology Services Company'],
]

function Testimonials() {
  return (
    <section id="clients" className="section"><div className="container">
      <SectionTitle eyebrow="Testimonials" title={<>What <em>Our Clients</em> Say</>} />
      <div className="quotes">{testimonials.map(([q, n, r]) => (
        <figure className="quote reveal" key={n}>
          <blockquote>{q}</blockquote>
          <figcaption><strong>{n}</strong><span>{r}</span></figcaption>
        </figure>
      ))}</div>
    </div></section>
  )
}

const faqs = [
  ['What services does SKAPS HR Solutions provide?', 'SKAPS provides end-to-end workforce solutions including payroll outsourcing, contract and temporary staffing, HR compliance, employee administration and dedicated managed teams.'],
  ['How does contract staffing work?', 'We source, screen and onboard qualified professionals for defined timelines, handling payroll, documentation and compliance so you can scale teams up or down as your needs change.'],
  ['How can payroll outsourcing benefit my organization?', 'Outsourcing payroll ensures accurate, timely and fully compliant processing, reducing administrative overhead and the risk of errors or statutory penalties.'],
  ['How quickly can SKAPS provide staffing support?', 'Timelines depend on the role and volume, but our established talent networks let us respond quickly and shortlist role-ready candidates within days for most requirements.'],
  ['How does SKAPS ensure compliance with labor regulations?', 'Our dedicated compliance team stays current with labor laws and statutory requirements, maintaining accurate documentation and standardized processes across every engagement.'],
  ['Can SKAPS support businesses operating in multiple locations?', 'Yes. We support distributed and multi-location workforces, coordinating payroll, compliance and operations consistently across regions.'],
]

function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <section className="section soft"><div className="container">
      <SectionTitle eyebrow="FAQ" title={<>Common Questions About <em>Our HR Services</em></>} />
      <div className="faq reveal">{faqs.map(([q, a], i) => (
        <div className={open === i ? 'faq-item open' : 'faq-item'} key={q}>
          <button className="faq-q" aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}>
            <span>{q}</span><Icon name={open === i ? 'minus' : 'plus'} />
          </button>
          <div className="faq-a"><p>{a}</p></div>
        </div>
      ))}</div>
    </div></section>
  )
}

function CTA() {
  return (
    <section className="cta dark"><div className="container cta-inner reveal">
      <h2>Build a <em>Stronger Workforce</em> with Expert HR Support</h2>
      <div className="actions">
        <a className="btn light" href="#contact">Schedule Consultation</a>
        <a className="btn ghost" href="#contact">Contact Our Team</a>
      </div>
    </div></section>
  )
}

const submitLead = async () => { await new Promise(r => setTimeout(r, 650)); return { ok: true } }

function Contact() {
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)
  const [busy, setBusy] = useState(false)
  const submit = async e => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.currentTarget))
    const next = {}
    if (!data.name.trim()) next.name = 'Please enter your name.'
    if (!data.company.trim()) next.company = 'Please enter your company.'
    if (!/^\S+@\S+\.\S+$/.test(data.email)) next.email = 'Enter a valid email address.'
    if (!/^[+\d][\d\s()-]{7,}$/.test(data.phone)) next.phone = 'Enter a valid phone number.'
    if (data.message.trim().length < 10) next.message = 'Tell us a little more about your requirements.'
    setErrors(next)
    if (Object.keys(next).length) return
    setBusy(true); await submitLead(data); setBusy(false); setSent(true); e.currentTarget.reset()
  }
  return (
    <section id="contact" className="section contact"><div className="container contact-grid">
      <div className="reveal">
        <span className="eyebrow">Let’s work together</span>
        <h2>Let’s Start the <em>Conversation</em></h2>
        <p>Whether you are looking to streamline payroll management, expand your workforce, or strengthen compliance operations, our team is ready to support your business with reliable workforce solutions.</p>
        <div className="details">
          <a href="tel:+918500004521"><Icon name="phone" /><span><small>Phone</small>+91 8500004521</span></a>
          <a href="mailto:info@skaps.co.in"><Icon name="mail" /><span><small>Email</small>info@skaps.co.in</span></a>
          <div><Icon name="pin" /><span><small>Office location</small>First Floor, ARD Magnum, Door No: 12-7-134/MH/2 in Sy. No: 1011/10(P), Anjaneya Nagar, Green Hills Road, Phase 4, Near Moosa Peta, Hyderabad – 500018</span></div>
        </div>
      </div>
      <form className="form reveal" onSubmit={submit} noValidate>
        {sent && <div className="success" role="status"><Icon name="check" /><div><strong>Demo request captured</strong><span>This review form does not send or store data yet.</span></div></div>}
        <div className="form-row">
          <Field name="name" label="Full name" placeholder="Your name" error={errors.name} />
          <Field name="company" label="Company name" placeholder="Your organization name" error={errors.company} />
        </div>
        <div className="form-row">
          <Field name="email" type="email" label="Email address" placeholder="your@email.com" error={errors.email} />
          <Field name="phone" type="tel" label="Phone number" placeholder="Best number to reach you" error={errors.phone} />
        </div>
        <label>How can we help you?<textarea name="message" placeholder="Tell us about your requirements" aria-invalid={!!errors.message} />{errors.message && <small className="error">{errors.message}</small>}</label>
        <button className="btn submit" disabled={busy}>{busy ? 'Capturing request\u2026' : 'Send Message'} <span>→</span></button>
        <p className="form-note">Demo form — details are validated locally and are not transmitted.</p>
      </form>
    </div></section>
  )
}

function Field({ name, label, error, ...props }) {
  return <label>{label}<input name={name} {...props} aria-invalid={!!error} />{error && <small className="error">{error}</small>}</label>
}

const socials = [['LinkedIn', 'linkedin'], ['Facebook', 'facebook'], ['Instagram', 'instagram'], ['Twitter', 'twitter']]

function Footer() {
  return (
    <footer><div className="container">
      <a className="brand footer-brand" href="#home"><span className="brand-mark">S</span><span>SKAPS <b>HR SOLUTIONS</b></span></a>
      <p>SKAPS HR Solutions is a trusted workforce management and recruitment solutions provider helping organizations streamline hiring, payroll, compliance, and employee management across multiple industries.</p>
      <div className="socials">{socials.map(([l, i]) => <a key={i} href="#home" aria-label={l}><Icon name={i} />{l}</a>)}</div>
      <div className="copyright">© 2026 SKAPS HR Solutions. All rights reserved.</div>
    </div></footer>
  )
}

function App() {
  useEffect(() => {
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }), { threshold: .12 })
    document.querySelectorAll('.reveal').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])
  return (
    <><Header /><main>
      <Hero />
      <Trust />
      <About />
      <Stats />
      <PainAdvantage />
      <Services />
      <Industries />
      <Flexible />
      <Needs />
      <Process />
      <Compliance />
      <Leadership />
      <GlobalMap />
      <Testimonials />
      <FAQ />
      <CTA />
      <Contact />
    </main><Footer /></>
  )
}

createRoot(document.getElementById('root')).render(<App />)
