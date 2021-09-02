const db = require('../data/pokemon')

const getPokemon = () => {
  return db.map(pokemon => {
    return {
      id: pokemon.name,
      pokedex_number: pokemon.pokedex_number
    }
  })
}

const insert = pokemon => {
  return {
    message: 'you did it! you added a new pokemon',
    id: `${pokemon.name}`,
    pokedex_number: `${pokemon.pokedex_number}`
  }
}

const login = pokemon => {
  return {
    message: 'you did it! you logged in',
    id: `${pokemon.id}`,
    pokedex_number: `${pokemon.pokedex_number}`
  }
}

module.exports = {
  getPokemon,
  insert,
  login
}
