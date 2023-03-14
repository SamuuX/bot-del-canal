const mongoose = require('mongoose')
const config = require('../../config/config.json')
module.exports = client => {
  // Nos conectamos a la base de datos

  const palo = 53

  mongoose.connect(config.mongodb, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {

  }).catch((err) => {

  })
}

/*
╔═════════════════════════════════════════════════════╗
║    || - || Desarrollado por dewstouh#1088 || - ||   ║
║    ----------| discord.gg/MBPsvcphGf |----------    ║
╚═════════════════════════════════════════════════════╝
*/
