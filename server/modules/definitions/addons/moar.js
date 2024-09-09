const { combineStats, makeAuto, makeTurret, makeOver, makeDeco, makeGuard, makeBird, makeMulti, makeRadialAuto } = require('../facilitators.js');
const { base, statnames, gunCalcNames, dfltskl, smshskl } = require('../constants.js');
const g = require('../gunvals.js');
// references
const makeSnipeGun = ({ x = 0, y = 0, angle = 0, delay = 0 }) => {
    return {
        POSITION: [24, 8.5, 1, x, y, angle, delay],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
            TYPE: "bullet",
        }
    }
}
const makeMachineGunGun = ({ width = 0, x = 0, y = 0, angle = 0, delay = 0 }) => {
    return {
        POSITION: [12, width, 1.4, x + 8, y, angle, delay],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.machineGun]),
            TYPE: "bullet",
        }
    }
}
const makePoundGun = ({ x = 0, y = 0, angle = 0, delay = 0 }) => {
    return {
        POSITION: [20.5, 12, 1, x, y, angle, delay],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder]),
            TYPE: "bullet",
        }
    }
}
const makeTrapGun = ({ x = 0, y = 0, angle = 0, delay = 0 }) => {
    return {
      	POSITION: [3, 7, 1.7, x + 15, y, angle, delay],
      	PROPERTIES: {
        		SHOOT_SETTINGS: combineStats([g.trap]),
          	TYPE: "trap",
          	STAT_CALCULATOR: "trap"
        }
    }
}
const makeTrapGun2 = ({ x = 0, y = 0, angle = 0, delay = 0 }) => {
    return {
        POSITION: [15, 7, 1, x, y, angle, delay],
    }
}
const makeAssGun = ({ x = 0, y = 0, angle = 0, delay = 0 }) => { // to sny immature idiot: i called it assgun cause ass was a shortened version of (ass)assin
    return {
        POSITION: [27, 8, 1, x, y, angle, delay],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin]),
            TYPE: "bullet",
        }
    }
}
const makeMarksGun = ({ x = 0, y = 0, angle = 0, delay = 0 }) => {
    return {
        POSITION: [5, 8.5, 1.3, x + 8, y, angle, delay],
    }
}
const makeMarksGun2 = ({ x = 0, y = 0, angle = 0, delay = 0 }) => {
    return {
        POSITION: [24, 8.5, 1, x, y, angle, delay],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, { pen: 2 }]),
            TYPE: "bullet",
        }
    }
}
const makeMinigunGun = ({ length = 0, x = 0, y = 0, angle = 0, delay = 0 }) => {
    return {
        POSITION: [length + 21, 8, 1, x, y, angle, delay],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minigun]),
            TYPE: "bullet",
        }
    }
}
const makeGunnerGun = ({ length = 0, x = 0, y = 0, angle = 0, delay = 0 }) => {
    return {
        POSITION: [length + 12, 3.5, 1, x, y, angle, delay],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, {speed: 1.2}]),
            TYPE: "bullet",
        }
    }
}
const makeSprayGun = ({ x = 0, y = 0, angle = 0, delay = 0 }) => {
    return {
        POSITION: [18, 7, 1, x, y, angle, delay],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.lowPower, g.pelleter, { recoil: 1.15}]),
            TYPE: "bullet",
        }
    }
}
const makeDestGun = ({ x = 0, y = 0, angle = 0, delay = 0 }) => {
    return {
        POSITION: [21, 14, 1, x, y, angle, delay],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.destroyer]),
            TYPE: "bullet",
        }
    }
}
const makeLaunchGun = ({ x = 0, y = 0, angle = 0, delay = 0 }) => {
    return {
        POSITION: [10, 9, 1, 9 + x, y, angle, delay]
    }
}
const makeLaunchGun2 = ({ x = 0, y = 0, angle = 0, delay = 0 }) => {
    return {
        POSITION: [17, 13, 1, x, y, angle, delay],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.launcher]),
            TYPE: "minimissile",
          	STAT_CALCULATOR: "sustained"
        }
    }
}
const makeArtGun = ({ x = 0, y = 0, angle = 0, delay = 0 }) => {
    return {
        POSITION: [19, 12, 1, x, y, angle, delay],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.artillery]),
            TYPE: "bullet",
          	LABEL: "Heavy"
        }
    }
}
const makeArtGunSide = ({ x = 0, y = 0, angle = 0, delay = 0 }) => {
    return {
        POSITION: [17, 3, 1, x, y, angle, delay],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.artillery]),
            TYPE: "bullet",
          	LABEL: "Secondary"
        }
    }
}
const makeBuildGun = ({ x = 0, y = 0, angle = 0, delay = 0 }) => {
    return {
        POSITION: [18, 12, 1, x, y, angle, delay],
    }
}
const makeBuildGun2 = ({ x = 0, y = 0, angle = 0, delay = 0 }) => {
    return {
        POSITION: [2, 12, 1.1, x + 18, y, angle, delay],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.setTrap]),
            TYPE: "setTrap",
          	STAT_CALCULATOR: "block"
        }
    }
}
// flanks
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
      	makeSnipeGun({ y: t }),
      	makeSnipeGun({ y: -t, delay: 0.5 })
    ]
}
Class.machinist = {
  	PARENT: "machineGun",
  	LABEL: "Machinist",
  	GUNS: [
      	makeMachineGunGun({ width: 7, y: t, x: -4, angle: 8}),
      	makeMachineGunGun({ width: 7, y: -t, x: -4, angle: -8, delay: 0.5 })
    ]
}
Class.dollarer = {
  	PARENT: "pounder",
  	LABEL: "Dollarer",
  	GUNS: [
      	{
          	POSITION: [6, 25, 0, -6, 0, 0, 0]
        },
      	makePoundGun({ y: t + 1 }),
      	makePoundGun({ y: -t - 1, delay: 0.5})
    ]
}
Class.caltropper = { // i will not call it wark, cry about it
		PARENT: "trapper",
  	LABEL: "Caltropper",
  	GUNS: [
      	makeTrapGun2({ y: t, angle: 8 }),
      	makeTrapGun2({ y: -t, angle: -8 }),
      	makeTrapGun({ y: t, angle: 8 }),
      	makeTrapGun({ y: -t, angle: -8, delay: 0.5 })
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
      	makeAssGun({ y: t - 1 }),
      	makeAssGun({ y: -t + 1, delay: 0.5 }),
      	{
      			POSITION: [10, 17, -1.4, 3, 0, 0, 0]
      	}
    ]
}
Class.bentSnipe = {
  	PARENT: "sniper",
  	LABEL: "Bent-Snipe",
  	GUNS: [
      	makeSnipeGun({ x: -2, y: -2, angle: -17, delay: 0.5 }),
      	makeSnipeGun({ x: -2, y: 2, angle: 17, delay: 0.5}),
      	makeSnipeGun({})
    ]
}
Class.canary = {
  	PARENT: "marksman",
  	LABEL: "Canary",
  	GUNS: [
      	makeMarksGun({ y: t }),
      	makeMarksGun({ y: -t }),
      	makeMarksGun({ y: t, x: 5 }),
      	makeMarksGun({ y: -t, x: 5 }),
      	makeMarksGun({ y: t, x: 10 }),
      	makeMarksGun({ y: -t, x: 10 }),
      	makeMarksGun2({ y: t }),
      	makeMarksGun2({ y: -t, delay: 0.5 })
    ]
}
Class.crow = makeMulti("owl", 2, "Crow")
// machinist upgrades
Class.megagun = {
  	PARENT: "minigun",
  	LABEL: "Megagun",
  	GUNS: [
      	makeMinigunGun({ y: t }),
      	makeMinigunGun({ y: -t, delay: 1/6 }),
      	makeMinigunGun({ length: -2, y: t, delay: 2/6 }),
      	makeMinigunGun({ length: -2, y: -t, delay: 3/6 }),
      	makeMinigunGun({ length: -4, y: t, delay: 4/6 }),
      	makeMinigunGun({ length: -4, y: -t, delay: 5/6})
    ]
}
Class.catastrophe = {
  	PARENT: "gunner",
		LABEL: "Catastrophe",
  	GUNS: [
      	makeGunnerGun({ length: -2, y: -8, angle: -8 }),
      	makeGunnerGun({ length: -2, y: 8, angle: 8 }),
      	makeGunnerGun({ y: 7.25, delay: 1/3 }),
      	makeGunnerGun({ y: -7.25, delay: 1/3 }),
      	makeGunnerGun({ length: 4, y: 3.75, delay: 2/3 }),
      	makeGunnerGun({ length: 4, y: -3.75, delay: 2/3 })
    ]
}
Class.splasher = {
  	PARENT: "sprayer",
  	LABEL: "Splasher",
  	GUNS: [
      	makeSprayGun({ y: t, angle: 8 }),
      	makeSprayGun({ y: -t, angle: -8, delay: 0.5 }),
      	makeMachineGunGun({ width: 7, y: t, x: -4, angle: 8}),
      	makeMachineGunGun({ width: 7, y: -t, x: -4, angle: -8, delay: 0.5 })
    ]
}
Class.bentMach = {
  	PARENT: "machineGun",
  	LABEL: "Bent-Mach",
  	GUNS: [
      	makeMachineGunGun({ width: 7, y: t, x: -4, angle: 8 }),
      	makeMachineGunGun({ width: 7, y: -t, x: -4, angle: -8, delay: 0.5 }),
      	makeMachineGunGun({ width: 10 })
    ]
}
Class.dyadic = makeMulti("machinist", 2, "Dyadic")
// dollarer upgrades
Class.currency = {
  	PARENT: "destroyer",
  	LABEL: "Currency",
  	GUNS: [
      	{
          	POSITION: [6, 28, 0, -6, 0, 0, 0]
        },
      	makeDestGun({ y: 7 }),
      	makeDestGun({ y: -7, delay: 0.5 })
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
      	makeLaunchGun({ y: 6.5, angle: 7 }),
      	makeLaunchGun({ y: -6.5, angle: -7 }),
      	makeLaunchGun2({ y: 6.5, angle: 7 }),
      	makeLaunchGun2({ y: -6.5, angle: -7, delay: 0.5 })
    ]
}
Class.bentPound = {
  	PARENT: "pounder",
  	LABEL: Math.random() < 0.001 ? "Bent-💷" : "Bent-Pound",
  	GUNS: [
      	makePoundGun({ x: -2, y: -2, angle: -17, delay: 0.5 }),
      	makePoundGun({ x: -2, y: 2, angle: 17, delay: 0.5 }),
      	makePoundGun({})
    ]
}
Class.faucile = {
  	PARENT: "artillery",
  	LABEL: "Faucile",
  	GUNS: [
      	{
          	POSITION: [6, 28.4, 0, -6, 0, 0, 0]
        },
      	makeArtGunSide({ y: t * 2.4 }),
      	makeArtGunSide({ y: -t * 2.4, delay: 0.5 }),
      	makeArtGun({ y: t + 1 }),
      	makeArtGun({ y: -t - 1, delay: 0.5 })
    ]
}
Class.extinguisher = makeMulti("dollarer", 2, "Extinguisher")
// caltropper upgrades
Class.fungus = {
  	PARENT: "trapper",
  	LABEL: "Fungus",
  	GUNS: [
      	makeTrapGun2({ x: -2, y: -2, angle: -17 }),
      	makeTrapGun2({ x: -2, y: 2, angle: 17 }),
      	makeTrapGun({ x: -2, y: -2, angle: -17, delay: 0.5 }),
      	makeTrapGun({ x: -2, y: 2, angle: 17, delay: 0.5 }),
      	makeTrapGun2({}),
      	makeTrapGun({})
    ]
}
Class.creator = {
  	PARENT: "builder",
  	LABEL: "Creator",
  	GUNS: [
      	makeBuildGun({ angle: 45 }),
      	makeBuildGun({ angle: -45 }),
      	makeBuildGun2({ angle: 45 }),
      	makeBuildGun2({ angle: -45, delay: 0.5 })
    ]
}
Class.artist = makeMulti("caltropper", 2, "artist")
// remove turret from hexa trapper and remove septa trapper because I said so
Class.hexaTrapper.TURRETS = []
Class.triTrapper.UPGRADES_TIER_3 = ["fortress", "hexaTrapper", "architect"]
// 🖕 septa trapper, never missed ya, you were just a carbon copy of hexa trapper.
// regards, anguish.
// autos (oh boy the amount of makeAutos is just making me insane)
Class.Tturret = makeTurret("twin")
Class.Sturret = makeTurret("sniper")
Class.MGturret = makeTurret("machineGun")
Class.Pturret = makeTurret("pounder")
// upgrade paths
Class.sniper.UPGRADES_TIER_2.push("degrader", "owl")
		// degrader
		Class.degrader.UPGRADES_TIER_3 = ["rustage", "prey", "machShot", "assault", "husk", "breaker"]
		Class.assassin.UPGRADES_TIER_3.push("rustage")
		Class.hunter.UPGRADES_TIER_3.push("prey")
		Class.rifle.UPGRADES_TIER_3.push("assault")
		Class.marksman.UPGRADES_TIER_3.push("husk")
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
		// dollarer
		Class.dollarer.UPGRADES_TIER_3 = ["currency", "faucile", "catapult", "bentPound", "extinguisher", "eradicator"]
		Class.destroyer.UPGRADES_TIER_3.push("currency")
		Class.artillery.UPGRADES_TIER_3.push("faucile")
		Class.launcher.UPGRADES_TIER_3.push("catapult")
		Class.doubleTwin.UPGRADES_TIER_3.push("extinguisher")
		Class.tripleShot.UPGRADES_TIER_3.push("bentPound")
Class.trapper.UPGRADES_TIER_2.push("caltropper")
		// caltropper
		Class.caltropper.UPGRADES_TIER_3 = ["creator", "fungus", "artist"]