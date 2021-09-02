const router = require('express').Router()
const Pokemon = require('./model')
const {checkPayload} = require('./middleware')

router.get('/users', (req, res, next) => {
  try {
    res.json(Pokemon.getPokemon())
  } catch (err) {
    next(err)
  }
})

router.post('/register', (req, res, next) => {
  try {
    res.json(Pokemon.insert(req.body))
  } catch (err) {
    next(err)
  }
})

router.post('/login', checkPayload, (req, res, next) => {
  try {
    res.json(Pokemon.login(req.pokemon))
  } catch (err) {
    next(err)
  }
})

/* eslint-disable */
router.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
    fromTheDev: 'Mistakes were made'
  })
})
/* eslint-enable */

module.exports = router
