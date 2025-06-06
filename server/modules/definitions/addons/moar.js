const { combineStats, makeAuto, makeTurret, makeOver, makeDeco, makeGuard, makeBird, makeMulti, makeRadialAuto } = require('../facilitators.js');
const { base, statnames, gunCalcNames, dfltskl, smshskl } = require('../constants.js');
const g = require('../gunvals.js');
// references
const makeGun = ({ length = 18, width = 8, aspect = 1, x = 0, y = 0, angle = 0, delay = 0, stats = [g.basic], bulletType = "bullet", statCalc = "" }) => {
    return {
        POSITION: [length, width, aspect, x, y, angle, delay],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats(stats),
            TYPE: bulletType,
          	STAT_CALCULATOR: statCalc
        }
    }
}
const makeCos = ({ length = 18, width = 8, aspect = 1, x = 0, y = 0, angle = 0 }) => {
  	return {
    		POSITION: [length, width, aspect, x, y, angle, 0]
    }
}
// flanks
const upgrades = Class.doubleTwin.UPGRADES_TIER_3
Class.doubleTwin = makeMulti("twin", 3, "Triple Twin")
Class.autoDouble = makeAuto("doubleTwin")
Class.bentDouble = makeMulti("tripleShot", 3, "Bent Triple")
Class.tripleTwin = makeMulti("twin", 6, "Hexa Twin")
Class.doubleTwin.UPGRADES_TIER_3 = upgrades
// snipers
Class.degrader = makeMulti("sniper", 3, "Degrader")
Class.rustage = makeMulti("assassin", 3, "Rustage")
Class.prey = makeMulti("hunter", 3, "Prey")
Class.machShot = makeMulti("minigun", 3, "Mach-Shot")
Class.assault = makeMulti("rifle", 3, "Assault")
Class.breaker = makeMulti("sniper", 6, "Breaker")
Class.husk = makeMulti("marksman", 3, "Husk")
// machine guns
Class.sabotager = makeMulti("machineGun", 3, "Sabotager")
Class.foctar = makeMulti("artillery", 3, "Foctar") // doesnt count as a machine gun but idc
Class.vase = makeMulti("gunner", 3, "Vase")
Class.ultimatum = makeMulti("sprayer", 3, "Ultimatum")
Class.shower = makeMulti("machineGun", 6, "Shower")
// pounders
Class.obliterator = makeMulti("pounder", 3, "Obliterator")
Class.demolitionist = makeMulti("destroyer", 3, "Demolitionist")
Class.exterminator = makeMulti("launcher", 3, "Exterminator")
Class.eradicator = makeMulti("pounder", 6, "Eradicator")

