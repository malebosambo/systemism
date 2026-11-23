"use client";

import Link from "next/link";

export default function Business() {
  
  const businessFeatures = [
    { title: "Find funding", description: "Compare funding pathways for different business needs and stages.", href: "/funding", action: "Explore funding" },
    { title: "Reach new customers", description: "Showcase your products and services in the marketplace and directory.", href: "/marketplace", action: "Visit marketplace" },
    { title: "Build and grow", description: "Explore learning and accelerator resources for your business journey.", href: "/accelerator", action: "Explore the accelerator" },
  ];
  
  return (
    <main className="PublicPage BusinessPage">
      
      <div className="PublicHero" aria-labelledby="business-title">
        <p className="publicEyebrow">For businesses at every stage</p>
        <h1 id="business-title">Build your business with the right support.</h1>
        
        <p className="publicLead">Discover practical pathways to funding, customers, skills, and new opportunities.</p>
        
        <div className="publicActions">
          <Link className="publicButton publicButton--primary" href="/signup">Create a business account <span aria-hidden="true">↗</span></Link>
          <Link className="publicButton publicButton--secondary" href="/funding">Explore funding</Link>
        </div>
      </div>
      
      <div className="PublicContent" aria-labelledby="business-options-title">
        <div className="PublicSectionIntro">
          <p className="PublicEyebrow">Your business journey</p>
          <h2 id="business-options-title">Find the support you need</h2>
          <p>Whether you are starting out or ready to grow, choose a path that matches your next goal.</p>
        </div>
        
        <div className="PublicCardGrid">
          {businessFeatures.map((feature, index) => (
            <article className="PublicCard" key={feature.title}>
              <span className="PublicCard__Number">0{index + 1}</span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <Link className="PublicCard__Link" href={feature.href}>{feature.action} <span aria-hidden="true">→</span></Link>
            </article>
          ))}
        </div>
        
        <div className="VendorCallout">
          <div><p className="PublicEyebrow">Sell through Systemism</p><h2>Bring your business to the marketplace</h2><p>Learn about vendor opportunities and the application process.</p></div>
          <Link className="PublicButton PublicButton--Dark" href="/enterprise/add">Become a vendor <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
      
    </main>
  )
}
