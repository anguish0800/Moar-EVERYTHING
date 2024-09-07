const { combineStats, makeAuto, makeOver, makeDeco, makeGuard, makeBird, makeMulti, makeRadialAuto } = require('../facilitators.js');
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
          	POSITION: [6, 25, -0.4, -6, 0, 0, 0]
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
          	POSITION: [6, 17, -0.4, -9, 0, 0, 0]
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
Class.crow = makeMulti("owl", 2, "crow")
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
// upgrade paths
Class.sniper.UPGRADES_TIER_2.push("degrader", "owl")
		// degrader
		Class.degrader.UPGRADES_TIER_3 = ["rustage", "prey", "machShot", "assault", "husk", "breaker"]
		Class.assassin.UPGRADES_TIER_3.push("rustage")
		Class.hunter.UPGRADES_TIER_3.push("prey")
		Class.rifle.UPGRADES_TIER_3.push("assault")
		Class.marksman.UPGRADES_TIER_3.push("husk")
		// owl
		Class.owl.UPGRADES_TIER_3 = ["griffin", "dual", "musket", "canary", "crow", "bentSnipe", "breaker"]
Class.machineGun.UPGRADES_TIER_2.push("sabotager", "machinist")
		// sabotager
		Class.sabotager.UPGRADES_TIER_3 = ["foctar", "machShot", "vase", "ultimatum", "shower"]
		Class.gunner.UPGRADES_TIER_3.push("vase")
		Class.minigun.UPGRADES_TIER_3.push("machShot")
		Class.sprayer.UPGRADES_TIER_3.push("ultimatum")
		// machinist 
		Class.machinist.UPGRADES_TIER_3 = ["megagun"]
Class.pounder.UPGRADES_TIER_2.push("obliterator", "dollarer")
		Class.obliterator.UPGRADES_TIER_3 = ["demolitionist", "architect", "foctar", "exterminator", "eradicator", "mega3"]
		Class.destroyer.UPGRADES_TIER_3.push("demolitionist")
		Class.artillery.UPGRADES_TIER_3.push("foctar")
		Class.launcher.UPGRADES_TIER_3.push("exterminator")
Class.trapper.UPGRADES_TIER_2.push("caltropper")