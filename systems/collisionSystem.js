import { damageSystem } from "./damageSystem.js";

export function collisionSystem(ctx) {
    //super basic collision
    //check if player is colliding with monsters
    for(let i=0;i<ctx.enemies.length;i++) {
        let playerPos = ctx.player.movement.position;
        let enemyPos = ctx.enemies[i].movement.position;
        //check if enemybox is within player box
        let diffVec = new THREE.Vector3().copy(playerPos);
        diffVec.sub(enemyPos);
        //console.log(diffVec);
        if(Math.abs(diffVec.x) < 1 && Math.abs(diffVec.y) < 1) {
            //console.log("collided!");
            damageSystem(ctx.player, ctx.enemies[i].combat.damage);
        }
    }

    //call appropriate system for taking damage
    for(let enemy of ctx.enemies){
        for(let bullet of ctx.playerProjectiles){
            let diffVec = new THREE.Vector3().copy(bullet.movement.position);
            diffVec.sub(enemy.movement.position);
            if (diffVec.length() < 1) {
                //console.log("HIT");
                damageSystem(enemy, bullet.combat.damage);
            }
        }
    }

    //check if enemy bullet collides with player
    for(let bullet of ctx.enemyProjectiles){
        let diffVec = new THREE.Vector3().copy(bullet.movement.position);
        diffVec.sub(ctx.player.movement.position);
        if (diffVec.length() < 1) {
            console.log("HIT");
            damageSystem(ctx.player, bullet.combat.damage);
        }
    }
}