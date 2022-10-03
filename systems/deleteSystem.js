//checks if lifeticks or hp is 0 or lower, if it is. remove it from the game
export function deleteSystem(ctx) {
    //Loop through enemies
    for(let i=0;i<ctx.enemies.length;i++){
        if(ctx.enemies[i].hp <= 0){
            ctx.scene.remove(ctx.enemies[i].mesh);
            ctx.enemies.splice(i, 1);
            ctx.player.kills++;
        }
    }

    //loop though bullets
    for(let i=0;i<ctx.playerProjectiles.length;i++) {
        //console.log(ctx.projectiles[i].lifetime);
        if(ctx.playerProjectiles[i].lifetime <= 0) {
            ctx.scene.remove(ctx.playerProjectiles[i].mesh);
            ctx.playerProjectiles.splice(i, 1);
        }
    }

    for(let i=0;i<ctx.enemyProjectiles.length;i++) {
        //console.log(ctx.projectiles[i].lifetime);
        if(ctx.enemyProjectiles[i].lifetime <= 0) {
            ctx.scene.remove(ctx.enemyProjectiles[i].mesh);
            ctx.enemyProjectiles.splice(i, 1);
        }
    }

}