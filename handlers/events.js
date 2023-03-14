const fs = require('fs')
const allevents = []
module.exports = async (client) => {
  try {
    try {

    } catch {}
    let cantidad = 0
    const cargar_dir = (dir) => {
      const archivos_eventos = fs.readdirSync(`./eventos/${dir}`).filter((file) => file.endsWith('.js'))
      for (const archivo of archivos_eventos) {
        try {
          const evento = require(`../eventos/${dir}/${archivo}`)
          const nombre_evento = archivo.split('.')[0]
          allevents.push(nombre_evento)
          client.on(nombre_evento, evento.bind(null, client))
          cantidad++
        } catch (e) {
          console.log(e)
        }
      }
    }
    await ['client', 'guild'].forEach(e => cargar_dir(e))

    try {} catch (e) { console.log(e) }
  } catch (e) {
    console.log(e.bgRed)
  }
}

/*
╔═════════════════════════════════════════════════════╗
║    || - || Desarrollado por dewstouh#1088 || - ||   ║
║    ----------| discord.gg/MBPsvcphGf |----------    ║
╚═════════════════════════════════════════════════════╝
*/
