"use client";

import Link from "next/link";

const personalFeatures = [
  { title: "Invest with purpose", description: "Explore opportunities across different asset classes and investment horizons.", href: "/investing", action: "Explore investing" },
  { title: "Discover the marketplace", description: "Find products and services from businesses in the Systemism community.", href: "/marketplace", action: "Visit marketplace" },
  { title: "Learn new skills", description: "Browse learning opportunities to help you take your next step.", href: "/academy", action: "Explore the academy" },
];

export default function Personal() {
  return (
    <main className="publicPage personalPage">
      <section className="publicHero" aria-labelledby="personal-title">
        <p className="publicEyebrow">Your goals. Your next step.</p>
        <h1 id="personal-title">Make more possible for yourself.</h1>
        <p className="publicLead">Explore ways to learn, invest, and connect—all in one place, at your own pace.</p>
        <div className="publicActions">
          <Link className="publicButton publicButton--primary" href="/signup">Create an account <span aria-hidden="true">↗</span></Link>
          <Link className="publicButton publicButton--secondary" href="/investing">Explore opportunities</Link>
        </div>
      </section>

      <section className="publicContent" aria-labelledby="personal-options-title">
        <div className="publicSectionIntro">
          <p className="publicEyebrow">A place to begin</p>
          <h2 id="personal-options-title">Choose what matters to you</h2>
          <p>Start with the area that fits your goals. You can explore freely and decide what to do next.</p>
        </div>
        <div className="publicCardGrid">
          {personalFeatures.map((feature, index) => (
            <article className="publicCard" key={feature.title}>
              <span className="publicCard__number">0{index + 1}</span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <Link className="publicCard__link" href={feature.href}>{feature.action} <span aria-hidden="true">→</span></Link>
            </article>
          ))}
        </div>
      </section>

      <section className="publicCallout">
        <div><p className="publicEyebrow">Ready when you are</p><h2>Start with a free account</h2><p>Create your profile to access the personal experience.</p></div>
        <Link className="publicButton publicButton--light" href="/signup">Sign up <span aria-hidden="true">↗</span></Link>
      </section>

      <style jsx>{`
        .publicPage { --ink:#1b1d18; --muted:#65685f; --cream:#f6f5e6; --paper:#fbfaf6; background:var(--paper); color:var(--ink); }
        .publicPage * { box-sizing:border-box; }
        .publicHero { background:linear-gradient(120deg,#202820,#343c31); color:white; padding:clamp(4rem,9vw,7.5rem) max(1.25rem,calc((100vw - 1120px)/2)); }
        .publicHero h1 { color:white; font-size:clamp(2.8rem,7vw,5.5rem); letter-spacing:-.05em; line-height:1.02; margin:0; max-width:820px; }
        .publicEyebrow { color:#74776c; font-size:.75rem; font-weight:700; letter-spacing:.15em; margin:0 0 1rem; text-transform:uppercase; }
        .publicHero .publicEyebrow { color:#e4e6d3; }
        .publicLead { color:#f0f0eb; font-size:1.12rem; line-height:1.75; margin:1.3rem 0 2rem; max-width:620px; }
        .publicActions { display:flex; flex-wrap:wrap; gap:.75rem; }
        .publicButton { align-items:center; border:1px solid transparent; border-radius:9px; display:inline-flex; font-size:.92rem; font-weight:700; gap:.45rem; justify-content:center; min-height:50px; padding:.75rem 1.2rem; text-decoration:none; }
        .publicButton--primary { background:var(--cream); color:var(--ink); }
        .publicButton--secondary { border-color:#c9cbbd; color:white; }
        .publicButton--light { background:white; color:var(--ink); white-space:nowrap; }
        .publicContent { margin:auto; max-width:1200px; padding:clamp(3.5rem,7vw,6rem) 1.25rem; }
        .publicSectionIntro { max-width:650px; }
        .publicSectionIntro h2,.publicCallout h2 { font-size:clamp(2rem,4vw,3.2rem); letter-spacing:-.04em; line-height:1.1; margin:0 0 .8rem; }
        .publicSectionIntro > p:last-child,.publicCard p,.publicCallout p:not(.publicEyebrow) { color:var(--muted); line-height:1.7; margin:0; }
        .publicCardGrid { display:grid; gap:1rem; grid-template-columns:repeat(3,minmax(0,1fr)); margin-top:2rem; }
        .publicCard { background:white; border:1px solid #e8e6dc; border-radius:14px; display:flex; flex-direction:column; min-height:250px; padding:1.5rem; }
        .publicCard__number { color:#77796f; font-size:.8rem; font-weight:700; letter-spacing:.12em; }
        .publicCard h3 { font-size:1.25rem; margin:1.5rem 0 .6rem; }
        .publicCard p { margin-bottom:1.4rem; }
        .publicCard__link { color:var(--ink); font-size:.9rem; font-weight:700; margin-top:auto; text-decoration:none; }
        .publicCard__link span { margin-left:.3rem; }
        .publicCallout { align-items:center; background:var(--cream); display:flex; gap:2rem; justify-content:space-between; padding:clamp(2.5rem,6vw,4rem) max(1.25rem,calc((100vw - 1120px)/2)); }
        .publicCallout h2 { font-size:clamp(1.8rem,3.5vw,2.7rem); }
        .publicCallout p:not(.publicEyebrow) { margin-bottom:0; }
        @media(max-width:700px) { .publicCardGrid { grid-template-columns:1fr; } .publicCard { min-height:210px; } .publicCallout { align-items:flex-start; flex-direction:column; } .publicActions { align-items:stretch; flex-direction:column; max-width:420px; } }
      `}</style>
    </main>
  );
}
