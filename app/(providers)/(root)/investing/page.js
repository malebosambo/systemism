import Link from "next/link";

export default function Investing() {
  
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
  
  return (
    <main className="Investing">
      
      <div>
        
        <p className="InvestingEyebrow">Explore with intention</p>
        
        <h1 id="Investing-Title">Invest for now and the future.</h1>
        
        <p>Discover different investment categories and explore them at a pace that feels right for you.</p>
        
        <Link className="InvestingButton InvestingButton--Light" href="/profiles/personal">Explore your personal profile <span aria-hidden="true">↗</span></Link>
        
      </div>
      
      <div>
        
        <div className="InvestingIntro">
          <p className="InvestingEyebrow">Investment categories</p>
          
          <h2 id="categories-title">Explore your options</h2>
          
          <p>Start by browsing a category. Each area has its own considerations, so take time to understand the details before making decisions.</p>
        </div>
        
        <div className="InvestingGrid">
          {investmentCategories.map((category) => (
            <Link className="InvestingCard" href={category.href} key={category.title}>
              <span>{category.icon}</span><h3>{category.title}</h3><p>{category.description}</p><strong>Explore category <span aria-hidden="True">↗</span></strong>
            </Link>
          ))}
        </div>
        
       </div>
       
      <div>
        <div className="InvestingContent HorizonContent">
          <div className="InvestingIntro">
            <p className="InvestingEyebrow">Plan around time</p>
            
            <h2 id="Horizon-Title">Browse by investment horizon</h2>
            
            <p>Explore opportunities by the time horizon you have in mind.</p>
          </div>
          
          <div className="HorizonGrid">
            {horizons.map((horizon) => <Link className="HorizonCard" href={horizon.href} key={horizon.title}><h3>{horizon.title}</h3><p>{horizon.description}</p><span>Browse options <b aria-hidden="true">→</b></span></Link>)}
          </div>
          
          <p className="InvestingDisclaimer">Investment opportunities involve risk. Review the details of each opportunity and consider seeking independent advice before making a decision.</p>
        </div>
      </div>
      
    </main>
  )
}