"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const investmentOptions = [
  { name: "Short term", description: "Medium to high risk, with the potential for low to high returns.", href: "/investing/terms/short-term", number: "01" },
  { name: "Medium term", description: "Low to medium risk, with the potential for low to moderate returns.", href: "/investing/terms/medium-term", number: "02" },
  { name: "Long term", description: "Explore longer horizons with a range of risk and return profiles.", href: "/investing/terms/long-term", number: "03" },
];

const fundingOptions = [
  { title: "Peer-to-peer", description: "Raise a project budget with flexible requirements.", href: "/funding/peer-to-peer" },
  { title: "Equity", description: "Explore raising capital by offering a share in your business.", href: "/funding/equity" },
  { title: "Invoice financing", description: "Access funds against invoices owed to your business.", href: "/funding/invoice-financing" },
  { title: "Asset rental", description: "Put available business assets to work through rental contracts.", href: "/funding/asset-rental" },
  { title: "Loans and credit", description: "Browse financing options for different business needs.", href: "/funding/loan" },
  { title: "Balance sheet", description: "Explore ways to strengthen capital through your business finances.", href: "/funding/balance-sheet" },
];

const featuredProducts = [
  { name: "Handwoven home décor", category: "Home & living", icon: "✳", color: "sand" },
  { name: "Locally made accessories", category: "Fashion & accessories", icon: "◈", color: "rose" },
  { name: "Small business services", category: "Professional services", icon: "⌘", color: "sage" },
  { name: "Artisan-crafted gifts", category: "Arts & crafts", icon: "✿", color: "lilac" },
];

const acceleratorStages = [
  "Ideation & discovery",
  "Opportunity evaluation & planning",
  "Startup & launch",
  "Growth & traction",
  "Maturity & expansion",
  "Exit, renewal & succession",
];

