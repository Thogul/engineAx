//import * as THREE from 'three';

import { Keys } from "../components/keysComponent.js";
import { PlayerEntity } from "./player.js"

export class Context {
    player;
    enemies = [];
    maxEnemies = 30;
    playerProjectiles = [];
    enemyProjectiles = [];
    keys = new Keys();
    mouse = new THREE.Vector3(1, 0, 0);
    scene;
    camera;
    renderer;
    ticks = 0;
    constructor() {
        //init three.js stuff, for visuals
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera( 75, (window.innerWidth-10) / (window.innerHeight-20), 0.1, 1000 );
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(window.innerWidth-10, window.innerHeight-20);
        document.body.appendChild(this.renderer.domElement);

        this.camera.position.z = 15;

        //add flooring...
        const fgeometry = new THREE.PlaneGeometry( 100, 100 );
        const fmaterial = new THREE.MeshBasicMaterial( {color: 0x505050, side: THREE.DoubleSide} );
        const plane = new THREE.Mesh( fgeometry, fmaterial );
        plane.position.z = -0.5;
        this.scene.add( plane );

        //game inits
        this.player = new PlayerEntity(this);
        this.player.combat.attackCd = 3;
    }
}