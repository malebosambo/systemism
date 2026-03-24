export async function POST(request) {
  
  try {
    
    const { email, password } = await request.json();
    console.log({ email, password });
    
  } catch (e) {
    
    console.log({ e });
    
  }
}