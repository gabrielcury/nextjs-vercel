function SMS(request, response) {
  
  const sendMessage = async event => {
    event.preventDefault()
   
    
    let idSMS  = "";
    let senha  = "";
    let numUsu = "";
    
    let numero = event.target.numero.value;
    let mensagem = event.target.mensagem.value;
    
    
    alert(event.target.numero.value);
    alert(event.target.mensagem.value);
    
    
    const res = await fetch(
      'http://webservices2.twwwireless.com.br/reluzcap/wsreluzcap.asmx/EnviaSMS?NumUsu=',
      {
        
        body: JSON.stringify({
          name: event.target.numero.value,
          numero: event.target.mensagem.value
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
    <form onSubmit={sendMessage}>
      <label htmlFor="numero">Número</label>
      <input id="numero" name="numero" type="text" autoComplete="numero" required />
       <br />
      <label htmlFor="mensagem">Mensagem</label>
      <input id="mensagem" name="mensagem" type="text" autoComplete="mensagem" required />
      <button type="submit">Enviar</button>
    </form>
  )
}



export default SMS;
