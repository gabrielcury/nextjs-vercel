async function sms(request, response) {
    
    
  const registerUser = async event => {
    event.preventDefault()

    const res = await fetch(
      'https://hooks.zapier.com/hooks/catch/123456/abcde',
      {
        body: JSON.stringify({
          name: event.target.name.value
        }),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      }
    )

    const result = await res.json()
    // result.user => 'Ada Lovelace'
  }

  return (
    <form onSubmit={registerUser}>
      <label htmlFor="name">Name</label>
      <input id="name" name="name" type="text" autoComplete="name" required />
      <button type="submit">Register</button>
    </form>
  )

    
    
    
    
    
    
    
    
    
    
   // event.preventDefault()
    
    /*
    const res = await fetch(
      'http://webservices.twwwireless.com.br/reluzcapwcf/reluzcap.svc/enviasms/',
      {
        body: JSON.stringify({
          data: req.body.data
        }),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      }
    )

    const result = await res.json()
    */
    // result
    
    
    /*
    const apiSecret = process.env.SENHA; 
    const dynamicDate = new Date();

    const smsResponse = await fetch(`http://webservices.twwwireless.com.br/reluzcapwcf/reluzcap.svc/enviasms/${apiSecret}`);
    const smsResponseJson = await smsResponse.json();
    const respostaEnvio = smsResponseJson;

    response.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate');

    response.json({
        date: dynamicDate.toGMTString(),
        respostaEnvio: respostaEnvio
    });
    */
   
    
}

export default sms;