// twins
const t = 5.5 
Class.owl = { // tank itself
  	PARENT: "sniper",
  	LABEL: "Owl",
  	GUNS: [
      	makeGun({ length: 24, width: 8.5, y: t, stats: [g.basic, g.sniper] }),
      	makeGun({ length: 24, width: 8.5, y: -t, delay: 0.5, stats: [g.basic, g.sniper] })
    ]
}
Class.machinist = {
  	PARENT: "machineGun",
  	LABEL: "Machinist",
  	GUNS: [
      	makeGun({ length: 12, width: 7, aspect: 1.4, y: t, x: 4, angle: 8, stats: [g.basic, g.machineGun] }),
      	makeGun({ length: 12, width: 7, aspect: 1.4, y: -t, x: 4, angle: -8, delay: 0.5, stats: [g.basic, g.machineGun] })
    ]
}
Class.dollarer = {
  	PARENT: "pounder",
  	LABEL: "Dollarer",
  	GUNS: [
      	{
      			POSITION: [10, 25, 0, -10, 0, 0, 0]
      	},
      	makeGun({ length: 20.5, width: 12, y: t + 1, stats: [g.basic, g.pounder] }),
      	makeGun({ length: 20.5, width: 12, y: -t - 1, delay: 0.5, stats: [g.basic, g.pounder] })
    ]
}
Class.caltropper = { // i will not call it wark, cry about it
		PARENT: "trapper",
  	LABEL: "Caltropper",
  	GUNS: [
      	makeCos({ length: 12, width: 7, y: t, angle: 8 }),
      	makeCos({ length: 12, width: 7, y: -t, angle: -8 }),
      	makeGun({ length: 3, width: 7, aspect: 1.7, x: 15, y: t, angle: 8, stats: [g.trap], statCalc: "trap", bulletType: "trap" }),
      	makeGun({ length: 3, width: 7, aspect: 1.7, x: 15, y: -t, angle: -8, delay: 0.5, stats: [g.trap], statCalc: "trap", bulletType: "trap" })
    ]
}
// owl upgrades
Class.griffin = {
  	PARENT: "assassin",
  	LABEL: "Griffin",
  	GUNS: [
      	{
          	POSITION: [6, 25, 0, -4, 0, 0, 0]
        },
      	makeGun({ y: t - 1 }),
      	makeGun({ y: -t + 1, delay: 0.5 }),
      	{
      			POSITION: [10, 17, -1.4, 3, 0, 0, 0]
      	}
    ]
}
Class.bentSnipe = {
  	PARENT: "sniper",
  	LABEL: "Bent-Snipe",
  	GUNS: [
      	makeGun({ x: -2, y: -2, angle: -17, delay: 0.5 }),
      	makeGun({ x: -2, y: 2, angle: 17, delay: 0.5 }),
      	makeGun({})
    ]
}
Class.canary = {
  	PARENT: "marksman",
  	LABEL: "Canary",
  	GUNS: [
      	makeCos({ y: t }),
      	makeCos({ y: -t }),
      	makeCos({ y: t, x: 5 }),
      	makeCos({ y: -t, x: 5 }),
      	makeCos({ y: t, x: 10 }),
      	makeCos({ y: -t, x: 10 }),
      	makeGun({ y: t }),
      	makeGun({ y: -t, delay: 0.5 })
    ]
}
Class.crow = makeMulti("owl", 3, "Crow")
// machinist upgrades
Class.megagun = {
  	PARENT: "minigun",
  	LABEL: "Megagun",
  	GUNS: [
      	makeGun({ y: t }),
      	makeGun({ y: -t, delay: 1/6 }),
      	makeGun({ length: 19, y: t, delay: 2/6 }),
      	makeGun({ length: 19, y: -t, delay: 3/6 }),
      	makeGun({ length: 17, y: t, delay: 4/6 }),
      	makeGun({ length: 17, y: -t, delay: 5/6})
    ]
}
Class.catastrophe = {
  	PARENT: "gunner",
		LABEL: "Catastrophe",
  	GUNS: [
      	makeGun({ length: 10, y: -8, angle: -8 }),
      	makeGun({ length: 10, y: 8, angle: 8 }),
      	makeGun({ y: 7.25, delay: 1/3 }),
      	makeGun({ y: -7.25, delay: 1/3 }),
      	makeGun({ length: 16, y: 3.75, delay: 2/3 }),
      	makeGun({ length: 16, y: -3.75, delay: 2/3 })
    ]
}
Class.splasher = {
  	PARENT: "sprayer",
  	LABEL: "Splasher",
  	GUNS: [
      	makeGun({ y: t, angle: 8 }),
      	makeGun({ y: -t, angle: -8, delay: 0.5 }),
      	makeGun({ width: 7, y: t, x: -4, angle: 8}),
      	makeGun({ width: 7, y: -t, x: -4, angle: -8, delay: 0.5 })
    ]
}
Class.bentMach = {
  	PARENT: "machineGun",
  	LABEL: "Bent-Mach",
  	GUNS: [
      	makeGun({ width: 7, y: t, x: 4, angle: 8 }),
      	makeGun({ width: 7, y: -t, x: 4, angle: -8, delay: 0.5 }),
      	makeGun({ width: 10 })
    ]
}
Class.dyadic = makeMulti("machinist", 3, "Triadic")
// dollarer upgrades
Class.currency = {
  	PARENT: "destroyer",
  	LABEL: "Currency",
  	GUNS: [
      	{
          	POSITION: [10, 28, 0, -10, 0, 0, 0]
        },
      	makeGun({ y: 7 }),
      	makeGun({ y: -7, delay: 0.5 })
    ]
}
Class.catapult = {
  	PARENT: "launcher",
  	LABEL: "Catapult",
  	GUNS: [
      	{
          	POSITION: [3, 17, 0, -4, 4.5, 7, 0]
        },
      	{
          	POSITION: [3, 17, 0, -4, -4.5, -7, 0]
        },
      	makeCos({ y: 6.5, angle: 7 }),
      	makeCos({ y: -6.5, angle: -7 }),
      	makeGun({ y: 6.5, angle: 7 }),
      	makeGun({ y: -6.5, angle: -7, delay: 0.5 })
    ]
}
Class.bentPound = {
  	PARENT: "pounder",
  	LABEL: Math.random() < 0.001 ? "Bent-💷" : "Bent-Pound",
  	GUNS: [
      	makeGun({ x: -2, y: -2, angle: -17, delay: 0.5 }),
      	makeGun({ x: -2, y: 2, angle: 17, delay: 0.5 }),
      	makeGun({})
    ]
}
Class.faucile = {
  	PARENT: "artillery",
  	LABEL: "Faucile",
  	GUNS: [
      	{
          	POSITION: [10, 28.4, 0, -10, 0, 0, 0]
        },
      	makeGun({ y: t * 2.4 }),
      	makeGun({ y: -t * 2.4, delay: 0.5 }),
      	makeGun({ y: t + 1 }),
      	makeGun({ y: -t - 1, delay: 0.5 })
    ]
}
Class.extinguisher = makeMulti("dollarer", 3, "Extinguisher")
// caltropper upgrades
Class.bentTrap = {
  	PARENT: "trapper",
  	LABEL: "Bent-Trap",
  	GUNS: [
      	makeCos({ x: -2, y: -2, angle: -17 }),
      	makeCos({ x: -2, y: 2, angle: 17 }),
      	makeGun({ x: -2, y: -2, angle: -17, delay: 0.5 }),
      	makeGun({ x: -2, y: 2, angle: 17, delay: 0.5 }),
      	makeCos({}),
      	makeGun({})
    ]
}
Class.creator = {
  	PARENT: "builder",
  	LABEL: "Creator",
  	GUNS: [
      	makeCos({ angle: 0 }),
      	makeGun({ angle: 22.5 }),
      	makeGun({ angle: -22.5, delay: 0.5 })
    ]
}
Class.artist = makeMulti("caltropper", 3, "artist")
// remove turret from hexa trapper and remove septa trapper because I said so
Class.hexaTrapper.TURRETS = []
Class.triTrapper.UPGRADES_TIER_3 = ["fortress", "hexaTrapper", "architect"]
// 🖕 septa trapper, never missed ya, you were just a carbon copy of hexa trapper.
// regards, anguish.
// autos (oh boy the amount of makeAutos is just making me insane)
// turrets
Class.Tturret = makeTurret("twin")
Class.Sturret = makeTurret("sniper")
Class.MGturret = makeTurret("machineGun")
Class.FGturret = makeTurret("flankGuard")
Class.Dturret = makeTurret("director")
Class.Pturret = makeTurret("pounder")
Class.TRturret = makeTurret("trapper")
// tanks themselves
Class.Atwin = makeAuto("twin")
Class.Asnipe = makeAuto("sniper")
Class.Amachine = makeAuto("machineGun")
Class.Aflank = makeAuto("flankGuard")
Class.Adirect = makeAuto("director")
Class.Apound = makeAuto("pounder")
Class.Atrap = makeAuto("trapper")
Class.Adesmos = makeAuto("desmos")
// auto t2
// twin uogrades
Class.AtriShot = makeAuto("tripleShot")
// sniper upgrades
Class.Ahunt = makeAuto("hunter")
Class.Arifle = makeAuto("rifle")
Class.Amarks = makeAuto("marksman")
Class.Adegrade = makeAuto("degrader")
Class.Aowl = makeAuto("owl")
// machine gun upgrades
Class.Aspray = makeAuto("sprayer")
Class.Aminigun = makeAuto("minigun")
Class.Asabotage = makeAuto("sabotager")
Class.Amachinist = makeAuto("machinist")
// flank guard upgrades
Class.Ahexa = makeAuto("hexaTank")
Class.Aauto3 = makeAuto("auto3")
Class.AtrapGuard = makeAuto("trapGuard")
Class.AtriTrap = makeAuto("triTrapper")
Class.Acaltrop = makeAuto("caltropper")
// director upgrades
Class.Aunder = makeAuto("underseer")
// pounder upgrades
Class.Adest = makeAuto("destroyer")
Class.Alaunch = makeAuto("launcher")
Class.Aartillery = makeAuto("artillery")
Class.Aobliterate = makeAuto("obliterator")
Class.Adollar = makeAuto("dollarer")
// desmos upgrades
Class.Ahelix = makeAuto("helix")
Class.Arepeat = makeAuto("repeater")

