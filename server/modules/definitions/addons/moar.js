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
        POSITION: [15, 7, 1, x, y, angle, delay],
    },
    {
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
        POSITION: [20, 8, 1, x, y, angle, delay],
        PROPERTIES: {
    
        }
    }
}
const makeGun = ({ x = 0, y = 0, angle = 0, delay = 0 }) => {
    return {
        POSITION: [20, 8, 1, x, y, angle, delay],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
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
      	makeTrapGun({ y: t }),
      	makeTrapGun({ y: -t, delay: 0.5 })
    ]
}
// upgrade paths
Class.sniper.UPGRADES_TIER_2.push("degrader", "owl")
		Class.degrader.UPGRADES_TIER_3 = ["rustage", "prey", "machShot", "assault", "husk", "breaker"]
		Class.assassin.UPGRADES_TIER_3.push("rustage")
		Class.hunter.UPGRADES_TIER_3.push("prey")
		Class.rifle.UPGRADES_TIER_3.push("assault")
		Class.marksman.UPGRADES_TIER_3.push("husk")
Class.machineGun.UPGRADES_TIER_2.push("machinist")
Class.pounder.UPGRADES_TIER_2.push("dollarer")
Class.trapper.UPGRADES_TIER_2.push("caltropper")