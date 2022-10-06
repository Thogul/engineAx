import { EnemyEntity } from "../entities/enemy.js";

export function spawnEnemySystem(ctx) {
    //spawn an enemy, might want to base spawn time on tickrate like every 30 ticks
    if (ctx.enemies.length >= ctx.maxEnemies) return; //skip if we can't spawn
    if (ctx.ticks % 20 == 0) {
        //Spawn once every 20 ticks aka every sec
        // init a new enemy, remember to send in global context:
        let enemy = new EnemyEntity(ctx);

        // make a spawn point(could be x,y or a vector)
        

        //after combatcomponent is made, maybe enemy could have chance of being ranged?
        
        
        //add enemy to the enemies list in global context
        ctx.enemies.push(enemy);
    }
}