# engineAx
Small js game engine that plays a simple game. Made as ECS practice.

To run, use some form of webhosting like VsCode liveServer, python http.server or something similar.

Check it out at github Pages: [thogul.github.io/engineAx](https://thogul.github.io/engineAx/)


# STEG:
- Legg til player control i playerMovementSystem
- Fyll ut enemy entity
- Spawn enemies gjennom spawnEnemySystem
- Legg til AI(bevege seg mot spilleren)
- Legg til fysikk for enemies så de faktisk flytter på seg

## Åpent
- Legg til en combat component, kan inneholde damage, imunitetstid, slå/skyte cooldown etc
- Legg til collision check så combat kanskje
- Legg til projectile entity
- La spiller skyte prosjektiler
- I collision, sjekk om spiller prosjektiler treffer enemies
- Kanskje enemies kan skyte tilbake?