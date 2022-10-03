import { combatComponent } from "../components/combatComponent.js";
import { movementComponent } from "../components/movementComponent.js";

export class Projectile {
    movement
    lifetime = 20;
    combat
    constructor(ctx) {
        this.movement = new movementComponent();
        this.movement.maxSpeed = 2;
        this.combat = new combatComponent();
        this.combat.damage = 5;

        //three.js stuff
        const geometry = new THREE.BoxGeometry( 0.5, 0.5, 0.5 );
        const material = new THREE.MeshBasicMaterial( { color: 0x0000ff , wireframe: false} );
        this.mesh = new THREE.Mesh( geometry, material );
        ctx.scene.add(this.mesh);
    }
}