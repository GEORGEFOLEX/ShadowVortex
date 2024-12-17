require("./database/module")

//GLOBAL PAYMENT
global.storename = "ShadowVortex"
global.dana = "2349021506036"
global.qris = "https://i.imgur.com/Zdeuc1x.jpeg"


// GLOBAL SETTING
global.owner = "2349021506036"
global.namabot = "👿ShadowVortex👿"
global.nomorbot = "2349021506036"
global.namaCreator = "MX-GΔMΞCØDΞR"
global.linkyt = "https://youtube.com/@mxgamecoder"
global.autoJoin = false
global.antilink = false
global.versisc = '4.0.2'

// DELAY JPM
global.delayjpm = 5500

// SETTING PANEL
global.apikey = 'PLTC'
global.capikey = 'PLTA'
global.domain = 'https://domain.com'
global.eggsnya = '15'
global.location = '1'



//GLOBAL THUMB

global.codeInvite = ""
global.imageurl = 'https://i.imgur.com/Zdeuc1x.jpeg'
global.isLink = 'https://whatsapp.com/channel/0029Vavz0e6E50Ugp30Z6z0W'
global.packname = "MX-GΔMΞCØDΞR"
global.author = "MX-GΔMΞCØDΞR"
global.jumlah = "5"


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})