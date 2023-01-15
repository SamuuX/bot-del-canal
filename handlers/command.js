const fs = require('fs'); 
module.exports = (client) => { 
    try { 
         
        let comandos = 0; 
        fs.readdirSync("./comandos/").forEach((carpeta) => { 
            const commands = fs.readdirSync(`./comandos/${carpeta}`).filter((archivo) => archivo.endsWith(".js")); 
            for (let archivo of commands){ 
                let comando = require(`../comandos/${carpeta}/${archivo}`); 
                if(comando.name) { 
                    client.commands.set(comando.name, comando); 
                    comandos++ 
                } else { 
                     
                    continue; 
                } 
                if(comando.aliases && Array.isArray(comando.aliases)) comando.aliases.forEach((alias) => client.aliases.set(alias, comando.name)); 
            } 
        }); 
         
    } catch(e){ 
        console.log(e) 
    } 
} 
 
/* 
╔═════════════════════════════════════════════════════╗ 
║    || - || Desarrollado por dewstouh#1088 || - ||   ║ 
║    ----------| discord.gg/MBPsvcphGf |----------    ║ 
╚═════════════════════════════════════════════════════╝ 
*/ 
