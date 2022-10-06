
export function playerMovementSystem(ctx) {
    let player = ctx.player;

    // the new acceleration vector
    let newAccel = new THREE.Vector3(0, 0, 0);

    // Check all keys pressed, add some force to the newAccel vector

    // Player copies the new accel vector
    player.movement.acc.copy(newAccel);
}