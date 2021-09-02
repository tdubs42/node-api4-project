const logger = (req, res, next) => {
  const formatUrl = `${req.baseUrl}${req.url}`
  const log = `---------------------------
  ${Date()} 
  method: ${req.method}
  URL: ${formatUrl}
  status: ${res.statusCode}
  requester IP: ${req.ip} \n************`
  console.log(log)
  next()
}

const checkPayload = (req, res, next) => {
  // if (!req.id || !req.pokedex_number) {
  //   res.status(404).json({message: "pokemon not found"})
  // } else {
    req.pokemon = req.body
    next()
  // }
}

module.exports = {logger, checkPayload}
