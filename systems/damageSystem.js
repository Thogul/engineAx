export function damageSystem(entity, damage) {
    //console.log(entity.hp);
    if(entity.combat.immunity > 0) {return;}
    entity.hp -= damage;
    entity.combat.immunity = entity.combat.maxImmunity;
}