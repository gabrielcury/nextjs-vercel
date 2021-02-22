async function sms(request, response) {
    
    
    const response = req.body.data;
    
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