const name = [
  	"Tw-",
  	"S-",
  	"Mg-",
  	"Fg-",
  	"D-",
  	"P-",
  	"Tr-"
]
const turtype = [
  	"Tturret",
  	"Sturret",
  	"MGturret",
  	"FGturret",
  	"Dturret",
  	"Pturret",
  	"TRturret"
]
const t1tanks = Class.basic.UPGRADES_TIER_1
console.log(t1tanks)
for (let i = 0; i < t1tanks.length; i++) { // auto t1 tanks
  	Class["A" + t1tanks[i]] = makeAuto(Class[t1tanks[i]])
  	Class[t1tanks[i]].UPGRADES_TIER_2.push("A" + t1tanks[i])
}
for (let i = 0; i < t1tanks.length; i++) {
  	Class["A" + t1tanks[0]].UPGRADES_TIER_3 = ["autoDouble", "AtriShot", "autoGunner", "Ahexa", "Aowl", "Amachinist", "Adollar", "Acaltrop"]
  	Class["A" + t1tanks[1]].UPGRADES_TIER_3 = ["autoAssassin", "Ahunt", "Aminigun", "Arifle", "Amarks", "Aowl", "Adegrade"]
  	Class["A" + t1tanks[2]].UPGRADES_TIER_3 = ["Aartillery", "autoGunner", "Aspray", "Aminigun", "Amachinist", "Asabotage"]
  	Class["A" + t1tanks[3]].UPGRADES_TIER_3 = ["Ahexa", "Aauto3", "AtrapGuard", "AtriTrap", "Adegrade", "Asabotage", "Aobliterate"]
    Class["A" + t1tanks[4]].UPGRADES_TIER_3 = ["autoOverseer", "autoCruiser", "autoSpawner", "Aunder"]
  	Class["A" + t1tanks[5]].UPGRADES_TIER_3 = ["Adest", "autoBuilder", "Aartillery", "Alaunch", "Adollar", "Aobliterate"]
  	Class["A" + t1tanks[6]].UPGRADES_TIER_3 = ["autoBuilder", "AtriTrap", "AtrapGuard", "Acaltrop"]
  	Class["A" + t1tanks[7]].UPGRADES_TIER_3 = ["Ahelix", "Arepeat"]
  	Class["A" + turtype[0] + t1tanks[i]] = makeAuto(t1tanks[i], name[0] + "Turreted " + t1tanks[i], {type: turtype[0], size: 11})
  	Class["A" + turtype[1] + t1tanks[i]] = makeAuto(t1tanks[i], name[1] + "Turreted " + t1tanks[i], {type: turtype[1], size: 11})
  	Class["A" + turtype[2] + t1tanks[i]] = makeAuto(t1tanks[i], name[2] + "Turreted " + t1tanks[i], {type: turtype[2], size: 11})
  	Class["A" + turtype[3] + t1tanks[i]] = makeAuto(t1tanks[i], name[3] + "Turreted " + t1tanks[i], {type: turtype[3], size: 11})
  	Class["A" + turtype[4] + t1tanks[i]] = makeAuto(t1tanks[i], name[4] + "Turreted " + t1tanks[i], {type: turtype[4], size: 11})
  	Class["A" + turtype[5] + t1tanks[i]] = makeAuto(t1tanks[i], name[5] + "Turreted " + t1tanks[i], {type: turtype[5], size: 11})
  	Class["A" + turtype[6] + t1tanks[i]] = makeAuto(t1tanks[i], name[6] + "Turreted " + t1tanks[i], {type: turtype[6], size: 11})
  	Class["A" + t1tanks[0]].UPGRADES_TIER_3.push("A" + turtype[0] + t1tanks[0], "A" + turtype[1] + t1tanks[0], "A" + turtype[2] + t1tanks[0], "A" + turtype[3] + t1tanks[0], "A" + turtype[4] + t1tanks[0], "A" + turtype[5] + t1tanks[0], "A" + turtype[6] + t1tanks[0])
		Class["A" + t1tanks[1]].UPGRADES_TIER_3.push("A" + turtype[0] + t1tanks[1], "A" + turtype[1] + t1tanks[1], "A" + turtype[2] + t1tanks[1], "A" + turtype[3] + t1tanks[1], "A" + turtype[4] + t1tanks[1], "A" + turtype[5] + t1tanks[1], "A" + turtype[6] + t1tanks[1])
		Class["A" + t1tanks[2]].UPGRADES_TIER_3.push("A" + turtype[0] + t1tanks[2], "A" + turtype[1] + t1tanks[2], "A" + turtype[2] + t1tanks[2], "A" + turtype[3] + t1tanks[2], "A" + turtype[4] + t1tanks[2], "A" + turtype[5] + t1tanks[2], "A" + turtype[6] + t1tanks[2])
		Class["A" + t1tanks[3]].UPGRADES_TIER_3.push("A" + turtype[0] + t1tanks[3], "A" + turtype[1] + t1tanks[3], "A" + turtype[2] + t1tanks[3], "A" + turtype[3] + t1tanks[3], "A" + turtype[4] + t1tanks[3], "A" + turtype[5] + t1tanks[3], "A" + turtype[6] + t1tanks[3])
		Class["A" + t1tanks[4]].UPGRADES_TIER_3.push("A" + turtype[0] + t1tanks[4], "A" + turtype[1] + t1tanks[4], "A" + turtype[2] + t1tanks[4], "A" + turtype[3] + t1tanks[4], "A" + turtype[4] + t1tanks[4], "A" + turtype[5] + t1tanks[4], "A" + turtype[6] + t1tanks[4])
		Class["A" + t1tanks[5]].UPGRADES_TIER_3.push("A" + turtype[0] + t1tanks[5], "A" + turtype[1] + t1tanks[5], "A" + turtype[2] + t1tanks[5], "A" + turtype[3] + t1tanks[5], "A" + turtype[4] + t1tanks[5], "A" + turtype[5] + t1tanks[5], "A" + turtype[6] + t1tanks[5])
		Class["A" + t1tanks[6]].UPGRADES_TIER_3.push("A" + turtype[0] + t1tanks[6], "A" + turtype[1] + t1tanks[6], "A" + turtype[2] + t1tanks[6], "A" + turtype[3] + t1tanks[6], "A" + turtype[4] + t1tanks[6], "A" + turtype[5] + t1tanks[6], "A" + turtype[6] + t1tanks[6])
		Class["A" + t1tanks[7]].UPGRADES_TIER_3.push("A" + turtype[0] + t1tanks[7], "A" + turtype[1] + t1tanks[7], "A" + turtype[2] + t1tanks[7], "A" + turtype[3] + t1tanks[7], "A" + turtype[4] + t1tanks[7], "A" + turtype[5] + t1tanks[7], "A" + turtype[6] + t1tanks[7])
}
// upgrade paths
// flanks and twins
Class.twin.UPGRADES_TIER_2.push("owl", "machinist", "dollarer", "caltropper")
Class.flankGuard.UPGRADES_TIER_2.push("degrader", "sabotager", "obliterator")
Class.sniper.UPGRADES_TIER_2.push("degrader", "owl")
		// degrader
		Class.degrader.UPGRADES_TIER_3 = ["rustage", "prey", "machShot", "assault", "husk", "breaker"]
		Class.assassin.UPGRADES_TIER_3.push("rustage")
		Class.hunter.UPGRADES_TIER_3.push("prey")
		Class.rifle.UPGRADES_TIER_3.push("assault")
		Class.marksman.UPGRADES_TIER_3.push("husk")
		Class.hexaTank.UPGRADES_TIER_3.push("breaker")
		// owl
		Class.owl.UPGRADES_TIER_3 = ["griffin", "dual", "megagun",  "musket", "canary", "bentSnipe", "crow", "breaker"]
		Class.assassin.UPGRADES_TIER_3.push("griffin")
		Class.marksman.UPGRADES_TIER_3.push("canary")
		Class.doubleTwin.UPGRADES_TIER_3.push("crow")
		Class.tripleShot.UPGRADES_TIER_3.push("bentSnipe")
