function SMS(request, response) {
  
  const sendMessage = async event => {
    event.preventDefault()
    
    
    alert(event.target.numero.value);
    alert(event.target.mensagem.value);
    
    const res = await fetch(
      'https://webservices2.twwwireless.com.br/reluzcap/wsreluzcap.asmx/EnviaSMS',
      {
        body: JSON.stringify({
          name: event.target.numero.value,
          numero: event.target.mensagem.value
        }),
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        },
        method: 'POST'
      }
    )

    const result = await res.json()
    
    alert(result);
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
