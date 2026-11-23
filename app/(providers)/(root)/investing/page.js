"use client";

import Link from "next/link";

const investmentCategories = [
  { title: "Private companies", description: "Explore opportunities in privately held businesses.", href: "/investing/private-companies", icon: "01" },
  { title: "Public companies", description: "Learn about opportunities connected to listed companies.", href: "/investing/public-companies", icon: "02" },
  { title: "Currencies", description: "Explore currency markets and related opportunities.", href: "/investing/currencies", icon: "03" },
  { title: "Commodities", description: "Discover investment opportunities in commodities.", href: "/investing/commodities", icon: "04" },
  { title: "Cryptocurrencies", description: "Learn about digital assets and cryptocurrency markets.", href: "/investing/cryptocurrencies", icon: "05" },
];

const horizons = [
  { title: "Short term", description: "Explore opportunities with shorter investment horizons.", href: "/investing/terms/short-term" },
  { title: "Medium term", description: "Consider opportunities over a medium-term horizon.", href: "/investing/terms/medium-term" },
  { title: "Long term", description: "Explore opportunities designed for a longer time horizon.", href: "/investing/terms/long-term" },
];

export default function Investing() {
  return (
    <main className="investingPage">
      <section className="investingHero" aria-labelledby="investing-title">
        <p className="investingEyebrow">Explore with intention</p>
        <h1 id="investing-title">Invest for now and the future.</h1>
        <p>Discover different investment categories and explore them at a pace that feels right for you.</p>
        <Link className="investingButton investingButton--light" href="/profiles/personal">Explore your personal profile <span aria-hidden="true">↗</span></Link>
      </section>

      <section className="investingContent" aria-labelledby="categories-title">
        <div className="investingIntro"><p className="investingEyebrow">Investment categories</p><h2 id="categories-title">Explore your options</h2><p>Start by browsing a category. Each area has its own considerations, so take time to understand the details before making decisions.</p></div>
        <div className="investingGrid">
          {investmentCategories.map((category) => (
            <Link className="investingCard" href={category.href} key={category.title}>
              <span>{category.icon}</span><h3>{category.title}</h3><p>{category.description}</p><strong>Explore category <span aria-hidden="true">↗</span></strong>
            </Link>
          ))}
        </div>
      </section>

      <section className="horizonSection" aria-labelledby="horizon-title">
        <div className="investingContent horizonContent">
          <div className="investingIntro"><p className="investingEyebrow">Plan around time</p><h2 id="horizon-title">Browse by investment horizon</h2><p>Explore opportunities by the time horizon you have in mind.</p></div>
          <div className="horizonGrid">
            {horizons.map((horizon) => <Link className="horizonCard" href={horizon.href} key={horizon.title}><h3>{horizon.title}</h3><p>{horizon.description}</p><span>Browse options <b aria-hidden="true">→</b></span></Link>)}
          </div>
          <p className="investingDisclaimer">Investment opportunities involve risk. Review the details of each opportunity and consider seeking independent advice before making a decision.</p>
        </div>
      </section>

      <style jsx>{`
        .investingPage { --ink:#1b1d18; --muted:#65685f; --cream:#f6f5e6; --paper:#fbfaf6; background:var(--paper); color:var(--ink); }
        .investingPage * { box-sizing:border-box; }
        .investingHero { background:linear-gradient(120deg,#202820,#343c31); color:white; padding:clamp(4rem,9vw,7.5rem) max(1.25rem,calc((100vw - 1120px)/2)); }
        .investingHero h1 { color:white; font-size:clamp(2.8rem,7vw,5.5rem); letter-spacing:-.05em; line-height:1.02; margin:0; max-width:800px; }
        .investingHero > p:not(.investingEyebrow) { color:#f0f0eb; font-size:1.08rem; line-height:1.75; margin:1.25rem 0 1.75rem; max-width:620px; }
        .investingEyebrow { color:#77796f; font-size:.75rem; font-weight:700; letter-spacing:.15em; margin:0 0 1rem; text-transform:uppercase; }
        .investingHero .investingEyebrow { color:#e4e6d3; }
        .investingButton { align-items:center; border-radius:9px; display:inline-flex; font-size:.92rem; font-weight:700; gap:.5rem; min-height:50px; padding:.75rem 1.2rem; text-decoration:none; }
        .investingButton--light { background:var(--cream); color:var(--ink); }
        .investingContent { margin:auto; max-width:1200px; padding:clamp(3.5rem,7vw,6rem) 1.25rem; }
        .investingIntro { max-width:660px; }
        .investingIntro h2 { font-size:clamp(2rem,4vw,3.2rem); letter-spacing:-.04em; line-height:1.1; margin:0 0 .8rem; }
        .investingIntro > p:last-child { color:var(--muted); line-height:1.7; margin:0; }
        .investingGrid { display:grid; gap:1rem; grid-template-columns:repeat(3,minmax(0,1fr)); margin-top:2rem; }
        .investingCard { background:white; border:1px solid #e8e6dc; border-radius:14px; color:var(--ink); display:flex; flex-direction:column; min-height:230px; padding:1.5rem; text-decoration:none; transition:transform .18s ease, box-shadow .18s ease; }
        .investingCard:hover,.horizonCard:hover { box-shadow:0 12px 28px rgb(22 24 20 / 8%); transform:translateY(-2px); }
        .investingCard > span { color:#77796f; font-size:.78rem; font-weight:700; letter-spacing:.12em; }
        .investingCard h3 { font-size:1.2rem; margin:1.35rem 0 .5rem; }
        .investingCard p,.horizonCard p { color:var(--muted); line-height:1.65; margin:0 0 1.25rem; }
        .investingCard strong { font-size:.88rem; margin-top:auto; }
        .investingCard strong span { margin-left:.35rem; }
        .horizonSection { background:var(--cream); }
        .horizonContent { padding-top:clamp(3.5rem,7vw,5.5rem); }
        .horizonGrid { display:grid; gap:1rem; grid-template-columns:repeat(3,minmax(0,1fr)); margin-top:2rem; }
        .horizonCard { background:rgba(255,255,255,.75); border:1px solid #e5e2d0; border-radius:14px; color:var(--ink); min-height:190px; padding:1.5rem; text-decoration:none; transition:transform .18s ease, box-shadow .18s ease; }
        .horizonCard h3 { margin:0 0 .7rem; }
        .horizonCard span { font-size:.88rem; font-weight:700; }
        .horizonCard b { margin-left:.25rem; }
        .investingDisclaimer { color:var(--muted); font-size:.82rem; line-height:1.6; margin:2rem 0 0; max-width:760px; }
        @media(max-width:760px) { .investingGrid,.horizonGrid { grid-template-columns:1fr; } .investingCard { min-height:190px; } }
      `}</style>
    </main>
  );
}
