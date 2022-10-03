export class combatComponent {
    attacktype
    damage
    range
    ranged
    immunity
    maxImmunity
    attackCd
    cd
    constructor(){
        this.damage = 1;
        this.range = 0;
        this.ranged = false;
        this.immunity = 0;
        this.maxImmunity = 20;
        this.cd = 0;
        this.attackCd = 20;
    }
}