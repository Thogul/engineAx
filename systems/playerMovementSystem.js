
export function playerMovementSystem(ctx) {
    let player = ctx.player;

    let newAccel = new THREE.Vector3(0, 0, 0);

    //dirty check all keys and decide acceleration vector
    let keys = ctx.keys;

    //forward backwards check
    if( keys.w ) {
        newAccel.y = ctx.player.movement.maxAcc;
    }
    else if( keys.s ) {
        newAccel.y = -ctx.player.movement.maxAcc;
    }
    
    //Left right check
    if( keys.d ) {
        newAccel.x = ctx.player.movement.maxAcc;
    }
    else if( keys.a ) {
        newAccel.x = -ctx.player.movement.maxAcc;
    }

    player.movement.acc.copy(newAccel);
}