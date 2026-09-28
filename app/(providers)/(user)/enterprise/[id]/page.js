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
    <main>
      
      <div><h1>{profile.enterprise.name}</h1></div>
      
      <div>
        <div><h2>MoI</h2></div>
        
        <div>
          <p>Number: {profile.enterprise.number}</p>
        </div>
        <div>
          <p>Type: {profile.enterprise.type}</p>
        </div>
        <div>
          <p>Address: {profile.enterprise.address}</p>
        </div>
        <div>
          <p>Director(s): {profile.enterprise.director}</p>
        </div>
      </div>
      
      <div>
        <div><h2>Finances</h2></div>
      
        <h3>Profit Loss</h3>
        
        <h3>Cash Flow Projection</h3>
        
        <h3>Balance Sheet</h3>
      </div>
      
    </main>
  )
}
