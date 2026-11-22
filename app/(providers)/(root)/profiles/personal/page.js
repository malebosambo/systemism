import Link from "next/link";

export default function Personal() {
  
  const personalFeatures = [
    { title: "Invest with purpose", description: "Explore opportunities across different asset classes and investment horizons.", href: "/investing", action: "Explore investing" },
    { title: "Discover the marketplace", description: "Find products and services from businesses in the Systemism community.", href: "/marketplace", action: "Visit marketplace" },
    { title: "Learn new skills", description: "Browse learning opportunities to help you take your next step.", href: "/academy", action: "Explore the academy" },
  ];
  
  return (
    <main className="PublicPage PersonalPage">
      
      <div className="PublicHero" aria-labelledby="Personal-Title">
        <p className="PublicEyebrow">Your goals. Your next step.</p>
        
        <h1 id="personal-title">Make more possible for yourself.</h1>
        
        <p className="PublicLead">Explore ways to learn, invest, and connect—all in one place, at your own pace.</p>
        
        <div className="PublicActions">
          <Link className="PublicButton PublicButton--Primary" href="/signup">Create an account <span aria-hidden="true">↗</span></Link>
          
          <Link className="PublicButton PublicButton--Secondary" href="/investing">Explore opportunities</Link>
        </div>
      </div>
      
      <div className="PublicContent" aria-labelledby="Personal-Options-Title">
        <div className="PublicSectionIntro">
          
          <p className="PublicEyebrow">A place to begin</p>
          
          <h2 id="personal-options-title">Choose what matters to you</h2>
          
          <p>Start with the area that fits your goals. You can explore freely and decide what to do next.</p>
        </div>
        
        <div className="PublicCardGrid">
          {personalFeatures.map((feature, index) => (
            <article className="PublicCard" key={feature.title}>
              <span className="PublicCard__Number">0{index + 1}</span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <Link className="PublicCard__Link" href={feature.href}>{feature.action} <span aria-hidden="true">→</span></Link>
            </article>
          ))}
        </div>
      </div>
      
      <div className="PublicCallout">
        <div>
          <p className="PublicEyebrow">Ready when you are</p>
          
          <h2>Start with a free account</h2>
          
          <p>Create your profile to access the personal experience.</p>
        </div>
        
        <Link className="PublicButton PublicButton--Light" href="/signup">Sign up <span aria-hidden="true">↗</span></Link>
      </div>
      
    </main>
  )
}