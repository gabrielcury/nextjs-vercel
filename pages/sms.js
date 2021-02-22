function SMS() {
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
      <label htmlFor="name">Numero</label>
      <input id="name" name="name" type="text" autoComplete="name" required />
      <button type="submit">Enviar</button>
    </form>
  )
}



export default SMS;
