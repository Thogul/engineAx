//import the game context(basicly everything in one glob)
import { Context } from "./entities/context.js";

//system imports
import { initKeylogs } from "./systems/keyInputSystem.js";
import { playerMovementSystem } from "./systems/playerMovementSystem.js";
import { graphicSystem } from "./systems/graphicSystem.js";
import { physicsSystem } from "./systems/physicsSystem.js";
// import { spawnEnemySystem } from "./systems/spawnEnemySystem.js";
// import { AISystem } from "./systems/AISystem.js";
// import { actionSystem } from "./systems/actionsystem.js";
// import { collisionSystem } from "./systems/collisionSystem.js";
// import { deleteSystem } from "./systems/deleteSystem.js";
// import { gameDoneSystem } from "./systems/gameDoneSystem.js";


//basicly inits everything graphically and game objects.
let gameCtx = new Context();

//sets the keylogging system in motion
initKeylogs(gameCtx);

function mainSystemsLoop() {
    playerMovementSystem(gameCtx);
    physicsSystem(gameCtx);
    //spawnEnemySystem(gameCtx);
    //AISystem(gameCtx);
    //actionSystem(gameCtx);
    //collisionSystem(gameCtx);
    //deleteSystem(gameCtx);
    //gameDoneSystem(gameCtx);
    gameCtx.ticks++;
}

//Start systemloop at 20Hz Start graphixs loop(runs at some fps)
setInterval(mainSystemsLoop, 50);
graphicSystem(gameCtx);