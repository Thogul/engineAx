
export function AISystem(ctx) {
    //Make enemies walk towards you slowly
    const playerPos = ctx.player.movement.position;
    let enemies = ctx.enemies;

    for (let enemy of enemies) {
        //find vector towards player, make it the length of max acceleration and make enemies acc that vector
    }
}