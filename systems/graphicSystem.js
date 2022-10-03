export function graphicSystem(ctx) {
    requestAnimationFrame( () => {graphicSystem(ctx);} );

    //update meshes with the correct position
    ctx.player.mesh.position.copy(ctx.player.movement.position);
    if(ctx.player.combat.immunity > 0) {ctx.player.mesh.material.color.setHex(0xffffff);}
    else {ctx.player.mesh.material.color.setHex(0x00ff00);}

    for(let enemy of ctx.enemies) {
        enemy.mesh.position.copy(enemy.movement.position);
    }

    for(let bullet of ctx.playerProjectiles) {
        bullet.mesh.position.copy(bullet.movement.position);
    }

    for( let bullet of ctx.enemyProjectiles) {
        bullet.mesh.position.copy(bullet.movement.position);
    }

    //update cam
    //Needs better logic, maybe base acceleration towards target or something
    //not just the length to target/some number...
    let diffTolerance = 1e-4;
    let diffVec = new THREE.Vector3(0, 0, 0);
    diffVec.copy(ctx.player.movement.position);
    diffVec.sub(ctx.camera.position);
    diffVec.z = 0;
    diffVec.divideScalar(30);
    if (diffVec.length() > diffTolerance) {
        ctx.camera.position.add(diffVec);
    }

    ctx.renderer.render( ctx.scene, ctx.camera );
}