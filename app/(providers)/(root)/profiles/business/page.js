import Link from "next/link";

const businessFeatures = [
  { title: "Find funding", description: "Compare funding pathways for different business needs and stages.", href: "/funding", action: "Explore funding" },
  { title: "Reach new customers", description: "Showcase your products and services in the marketplace and directory.", href: "/marketplace", action: "Visit marketplace" },
  { title: "Build and grow", description: "Explore learning and accelerator resources for your business journey.", href: "/accelerator", action: "Explore the accelerator" },
];

export default function Business() {
  return (
    <main className="publicPage businessPage">
      <section className="publicHero" aria-labelledby="business-title">
        <p className="publicEyebrow">For businesses at every stage</p>
        <h1 id="business-title">Build your business with the right support.</h1>
        <p className="publicLead">Discover practical pathways to funding, customers, skills, and new opportunities.</p>
        <div className="publicActions">
          <Link className="publicButton publicButton--primary" href="/signup">Create a business account <span aria-hidden="true">↗</span></Link>
          <Link className="publicButton publicButton--secondary" href="/funding">Explore funding</Link>
        </div>
      </section>

      <section className="publicContent" aria-labelledby="business-options-title">
        <div className="publicSectionIntro">
          <p className="publicEyebrow">Your business journey</p>
          <h2 id="business-options-title">Find the support you need</h2>
          <p>Whether you are starting out or ready to grow, choose a path that matches your next goal.</p>
        </div>
        <div className="publicCardGrid">
          {businessFeatures.map((feature, index) => (
            <article className="publicCard" key={feature.title}>
              <span className="publicCard__number">0{index + 1}</span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <Link className="publicCard__link" href={feature.href}>{feature.action} <span aria-hidden="true">→</span></Link>
            </article>
          ))}
        </div>
        <div className="vendorCallout">
          <div><p className="publicEyebrow">Sell through Systemism</p><h2>Bring your business to the marketplace</h2><p>Learn about vendor opportunities and the application process.</p></div>
          <Link className="publicButton publicButton--dark" href="/enterprise/add">Become a vendor <span aria-hidden="true">↗</span></Link>
        </div>
      </section>

      <style jsx>{`
        .publicPage { --ink:#1b1d18; --muted:#65685f; --cream:#f6f5e6; --paper:#fbfaf6; background:var(--paper); color:var(--ink); }
        .publicPage * { box-sizing:border-box; }
        .publicHero { background:linear-gradient(120deg,#202820,#343c31); color:white; padding:clamp(4rem,9vw,7.5rem) max(1.25rem,calc((100vw - 1120px)/2)); }
        .publicHero h1 { color:white; font-size:clamp(2.8rem,7vw,5.5rem); letter-spacing:-.05em; line-height:1.02; margin:0; max-width:850px; }
        .publicEyebrow { color:#74776c; font-size:.75rem; font-weight:700; letter-spacing:.15em; margin:0 0 1rem; text-transform:uppercase; }
        .publicHero .publicEyebrow { color:#e4e6d3; }
        .publicLead { color:#f0f0eb; font-size:1.12rem; line-height:1.75; margin:1.3rem 0 2rem; max-width:620px; }
        .publicActions { display:flex; flex-wrap:wrap; gap:.75rem; }
        .publicButton { align-items:center; border:1px solid transparent; border-radius:9px; display:inline-flex; font-size:.92rem; font-weight:700; gap:.45rem; justify-content:center; min-height:50px; padding:.75rem 1.2rem; text-decoration:none; }
        .publicButton--primary { background:var(--cream); color:var(--ink); }
        .publicButton--secondary { border-color:#c9cbbd; color:white; }
        .publicButton--dark { background:var(--ink); color:white; white-space:nowrap; }
        .publicContent { margin:auto; max-width:1200px; padding:clamp(3.5rem,7vw,6rem) 1.25rem; }
        .publicSectionIntro { max-width:650px; }
        .publicSectionIntro h2,.vendorCallout h2 { font-size:clamp(2rem,4vw,3.2rem); letter-spacing:-.04em; line-height:1.1; margin:0 0 .8rem; }
        .publicSectionIntro > p:last-child,.publicCard p,.vendorCallout p:not(.publicEyebrow) { color:var(--muted); line-height:1.7; margin:0; }
        .publicCardGrid { display:grid; gap:1rem; grid-template-columns:repeat(3,minmax(0,1fr)); margin-top:2rem; }
        .publicCard { background:white; border:1px solid #e8e6dc; border-radius:14px; display:flex; flex-direction:column; min-height:250px; padding:1.5rem; }
        .publicCard__number { color:#77796f; font-size:.8rem; font-weight:700; letter-spacing:.12em; }
        .publicCard h3 { font-size:1.25rem; margin:1.5rem 0 .6rem; }
        .publicCard p { margin-bottom:1.4rem; }
        .publicCard__link { color:var(--ink); font-size:.9rem; font-weight:700; margin-top:auto; text-decoration:none; }
        .publicCard__link span { margin-left:.3rem; }
        .vendorCallout { align-items:center; background:var(--cream); border-radius:14px; display:flex; gap:2rem; justify-content:space-between; margin-top:2rem; padding:clamp(1.5rem,4vw,2.5rem); }
        .vendorCallout h2 { font-size:clamp(1.7rem,3vw,2.5rem); }
        .vendorCallout p:not(.publicEyebrow) { margin-bottom:0; }
        @media(max-width:700px) { .publicCardGrid { grid-template-columns:1fr; } .publicCard { min-height:210px; } .publicActions { align-items:stretch; flex-direction:column; max-width:420px; } .vendorCallout { align-items:flex-start; flex-direction:column; } }
      `}</style>
    </main>
  );
}
