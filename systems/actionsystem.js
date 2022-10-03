import { Projectile } from "../entities/projectile.js";

export function actionSystem(ctx) {
    //player actions:

    let keys = ctx.keys;
    //if(keys.j && (ctx.ticks % 20 == 0)) {
    if(keys.atk && ctx.player.combat.cd == 0){
        //shooting
        let bullet = new Projectile(ctx);
        bullet.movement.position.copy(ctx.player.movement.position);
        let aimVec = new THREE.Vector3().copy(ctx.mouse);
        aimVec.normalize();
        //console.log(aimVec);
        aimVec.setLength(bullet.movement.maxAcc);
        bullet.movement.acc.copy(aimVec);
        ctx.playerProjectiles.push(bullet);
        ctx.player.combat.cd = ctx.player.combat.attackCd;
    }

    //enemyActions
    for(let enemy of ctx.enemies) {
        if (enemy.combat.ranged && enemy.combat.cd == 0) {
            let bullet = new Projectile(ctx);
            bullet.movement.maxSpeed = 0.5;
            bullet.lifetime = 100;
            bullet.combat.damage = 1;
            bullet.mesh.material.color.set(0xffffff);
            bullet.movement.position.copy(enemy.movement.position);
            let aimVec = new THREE.Vector3().copy(ctx.player.movement.position);
            aimVec.sub(enemy.movement.position);
            aimVec.normalize();
            aimVec.setLength(bullet.movement.maxAcc);
            bullet.movement.acc.copy(aimVec);
            ctx.enemyProjectiles.push(bullet);
            enemy.combat.cd = enemy.combat.attackCd;
        }
    }
}