export function physicsSystem(ctx) {
    let friction = 1.2;
    //update player speed and position
    ctx.player.movement.speed.add(ctx.player.movement.acc);

    //apply some friction:
    ctx.player.movement.speed.divideScalar(friction);

    // If the player has accelerated past max speed, convert to max speed
    if ( ctx.player.movement.speed.length() > ctx.player.movement.maxSpeed ) {
        ctx.player.movement.speed.setLength(ctx.player.movement.maxSpeed);
    }
    // Add the speed to the position
    ctx.player.movement.position.add(ctx.player.movement.speed);

    //Physics for enemies
    for (let enemy of ctx.enemies) {
        // Apply acceleration to the enemies speed
        
        // check speed(is is going to fast?), if it is clamp it or scale it somehow

        //add the speed vector to the movement component
    }

    // Physics for projectiles?

    //cooldowns/lifetime reductions after all physics

}