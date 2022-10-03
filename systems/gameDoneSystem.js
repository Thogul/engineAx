export function gameDoneSystem(ctx) {
    if(ctx.player.hp <= 0) {
        alert("You died!");
        location.reload();
    }
    else if(ctx.player.kills >= 1000) {
        alert("you win!");
        location.reload();
    }
}