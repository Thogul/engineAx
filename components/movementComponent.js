export class movementComponent {
    position
    speed
    acc
    maxSpeed
    maxAcc
    constructor(){
        this.position = new THREE.Vector3(0, 0, 0);
        this.speed = new THREE.Vector3(0, 0, 0);
        this.acc = new THREE.Vector3(0, 0, 0);
        this.maxSpeed = 0.3;
        this.maxAcc = 0.2;
    }
};