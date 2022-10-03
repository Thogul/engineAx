export function initKeylogs(ctx) {
    addEventListener('keydown', (event) => {logKeyDown(event, ctx)});
    addEventListener('keyup', (event) => {logKeyUp(event, ctx)});
    addEventListener('mousemove', (event) => {logMouse(event, ctx)});
}

function logMouse(event, ctx) {
    ctx.mouse.x = event.clientX - (window.innerWidth/2);
    ctx.mouse.y = (window.innerHeight/2) - event.clientY;
    //console.log(ctx.mouse);
}

function logKeyDown(event, ctx) {
    if (event.repeat) return;
    switch (event.key) {
        case "w": ctx.keys.w = true; break;
        case "a": ctx.keys.a = true; break;
        case "s": ctx.keys.s = true; break;
        case "d": ctx.keys.d = true; break;
        case " ": ctx.keys.atk = true; break;
    }
    //console.log(ctx.keys);
}

function logKeyUp(event, ctx) {
    switch (event.key) {
        case "w": ctx.keys.w = false; break;
        case "a": ctx.keys.a = false; break;
        case "s": ctx.keys.s = false; break;
        case "d": ctx.keys.d = false; break;
        case " ": ctx.keys.atk = false; break;
    }
    //console.log(ctx.keys);
}