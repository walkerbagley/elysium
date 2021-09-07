export default (req, res) => {
  switch (req.method) {
    case 'POST':
      res.setHeader('Content-Type', 'application/json')

      // Nobody expects the Spanish Inquisition (Kodey)
      let spanishInquisition = req.query.spanishInquisition
      let tweak = req.query.tweak // Tweak Name
      let UUID = req.query.UUID // Device UUID
      let purchased = req.query.purchased // TODO: DB stuff to see if this is true but just to get the API working atm it's like this.
      let key = req.query.key // API Key, to prevent leak of user data.

      if(spanishInquisition) { // Small easter egg, everyone needs Monty Python in their lives
        res.statusCode = 200
        res.send(JSON.stringify({status: 200, response: 'Nobody expects the Spanish Inquisition'}))
      }

      else if(tweak && UUID) { // Checks for Paramaters in query.
        if(key) { // TODO: Check for valid API Key.
          if(purchased) {res.statusCode = 200; res.send(JSON.stringify({status: 200, tweak: tweak, UUID: UUID, purchased: purchased, response: 'License Accquired'}))} // TODO: Database stuff to actually check if purchased.
          else {res.statusCode = 402; res.send(JSON.stringify({status: '402 Payment Required', response: `${UUID} does not own this tweak`}))} // If the user doesnt own the tweak
        } else {res.statusCode = 401; res.send(JSON.stringify({error: '401 Unauthorized', response: 'Invalid API Key'}))} // Invalid API Key
      } else {res.statusCode = 400; res.send(JSON.stringify({error: '400 Bad Request', response: 'Invalid Paramaters'}))} // Invalid API Paramaters
    break

    default:
      res.statusCode = 501
      res.setHeader('Content-Type', 'application/json')
      res.send(JSON.stringify({error: '501 Not Implemented', response: 'We Only Support POST Requests'})) // Response if it isnt a 'POST' request.
  }
}