export default function Home() {
  const productsTrack = useRef(null);

  const scrollProducts = (direction) => {
    if (!productsTrack.current) return;
    productsTrack.current.scrollBy({
      left: direction * productsTrack.current.clientWidth * 0.8,
      behavior: "smooth",
    });
  };

  return (
    <main className="homePage">
      <section className="homeHero" aria-labelledby="home-title">
        <div className="homeHero__content">
          <p className="homeEyebrow homeEyebrow--light">A platform for participation</p>
          <h1 id="home-title">Personal and business solutions</h1>
          <p className="homeHero__summary">A platform built for economic participation.</p>
          <div className="homeHero__actions">
            <Link className="homeButton homeButton--light" href="/profiles/personal">Explore personal</Link>
            <Link className="homeButton homeButton--outline" href="/profiles/Business">Explore business</Link>
          </div>
        </div>
        <a className="homeHero__scroll" href="#investing">Discover what you can do <span aria-hidden="true">↓</span></a>
      </section>

      <section className="homeSection homeInvesting" id="investing" aria-labelledby="investing-title">
        <div className="homeSection__intro">
          <p className="homeEyebrow">Build for your future</p>
          <h2 id="investing-title">Invest for now and the future</h2>
          <p>Explore investment opportunities across short-, medium- and long-term horizons.</p>
        </div>
        <div className="homeInvestmentGrid">
          {investmentOptions.map((option) => (
            <article className="homeInvestmentCard" key={option.name}>
              <span className="homeCardNumber">{option.number}</span>
              <h3>{option.name}</h3>
              <p>{option.description}</p>
              <Link className="homeTextLink" href={option.href}>Browse options <span aria-hidden="true">↗</span></Link>
            </article>
          ))}
        </div>
      </section>

      <section className="homeFunding" id="funding" aria-labelledby="funding-title">
        <div className="homeFunding__inner">
          <div className="homeSection__intro homeSection__intro--light">
            <p className="homeEyebrow homeEyebrow--light">Support at every stage</p>
            <h2 id="funding-title">Access funding for your business</h2>
            <p>Find funding pathways designed around different needs and stages of your business journey.</p>
            <Link className="homeButton homeButton--light" href="/funding">Explore funding</Link>
          </div>
          <div className="homeFundingGrid">
            {fundingOptions.map((option) => (
              <Link className="homeFundingCard" href={option.href} key={option.title}>
                <span className="homeFundingCard__arrow" aria-hidden="true">↗</span>
                <h3>{option.title}</h3>
                <p>{option.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="homeSection homeMarketplace" id="marketplace" aria-labelledby="marketplace-title">
        <div className="homeMarketplace__copy">
          <p className="homeEyebrow">Discover Systemism</p>
          <h2 id="marketplace-title">A marketplace built for opportunity</h2>
          <p>Discover products and services, connect with vendors, and find new ways to grow your business.</p>
          <ul className="homeBenefits" aria-label="Marketplace benefits">
            <li>Find services and products in one place</li>
            <li>Connect with businesses and customers</li>
            <li>Make more informed decisions as you grow</li>
          </ul>
          <Link className="homeButton homeButton--dark" href="/marketplace">Explore the marketplace</Link>
        </div>
        <div className="homeMarketplace__visual">
          <Image
            src="/root/marketplace-console.png"
            alt="Preview of the Systemism marketplace"
            width={900}
            height={620}
            sizes="(max-width: 760px) 100vw, 50vw"
          />
        </div>

        <div className="homeProductCarousel" aria-labelledby="products-title">
          <div className="homeProductCarousel__heading">
            <div>
              <p className="homeEyebrow">A glimpse of what’s possible</p>
              <h3 id="products-title">Explore the marketplace</h3>
              <p className="homeProductCarousel__note">Sample categories shown as a design preview.</p>
            </div>
            <div className="homeCarouselControls" aria-label="Marketplace product carousel controls">
              <button type="button" onClick={() => scrollProducts(-1)} aria-label="Scroll products left">←</button>
              <button type="button" onClick={() => scrollProducts(1)} aria-label="Scroll products right">→</button>
            </div>
          </div>
          <div className="homeProductTrack" ref={productsTrack} role="region" aria-label="Featured marketplace products" tabIndex={0}>
            {featuredProducts.map((product) => (
              <article className="homeProductCard" key={product.name}>
                <div className={`homeProductCard__art homeProductCard__art--${product.color}`} aria-hidden="true">
                  <span>{product.icon}</span>
                  <small>Systemism marketplace</small>
                </div>
                <div className="homeProductCard__details">
                  <p>{product.category}</p>
                  <h4>{product.name}</h4>
                  <Link href="/marketplace" aria-label={`Explore ${product.category} in the marketplace`}>Explore category <span aria-hidden="true">↗</span></Link>
                </div>
              </article>
            ))}
          </div>
          <Link className="homeProductCarousel__all" href="/marketplace">View the marketplace <span aria-hidden="true">↗</span></Link>
        </div>
      </section>

      <section className="homeAcademy" aria-labelledby="academy-title">
        <div className="homeAcademy__content">
          <p className="homeEyebrow homeEyebrow--light">Learn, build, grow</p>
          <h2 id="academy-title">Turn your ambition into action</h2>
          <p>Build practical skills and explore learning opportunities through Systemism Academy.</p>
          <Link className="homeButton homeButton--light" href="/academy">Explore the academy</Link>
        </div>
        <div className="homeAcademy__index" aria-hidden="true">01 <span>Learn</span><br />02 <span>Apply</span><br />03 <span>Grow</span></div>
      </section>

      <section className="homeSection homeDirectory" id="directory" aria-labelledby="directory-title">
        <div className="homeDirectory__copy">
          <p className="homeEyebrow">Find your next connection</p>
          <h2 id="directory-title">Find a service provider near you</h2>
          <p>Explore the directory to discover businesses and services that can support your next step.</p>
          <Link className="homeButton homeButton--dark" href="/directory">Browse the directory</Link>
        </div>
        <div className="homeDirectory__map" aria-label="Directory map preview">
          <div className="homeMapPin" aria-hidden="true">●</div>
          <span>Local businesses. New possibilities.</span>
        </div>
      </section>

      <section className="homeAccelerator" aria-labelledby="accelerator-title">
        <div className="homeSection__intro homeSection__intro--light">
          <p className="homeEyebrow homeEyebrow--light">Your journey, supported</p>
          <h2 id="accelerator-title">Grow your business at every stage</h2>
          <p>Move from your first idea to your next opportunity with support for the journey ahead.</p>
          <Link className="homeButton homeButton--light" href="/accelerator">Discover the accelerator</Link>
        </div>
        <ol className="homeStageList">
          {acceleratorStages.map((stage, index) => (
            <li key={stage}><span>0{index + 1}</span>{stage}</li>
          ))}
        </ol>
      </section>

      <section className="homePartners" aria-labelledby="partners-title">
        <p className="homeEyebrow">Building together</p>
        <h2 id="partners-title">Our partners</h2>
        <div className="homePartners__logo">
          <Image src="/root/partners/XM.png" alt="XM partner logo" width={150} height={150} />
        </div>
      </section>

      <style jsx>{`
        .homePage { --home-ink: #171815; --home-muted: #66675f; --home-cream: #f7f6df; --home-paper: #fbfaf6; --home-line: #e4e2d7; --home-dark: #171b18; background: var(--home-paper); color: var(--home-ink); overflow: hidden; }
        .homePage *, .homePage *::before, .homePage *::after { box-sizing: border-box; }
        .homePage a { text-decoration: none; }
        .homeHero { align-items: center; background-image: linear-gradient(90deg, rgb(9 17 16 / 78%) 0%, rgb(9 17 16 / 52%) 48%, rgb(9 17 16 / 14%) 100%), url('/root/CraftsSMME.jpg'); background-position: center; background-size: cover; color: white; display: flex; min-height: min(720px, calc(100svh - 110px)); padding: clamp(4rem, 9vw, 8rem) max(6vw, calc((100vw - 1200px) / 2)); position: relative; }
        .homeHero__content { max-width: 700px; padding-right: 1.5rem; }
        .homeEyebrow { color: #77786e; font-size: .76rem; font-weight: 700; letter-spacing: .16em; margin: 0 0 1rem; text-transform: uppercase; }
        .homeEyebrow--light { color: #e4e5cf; }
        .homeHero h1 { color: white; font-size: clamp(3rem, 7.5vw, 6.5rem); letter-spacing: -.055em; line-height: .99; margin: 0; max-width: 700px; }
        .homeHero__summary { color: white; font-size: clamp(1.05rem, 2vw, 1.35rem); line-height: 1.6; margin: 1.5rem 0 2rem; max-width: 520px; }
        .homeHero__actions { display: flex; flex-wrap: wrap; gap: .75rem; max-width: 560px; }
        .homeButton { align-items: center; border: 1px solid transparent; border-radius: 12px; display: inline-flex; font-size: .95rem; font-weight: 700; justify-content: center; min-height: 52px; padding: .8rem 1.35rem; transition: transform .18s ease, background .18s ease; }
        .homeButton:hover { transform: translateY(-2px); }
        .homeButton--light { background: var(--home-cream); color: var(--home-ink); }
        .homeButton--outline { border-color: rgb(255 255 255 / 75%); color: white; }
        .homeButton--dark { background: var(--home-ink); color: white; }
        .homeHero__scroll { bottom: 2rem; color: white; font-size: .85rem; left: max(6vw, calc((100vw - 1200px) / 2)); position: absolute; }
        .homeHero__scroll span { margin-left: .5rem; }
        .homeSection { margin: 0 auto; max-width: 1320px; padding: clamp(4rem, 8vw, 7rem) clamp(1.25rem, 6vw, 5rem); }
        .homeSection__intro { max-width: 660px; }
        .homeSection h2, .homeAcademy h2, .homeAccelerator h2, .homePartners h2 { font-size: clamp(2.2rem, 4.5vw, 4rem); letter-spacing: -.045em; line-height: 1.08; margin: 0 0 1rem; }
        .homeSection__intro > p:last-child, .homeMarketplace__copy > p:not(.homeEyebrow), .homeDirectory__copy > p:not(.homeEyebrow), .homeAcademy__content > p:not(.homeEyebrow), .homeAccelerator .homeSection__intro > p:not(.homeEyebrow) { color: var(--home-muted); font-size: 1.08rem; line-height: 1.7; margin: 0; }
        .homeInvestmentGrid { display: grid; gap: 1rem; grid-template-columns: repeat(3, minmax(0, 1fr)); margin-top: 2.5rem; }
        .homeInvestmentCard { background: var(--home-cream); border: 1px solid #e8e6d5; border-radius: 16px; display: flex; flex-direction: column; min-height: 280px; padding: clamp(1.5rem, 3vw, 2.25rem); box-shadow: 0 10px 26px rgb(14 15 12 / 4%); transition: transform .18s ease, box-shadow .18s ease; }
        .homeInvestmentCard:hover { transform: translateY(-3px); box-shadow: 0 18px 32px rgb(14 15 12 / 8%); }
        .homeCardNumber { color: #77786e; font-size: .78rem; font-weight: 700; letter-spacing: .1em; }
        .homeInvestmentCard h3 { font-size: 1.4rem; margin: 2rem 0 .7rem; }
        .homeInvestmentCard p, .homeFundingCard p { color: var(--home-muted); line-height: 1.65; margin: 0 0 1.6rem; }
        .homeTextLink { color: var(--home-ink); font-size: .95rem; font-weight: 700; margin-top: auto; }
        .homeTextLink span { margin-left: .4rem; }
        .homeFunding { background: linear-gradient(105deg, rgb(13 17 15 / 92%), rgb(13 17 15 / 78%)), url('/root/funding.jpg') center / cover; color: white; }
        .homeFunding__inner { display: grid; gap: 3rem; grid-template-columns: .85fr 1.15fr; margin: 0 auto; max-width: 1320px; padding: clamp(4rem, 8vw, 7rem) clamp(1.25rem, 6vw, 5rem); }
        .homeSection__intro--light h2, .homeSection__intro--light > p:not(.homeEyebrow) { color: white; }
        .homeSection__intro--light .homeButton { margin-top: 1.75rem; }
        .homeFundingGrid { display: grid; gap: .75rem; grid-template-columns: repeat(2, minmax(0, 1fr)); }
        .homeFundingCard { background: rgb(255 255 255 / 7%); border: 1px solid rgb(255 255 255 / 20%); border-radius: 12px; color: white; min-height: 160px; padding: 1.25rem; transition: background .18s ease, transform .18s ease; }
        .homeFundingCard:hover { background: rgb(255 255 255 / 13%); transform: translateY(-2px); }
        .homeFundingCard h3 { color: white; font-size: 1.1rem; margin: 1rem 0 .45rem; }
        .homeFundingCard p { color: #dedfd6; font-size: .9rem; margin: 0; }
        .homeFundingCard__arrow { color: #e5e5c7; float: right; }
        .homeMarketplace { align-items: center; display: grid; gap: clamp(2rem, 6vw, 5rem); grid-template-columns: 1fr 1fr; }
        .homeMarketplace__copy { max-width: 560px; }
        .homeBenefits { display: grid; gap: .85rem; list-style: none; margin: 1.75rem 0; padding: 0; }
        .homeBenefits li { line-height: 1.5; padding-left: 1.75rem; position: relative; }
        .homeBenefits li::before { color: #5f6b42; content: '✓'; font-weight: 700; left: 0; position: absolute; }
        .homeMarketplace__visual { background: var(--home-cream); border-radius: 18px; padding: clamp(.75rem, 2vw, 1.5rem); box-shadow: 0 20px 40px rgb(17 21 18 / 6%); }
        .homeMarketplace__visual :global(img) { border-radius: 10px; display: block; height: auto; width: 100%; }
        .homeProductCarousel { grid-column: 1 / -1; margin-top: 1.5rem; min-width: 0; }
        .homeProductCarousel__heading { align-items: end; display: flex; justify-content: space-between; gap: 1rem; margin-bottom: 1.25rem; }
        .homeProductCarousel__heading .homeEyebrow { margin-bottom: .6rem; }
        .homeProductCarousel__heading h3 { font-size: clamp(1.5rem, 3vw, 2.1rem); letter-spacing: -.035em; margin: 0; }
        .homeProductCarousel__note { color: var(--home-muted); font-size: .9rem; margin: .5rem 0 0; }
        .homeCarouselControls { display: flex; gap: .5rem; flex-shrink: 0; }
        .homeCarouselControls button { align-items: center; background: white; border: 1px solid var(--home-line); border-radius: 50%; color: var(--home-ink); cursor: pointer; display: inline-flex; font-size: 1.2rem; height: 44px; justify-content: center; width: 44px; }
        .homeCarouselControls button:hover { background: var(--home-cream); }
        .homeCarouselControls button:focus-visible, .homeProductTrack:focus-visible, .homeProductCard a:focus-visible { outline: 3px solid #71805b; outline-offset: 3px; }
        .homeProductTrack { display: grid; gap: 1rem; grid-auto-columns: minmax(220px, 1fr); grid-auto-flow: column; overflow-x: auto; overscroll-behavior-inline: contain; padding: .2rem .1rem 1rem; scroll-behavior: smooth; scroll-snap-type: x mandatory; scrollbar-color: #b7b7a4 transparent; scrollbar-width: thin; }
        .homeProductCard { background: white; border: 1px solid var(--home-line); border-radius: 14px; min-width: 0; overflow: hidden; scroll-snap-align: start; }
        .homeProductCard__art { align-items: center; display: flex; height: 190px; justify-content: center; overflow: hidden; position: relative; }
        .homeProductCard__art::before, .homeProductCard__art::after { border: 1px solid rgb(30 34 27 / 9%); border-radius: 50%; content: ''; height: 150px; position: absolute; transform: rotate(-24deg); width: 230px; }
        .homeProductCard__art::after { height: 110px; transform: rotate(28deg); width: 180px; }
        .homeProductCard__art--sand { background: linear-gradient(145deg, #eee5d2, #c8b99a); }
        .homeProductCard__art--rose { background: linear-gradient(145deg, #f1e1dc, #cba69b); }
        .homeProductCard__art--sage { background: linear-gradient(145deg, #e2e8dc, #aebca4); }
        .homeProductCard__art--lilac { background: linear-gradient(145deg, #e9e3ed, #b9aabb); }
        .homeProductCard__art > span { color: rgb(36 41 32 / 72%); font-size: 4.5rem; position: relative; z-index: 1; }
        .homeProductCard__art small { bottom: .8rem; color: rgb(23 24 21 / 65%); font-size: .65rem; letter-spacing: .12em; position: absolute; text-transform: uppercase; }
        .homeProductCard__details { padding: 1rem 1.1rem 1.15rem; }
        .homeProductCard__details > p { color: var(--home-muted); font-size: .78rem; margin: 0 0 .35rem; }
        .homeProductCard__details h4 { font-size: 1rem; margin: 0 0 .9rem; }
        .homeProductCard__details a, .homeProductCarousel__all { color: var(--home-ink); font-size: .86rem; font-weight: 700; }
        .homeProductCard__details a span, .homeProductCarousel__all span { margin-left: .3rem; }
        .homeProductCarousel__all { display: inline-block; margin-top: .65rem; }
        .homeAcademy { align-items: center; background: #222822; color: white; display: flex; justify-content: space-between; gap: 2rem; padding: clamp(4rem, 8vw, 7rem) max(6vw, calc((100vw - 1200px) / 2)); }
        .homeAcademy__content { max-width: 650px; }
        .homeAcademy h2, .homeAccelerator h2 { color: white; }
        .homeAcademy__content > p:not(.homeEyebrow) { color: #d7d9d0; }
        .homeAcademy__content .homeButton { margin-top: 1.75rem; }
        .homeAcademy__index { color: #f1f0dc; font-size: 1.4rem; line-height: 2.5; min-width: 200px; }
        .homeAcademy__index span { color: #b8bbae; font-size: 1rem; margin-left: .75rem; }
        .homeDirectory { align-items: center; display: grid; gap: 3rem; grid-template-columns: .9fr 1.1fr; }
        .homeDirectory__copy { max-width: 520px; }
        .homeDirectory__copy .homeButton { margin-top: 1.5rem; }
        .homeDirectory__map { align-items: center; background: linear-gradient(135deg, #f1f0e5, #e5e8dc); border: 1px solid var(--home-line); border-radius: 18px; display: flex; flex-direction: column; height: 330px; justify-content: center; overflow: hidden; position: relative; }
        .homeDirectory__map::before, .homeDirectory__map::after { border: 1px solid #d5d8ca; border-radius: 50%; content: ''; height: 70%; position: absolute; transform: rotate(-25deg); width: 120%; }
        .homeDirectory__map::after { height: 45%; transform: rotate(25deg); width: 150%; }
        .homeDirectory__map > span { background: white; border-radius: 30px; box-shadow: 0 4px 18px rgb(0 0 0 / 8%); color: #50534a; font-size: .9rem; padding: .75rem 1rem; position: relative; z-index: 1; }
        .homeMapPin { align-items: center; background: #31392f; border: 5px solid white; border-radius: 50% 50% 50% 0; box-shadow: 0 4px 12px rgb(0 0 0 / 15%); color: #f7f6df; display: flex; height: 42px; justify-content: center; margin-bottom: 1rem; position: relative; transform: rotate(-45deg); width: 42px; z-index: 1; }
        .homeAccelerator { background: var(--home-dark); color: white; display: grid; gap: 3rem; grid-template-columns: 1fr 1fr; padding: clamp(4rem, 8vw, 7rem) max(6vw, calc((100vw - 1200px) / 2)); }
        .homeAccelerator .homeSection__intro { max-width: 570px; }
        .homeAccelerator .homeSection__intro > p:not(.homeEyebrow) { color: #d7d9d0; }
        .homeAccelerator .homeButton { margin-top: 1.75rem; }
        .homeStageList { border-top: 1px solid #4d524c; list-style: none; margin: 0; padding: 0; }
        .homeStageList li { align-items: center; border-bottom: 1px solid #4d524c; display: flex; gap: 1rem; min-height: 58px; }
        .homeStageList li span { color: #c5c6a9; font-size: .76rem; letter-spacing: .1em; }
        .homePartners { background: var(--home-paper); padding: 4rem 1.25rem; text-align: center; }
        .homePartners h2 { font-size: clamp(2rem, 3vw, 2.8rem); }
        .homePartners__logo { align-items: center; display: flex; justify-content: center; margin: 2rem auto 0; }
        .homePartners__logo :global(img) { height: auto; max-height: 100px; object-fit: contain; width: 150px; }
        @media (max-width: 760px) {
          .homeHero { background-position: 58% center; min-height: 660px; padding: 4.5rem 1.25rem 5rem; }
          .homeHero h1 { font-size: clamp(3rem, 12vw, 4.5rem); max-width: 560px; }
          .homeHero__summary { max-width: 380px; }
          .homeHero__actions { align-items: stretch; flex-direction: column; max-width: 420px; width: 100%; }
          .homeHero__actions .homeButton { width: 100%; }
          .homeHero__scroll { bottom: 1.5rem; left: 1.25rem; }
          .homeInvestmentGrid { grid-template-columns: 1fr; }
          .homeInvestmentCard { min-height: 235px; }
          .homeFunding__inner { grid-template-columns: 1fr; }
          .homeFundingGrid { grid-template-columns: 1fr 1fr; }
          .homeMarketplace, .homeDirectory, .homeAccelerator { grid-template-columns: 1fr; }
          .homeMarketplace__visual { grid-row: 1; }
          .homeProductCarousel { grid-column: auto; }
          .homeProductTrack { grid-auto-columns: minmax(230px, 78%); }
          .homeAcademy { align-items: flex-start; flex-direction: column; }
          .homeAcademy__index { font-size: 1.15rem; min-width: auto; }
          .homeAcademy__index span { font-size: .9rem; }
          .homeDirectory__map { height: 260px; }
        }
        @media (max-width: 420px) {
          .homeHero { min-height: 620px; }
          .homeFundingGrid { grid-template-columns: 1fr; }
          .homeFundingCard { min-height: 130px; }
          .homeProductCarousel__heading { align-items: flex-start; }
          .homeCarouselControls button { height: 40px; width: 40px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .homePage * { scroll-behavior: auto !important; transition-duration: .01ms !important; }
        }
      `}</style>
    </main>
  );
}
