export function gameDoneSystem(ctx) {
    if(ctx.player.hp <= 0) {
        ctx.player.hp = 100000;
        alert("You died! you got " + ctx.player.kills + " Kills!");
        location.reload();
    }
    else if(ctx.player.kills >= 1000) {
        ctx.player.hp = 100000; //make player "unkillable", might fix alert death bug idk
        alert("you win! with " + ctx.player.kills + " Kills!");
        location.reload();
    }
}