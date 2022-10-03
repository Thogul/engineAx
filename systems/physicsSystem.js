export function physicsSystem(ctx) {
    let friction = 1.2;
    //update player speed and position
    ctx.player.movement.speed.add(ctx.player.movement.acc);

    //apply some friction:
    //let friction = new THREE.Vector3(0.01, 0.01, 0.01);
    ctx.player.movement.speed.divideScalar(friction);
    if ( ctx.player.movement.speed.length() > ctx.player.movement.maxSpeed ) {
        ctx.player.movement.speed.setLength(ctx.player.movement.maxSpeed);
    }
    ctx.player.movement.position.add(ctx.player.movement.speed);

    //enemy movement now
    for (let enemy of ctx.enemies) {
        enemy.movement.speed.add(enemy.movement.acc);
        enemy.movement.speed.divideScalar(friction); //add friction lik everything else
        if(enemy.movement.speed.length() > enemy.movement.maxSpeed) {
            enemy.movement.speed.setLength(enemy.movement.maxSpeed);
        }
        enemy.movement.position.add(enemy.movement.speed);
    }

    for (let bullet of ctx.playerProjectiles) {
        bullet.movement.speed.add(bullet.movement.acc);
        bullet.movement.speed.divideScalar(friction);
        if(bullet.movement.speed.length() > bullet.movement.maxSpeed) {
            bullet.movement.speed.setLength(bullet.movement.maxSpeed);
        }
        bullet.movement.position.add(bullet.movement.speed);
    }

    for (let bullet of ctx.enemyProjectiles) {
        bullet.movement.speed.add(bullet.movement.acc);
        bullet.movement.speed.divideScalar(friction);
        if(bullet.movement.speed.length() > bullet.movement.maxSpeed) {
            bullet.movement.speed.setLength(bullet.movement.maxSpeed);
        }
        bullet.movement.position.add(bullet.movement.speed);
    }

    //cooldowns/lifetime reductions
    if(ctx.player.combat.cd > 0){ctx.player.combat.cd--}
    if(ctx.player.combat.immunity > 0){ctx.player.combat.immunity--}
    for(let bullet of ctx.playerProjectiles) {
        if (bullet.lifetime > 0){bullet.lifetime--}
    }
    for(let bullet of ctx.enemyProjectiles){
        if(bullet.lifetime > 0){bullet.lifetime--}
    }
    //tick down enemy combat immunity
    for(let enemy of ctx.enemies) {
        if (enemy.combat.immunity > 0){enemy.combat.immunity--}
        if (enemy.combat.cd > 0){enemy.combat.cd--}
    }
}