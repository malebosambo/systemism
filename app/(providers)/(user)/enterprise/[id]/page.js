export default function ViewEnterprise() {
  
  const { user, profile, loading } = useAuth();
  
  const router = useRouter();
  
  useEffect(() => {

    if (loading === false && !user) {
      router.replace("/login");
    }
  
  }, [user, loading, router]);
  
  if (loading) {
    return <div>Loading...</div>
  }
  
  if (!user) {
    return null;
  }
  
  if (!profile) {
    return <div style={{ display: "none" }}>Loading profile...</div>
  }
  
  return (
    <main className="EnterpriseDetails">
      
      <div><h1>{profile.enterprise.name}</h1></div>
      
      <div>
        <div><h2>Registration Certificate</h2></div>
        
        <div>
          <p>Number: {profile.enterprise.number}</p>
        </div>
        
        <div>
          <p>Registration Date: {profile.enterprise.registrationDate}</p>
        </div>
        
        <div>
          <p>Start Date: {profile.enterprise.startDate}</p>
        </div>
        
        <div>
          <p>Type: {profile.enterprise.type}</p>
        </div>
        
        <div>
          <p>Status: {profile.enterprise.status}</p>
        </div>
        
        <div>
          <p>Financial Year End: {profile.enterprise.finYearEnd}</p>
        </div>
        
        <div>
          <p>Tax Number: {profile.enterprise.taxNumber}</p>
        </div>
        
        <div>
          <p>Physical Address: {profile.enterprise.phyAddress}</p>
        </div>
        
        <div>
          <p>Postal Address: {profile.enterprise.postalAddress}</p>
        </div>
        
        <div>
          <p>Director(s): {profile.enterprise.director}</p>
        </div>
      </div>
      
      <div>
        <div><h2>Finances</h2></div>
      
        <div><h3>Profit Loss</h3></div>
        
        <div><h3>Cash Flow Projection</h3></div>
        
        <div><h3>Balance Sheet</h3></div>
      </div>
      
    </main>
  )
}
