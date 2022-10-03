import { movementComponent } from "../components/movementComponent.js"
import { combatComponent } from "../components/combatComponent.js"

export class EnemyEntity {
    hp
    movement
    combat
    mesh
    constructor(ctx) {
        this.hp = 3;
        this.movement = new movementComponent();
        this.movement.maxSpeed = 0.1;
        this.combat = new combatComponent();

        //object init goes here....
        const geometry = new THREE.BoxGeometry( 1, 1, 1 );
        const material = new THREE.MeshBasicMaterial( { color: 0xff0000 , wireframe: true} );
        //const material = new THREE.MeshBasicMaterial( { color: 0xffffff , envMap: textureCube} );
        this.mesh = new THREE.Mesh( geometry, material );
        ctx.scene.add(this.mesh);
    };
}