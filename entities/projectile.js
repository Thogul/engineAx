import { combatComponent } from "../components/combatComponent.js";
import { movementComponent } from "../components/movementComponent.js";

export class Projectile {
    //movement
    //lifetime = 20;
    //combat
    mesh
    constructor(ctx) {

        //three.js stuff
        const geometry = new THREE.BoxGeometry( 0.5, 0.5, 0.5 );
        const material = new THREE.MeshBasicMaterial( { color: 0x0000ff , wireframe: false} );
        this.mesh = new THREE.Mesh( geometry, material );
        ctx.scene.add(this.mesh);
    }
}