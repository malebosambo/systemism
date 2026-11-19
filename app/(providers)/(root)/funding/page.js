"use client";

import Link from "next/link";

const fundingOptions = [
  { title: "Peer-to-peer", description: "Explore community-backed project funding options.", href: "/funding/peer-to-peer" },
  { title: "Loans", description: "Browse loan options for business needs and growth plans.", href: "/funding/loan" },
  { title: "Invoice financing", description: "Explore ways to unlock funds tied to unpaid invoices.", href: "/funding/invoice-financing" },
  { title: "Asset rental", description: "Consider rental pathways for assets your business needs.", href: "/funding/asset-rental" },
  { title: "Equity", description: "Learn about raising capital through business ownership shares.", href: "/funding/equity" },
  { title: "Credit", description: "Explore access to credit from participating vendors.", href: "/funding/credit" },
  { title: "Balance sheet", description: "Learn about funding options linked to business finances.", href: "/funding/balance-sheet" },
];

export default function Funding() {
  return (
    <main className="fundingPage">
      <section className="fundingHero" aria-labelledby="funding-title">
        <p className="fundingEyebrow">Funding for your journey</p>
        <h1 id="funding-title">Find a pathway that fits your business.</h1>
        <p>Explore funding approaches for different business needs and stages. Compare the options and learn what each one involves.</p>
        <Link className="fundingButton fundingButton--light" href="/profiles/Business">Explore business support <span aria-hidden="true">↗</span></Link>
      </section>

      <section className="fundingContent" aria-labelledby="funding-options-title">
        <div className="fundingIntro"><p className="fundingEyebrow">Explore funding options</p><h2 id="funding-options-title">Start with the need</h2><p>Each funding pathway works differently. Choose an option to learn more about its purpose and next steps.</p></div>
        <div className="fundingGrid">
          {fundingOptions.map((option, index) => (
            <Link className="fundingCard" href={option.href} key={option.title}>
              <span className="fundingCard__number">0{index + 1}</span>
              <h3>{option.title}</h3>
              <p>{option.description}</p>
              <strong>Learn about this option <span aria-hidden="true">↗</span></strong>
            </Link>
          ))}
        </div>
        <aside className="fundingNote"><strong>Take time to compare.</strong><p>Review the requirements, costs, risks, and repayment or ownership terms for any funding option before proceeding.</p></aside>
      </section>

      <style jsx>{`
        .fundingPage { --ink:#1b1d18; --muted:#65685f; --cream:#f6f5e6; --paper:#fbfaf6; background:var(--paper); color:var(--ink); }
        .fundingPage * { box-sizing:border-box; }
        .fundingHero { background:linear-gradient(120deg,#202820,#343c31); color:white; padding:clamp(4rem,9vw,7.5rem) max(1.25rem,calc((100vw - 1120px)/2)); }
        .fundingHero h1 { color:white; font-size:clamp(2.8rem,7vw,5.5rem); letter-spacing:-.05em; line-height:1.02; margin:0; max-width:850px; }
        .fundingHero > p:not(.fundingEyebrow) { color:#f0f0eb; font-size:1.08rem; line-height:1.75; margin:1.25rem 0 1.75rem; max-width:640px; }
        .fundingEyebrow { color:#77796f; font-size:.75rem; font-weight:700; letter-spacing:.15em; margin:0 0 1rem; text-transform:uppercase; }
        .fundingHero .fundingEyebrow { color:#e4e6d3; }
        .fundingButton { align-items:center; border-radius:9px; display:inline-flex; font-size:.92rem; font-weight:700; gap:.5rem; min-height:50px; padding:.75rem 1.2rem; text-decoration:none; }
        .fundingButton--light { background:var(--cream); color:var(--ink); }
        .fundingContent { margin:auto; max-width:1200px; padding:clamp(3.5rem,7vw,6rem) 1.25rem; }
        .fundingIntro { max-width:660px; }
        .fundingIntro h2 { font-size:clamp(2rem,4vw,3.2rem); letter-spacing:-.04em; line-height:1.1; margin:0 0 .8rem; }
        .fundingIntro > p:last-child { color:var(--muted); line-height:1.7; margin:0; }
        .fundingGrid { display:grid; gap:1rem; grid-template-columns:repeat(3,minmax(0,1fr)); margin-top:2rem; }
        .fundingCard { background:white; border:1px solid #e8e6dc; border-radius:14px; color:var(--ink); display:flex; flex-direction:column; min-height:225px; padding:1.5rem; text-decoration:none; transition:transform .18s ease,box-shadow .18s ease; }
        .fundingCard:hover { box-shadow:0 12px 28px rgb(22 24 20 / 8%); transform:translateY(-2px); }
        .fundingCard__number { color:#77796f; font-size:.78rem; font-weight:700; letter-spacing:.12em; }
        .fundingCard h3 { font-size:1.2rem; margin:1.3rem 0 .55rem; }
        .fundingCard p { color:var(--muted); line-height:1.65; margin:0 0 1.2rem; }
        .fundingCard strong { font-size:.88rem; margin-top:auto; }
        .fundingCard strong span { margin-left:.35rem; }
        .fundingNote { background:var(--cream); border-radius:12px; margin-top:2rem; padding:1.25rem 1.5rem; }
        .fundingNote p { color:var(--muted); line-height:1.65; margin:.35rem 0 0; }
        @media(max-width:760px) { .fundingGrid { grid-template-columns:1fr; } .fundingCard { min-height:185px; } }
      `}</style>
    </main>
  );
}
