import { movementComponent } from "../components/movementComponent.js"
import { combatComponent } from "../components/combatComponent.js"

export class PlayerEntity {
    hp
    movement
    combat
    kills
    mesh
    constructor(gameCtx){
        this.hp = 2;
        this.movement = new movementComponent();
        this.combat = new combatComponent();
        this.combat.ranged = true;//player is always ranged
        this.kills = 0;

        //object init goes here....
        const geometry = new THREE.BoxGeometry( 1, 1, 1 );
        const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 , wireframe: true} );
        this.mesh = new THREE.Mesh( geometry, material );
        gameCtx.scene.add(this.mesh);
    };
};