Class.machineGun.UPGRADES_TIER_2.push("sabotager", "machinist")
		// sabotager
		Class.sabotager.UPGRADES_TIER_3 = ["foctar", "machShot", "vase", "ultimatum", "shower"]
		Class.gunner.UPGRADES_TIER_3.push("vase")
		Class.minigun.UPGRADES_TIER_3.push("machShot")
		Class.sprayer.UPGRADES_TIER_3.push("ultimatum")
		Class.hexaTank.UPGRADES_TIER_3.push("shower")
		// machinist 
		Class.machinist.UPGRADES_TIER_3 = ["faucile", "megagun", "catastrophe", "splasher", "bentMach", "dyadic", "shower"]
		Class.minigun.UPGRADES_TIER_3.push("megagun")
    Class.gunner.UPGRADES_TIER_3.push("catastrophe")
    Class.sprayer.UPGRADES_TIER_3.push("splasher")
  	Class.tripleShot.UPGRADES_TIER_3.push("bentMach")
		Class.doubleTwin.UPGRADES_TIER_3.push("dyadic")
Class.pounder.UPGRADES_TIER_2.push("obliterator", "dollarer")
		// obliterator
		Class.obliterator.UPGRADES_TIER_3 = ["demolitionist", "architect", "foctar", "exterminator", "eradicator", "mega3"]
		Class.destroyer.UPGRADES_TIER_3.push("demolitionist")
		Class.artillery.UPGRADES_TIER_3.push("foctar")
		Class.launcher.UPGRADES_TIER_3.push("exterminator")
		Class.hexaTank.UPGRADES_TIER_3.push("eradicator")
		// dollarer
		Class.dollarer.UPGRADES_TIER_3 = ["currency", "faucile", "catapult", "bentPound", "extinguisher", "eradicator"]
		Class.destroyer.UPGRADES_TIER_3.push("currency")
		Class.artillery.UPGRADES_TIER_3.push("faucile")
		Class.launcher.UPGRADES_TIER_3.push("catapult")
		Class.doubleTwin.UPGRADES_TIER_3.push("extinguisher")
		Class.tripleShot.UPGRADES_TIER_3.push("bentPound")
Class.trapper.UPGRADES_TIER_2.push("caltropper")
		// caltropper
		Class.caltropper.UPGRADES_TIER_3 = ["creator", "bentTrap", "artist", "hexaTrapper", "bulwark"]
		Class.builder.UPGRADES_TIER_3.push("creator")
		Class.doubleTwin.UPGRADES_TIER_3.push("artist")
		Class.tripleShot.UPGRADES_TIER_3.push("bentTrap")