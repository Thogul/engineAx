
export function AISystem(ctx) {
    //Make enemies walk towards you slowly
    const playerPos = ctx.player.movement.position;
    let enemies = ctx.enemies;

    for (let enemy of enemies) {
        //if enemy is ranged, try to move towards a distance away from player
        //find vector towards player, make it the length of max speed
        //and add it to the enemy
        let vectorToPlayer = new THREE.Vector3().copy(playerPos);
        vectorToPlayer.sub(enemy.movement.position);
        if(enemy.combat.ranged) {
            //if enemy i ranged, try to stay a distance away from player
            // NEEDS BETTER LOGIC
            let vectorToPoint = new THREE.Vector3().copy(vectorToPlayer);
            vectorToPoint.multiplyScalar(-1);
            vectorToPoint.normalize();
            vectorToPoint.multiplyScalar(10);
            vectorToPlayer.copy(vectorToPoint);
            vectorToPlayer.sub(enemy.movement.position);
        }
        vectorToPlayer.normalize();
        vectorToPlayer.multiplyScalar(enemy.movement.maxAcc);
        //console.log(vectorToPlayer);
        
        enemy.movement.acc.copy(vectorToPlayer);
    }
}