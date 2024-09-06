const { combineStats, makeAuto, makeOver, makeDeco, makeGuard, makeBird, makeMulti, makeRadialAuto } = require('../facilitators.js');
const { base, statnames, gunCalcNames, dfltskl, smshskl } = require('../constants.js');
const g = require('../gunvals.js');
// references
const snipeGun = {
  	POSITION: {
      	LENGTH: 24,
      	WIDTH: 8.5,
    },
  	PROPERTIES: {
      	SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
      	TYPE: "bullet"
    }
}
const machineGunGun = {
    POSITION: {
        LENGTH: 12,
        WIDTH: 10,
      	ASPECT: 1.4,
      	X: 8
    },
    PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.machineGun]),
        TYPE: "bullet"
    }
}
const pounderGun = {
    POSITION: {
        LENGTH: 20.5,
        WIDTH: 12
    },
    PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pounder]),
        TYPE: "bullet"
    }
}
const trapperGun = [{
    POSITION: {
        LENGTH: 15,
        WIDTH: 7
    }
}, {
    POSITION: {
        LENGTH: 3,
        WIDTH: 7,
      	ASPECT: 1.7,
      	X: 15
    },
    PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap]),
        TYPE: "trap",
      	STAT_CALCULATOR: "trap"
    }
}]
const assGun = { // to any immature idiot reading this: i named it "assGun" not because of the word "ass" but because "ass" was a shortened version of the word "(ass)assin"
    POSITION: {
        LENGTH: 27,
        WIDTH: 8
    },
    PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin]),
        TYPE: "bullet"
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
Class.owl = { // tank itself
  	PARENT: "sniper",
  	LABEL: "Owl",
  	GUNS: [snipeGun, snipeGun]
}
Class.owl.GUNS[1].Y = 5.5 // twin logic
/*Class.owl.GUNS[2].Y = -5.5*/
// upgrade paths
Class.sniper.UPGRADES_TIER_2.push("degrader", "owl")
		Class.degrader.UPGRADES_TIER_3 = ["rustage", "prey", "machShot", "assault", "husk", "breaker"]
		Class.assassin.UPGRADES_TIER_3.push("rustage")
		Class.hunter.UPGRADES_TIER_3.push("prey")
		Class.rifle.UPGRADES_TIER_3.push("assault")
		Class.marksman.UPGRADES_TIER_3.push("husk")