import { EnemyEntity } from "../entities/enemy.js";

export function spawnEnemySystem(ctx) {
    //spawn an enemy, based of some tickrate or something...
    if (ctx.enemies.length >= ctx.maxEnemies) return; //skip if we can't spawn
    if (ctx.ticks % 1 == 0) {
        //Spawn once every 20 ticks aka every sec
        let spawnPoint = new THREE.Vector3(1, 0, 0);
        let axisVec = new THREE.Vector3(0, 0, 1);
        let angle = 2*Math.PI*Math.random();
        spawnPoint.applyAxisAngle(axisVec, angle);
        spawnPoint.multiplyScalar(15); //since vector is 1 long, decide distance by multiplying the desired length
        spawnPoint.add(ctx.player.movement.position);//offset to be around where the player is
        let enemy = new EnemyEntity(ctx);
        enemy.movement.position.copy(spawnPoint);
        let ranged = Math.random() < 0.19; //let enemy be ranged
        if(ranged) {
            enemy.movement.maxSpeed = 0.2;
        }
        enemy.combat.ranged = ranged;
        ctx.enemies.push(enemy);
    }
}