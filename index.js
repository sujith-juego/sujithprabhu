
/*  
- Every time this ability is activated throughout the battle the
damage % will keep increasing by 15%. The first time this attack happens it
will deal 90% damage, second time will be 90+15= 105%, third time will be
105+15= 120% damage1 Like reaction.1has context menuComposeParagraph
*/
const damageData = require('./battle.json')
const fs = require('fs')
const path = process.cwd() + "/battle.json"

const damage = async function (details) {
    const array = details
    array.forEach(element => {
        if (element.attack == 0) {
            element.attack = 90
        } else {
            // console.log(attack)
            element.attack += 15
        }
    })
    // console.log(details)
    const jsonString = JSON.stringify(damageData, null, 2)
    fs.writeFile(path, jsonString, (err) => {
        if (!(err)) console.log(damageData)
    })

}

damage(damageData)









// Output
/*
target: opponentPrefixKey + enemy.user_hero_position,
damage: damageToOpponent,
enemy_recieved_damage: damageToOpponent,
attack_type: GLB.ATTACK_TYPE.ABILITY,
defence: GLB.DEFENCE_TYPE.NO_DEFENCE,
ability_type: GLB.ABILITIES.BOMB_IT_UP,
ability_details: [],
*/


//Input
/*{
    "user_hero_id": 5,
    "master_hero_id": 5,
    "user_hero_level": 1,
    "user_hero_tier": 1,
    "gear_chest": {},
    "gear_weapon": {},
    "user_hero_position": 1,
    "master_class": 3,
    "master_faction": 3,
    "health": 150,
    "defence": 0,
    "attack": 100,
    "accuracy": 0,
    "recovery": 0,
    "is_alive": true,
    "game_health": 150,
    "game_energy": 1,
    "game_heals": 0,
    "is_freezed": false,
    "crit_available_round": 0,
    "crit_additional_percent": 0.2,
    "dodge_available": 1,
    "dodge_available_round": 3,
    "block_available": 2,
    "block_available_round": 99,
    "block_percent": 25
}*/


