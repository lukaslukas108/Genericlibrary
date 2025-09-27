import * as THREE from 'three';
import { Fish } from './Fish.js';

export class GameManager {
    constructor(scene, camera) {
        this.scene = scene;
        this.camera = camera;
        this.score = 0;
        this.fishes = [];
        this.scoreElement = document.getElementById('scoreValue');
        
        // Create raycaster for mouse interaction
        this.raycaster = new THREE.Raycaster();
        this.mouse = new THREE.Vector2();

        // Add click event listener
        window.addEventListener('click', (event) => this.onMouseClick(event));
        
        // Create initial fishes
        this.createFishes();
    }

    createFishes() {
        const fishTypes = [
            { points: 10, color: 0xff0000, speed: 0.02 },
            { points: 20, color: 0x00ff00, speed: 0.03 },
            { points: 30, color: 0xffff00, speed: 0.04 },
            { points: 40, color: 0xff00ff, speed: 0.05 },
            { points: 50, color: 0x00ffff, speed: 0.06 }
        ];

        fishTypes.forEach(type => {
            const fish = new Fish(type.points, type.color, type.speed);
            this.scene.add(fish.mesh);
            this.fishes.push(fish);
        });
    }

    onMouseClick(event) {
        this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

        this.raycaster.setFromCamera(this.mouse, this.camera);
        const intersects = this.raycaster.intersectObjects(
            this.fishes.map(fish => fish.mesh)
        );

        if (intersects.length > 0) {
            const clickedFish = this.fishes.find(
                fish => fish.mesh === intersects[0].object
            );
            if (clickedFish) {
                this.score += clickedFish.points;
                this.scoreElement.textContent = this.score;
            }
        }
    }

    update() {
        this.fishes.forEach(fish => fish.update());
    }
}