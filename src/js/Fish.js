import * as THREE from 'three';

export class Fish {
    constructor(points, color, speed) {
        this.points = points;
        this.speed = speed;

        // Create simple fish geometry
        const geometry = new THREE.BufferGeometry();
        
        // Create fish shape vertices
        const vertices = new Float32Array([
            -0.5, 0.0, 0.0,    // tail
            0.5, 0.0, 0.0,     // nose
            0.0, 0.3, 0.0,     // top fin
            0.0, -0.3, 0.0,    // bottom fin
        ]);

        geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
        geometry.setIndex([0, 1, 2, 0, 1, 3]);

        const material = new THREE.MeshBasicMaterial({ 
            color: color,
            side: THREE.DoubleSide
        });

        this.mesh = new THREE.Mesh(geometry, material);
        
        // Random starting position
        this.mesh.position.set(
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
            0
        );

        this.direction = Math.random() > 0.5 ? 1 : -1;
        if (this.direction < 0) {
            this.mesh.scale.x = -1;
        }
    }

    update() {
        this.mesh.position.x += this.speed * this.direction;
        
        // If fish goes off screen, reset position
        if (Math.abs(this.mesh.position.x) > 10) {
            this.direction *= -1;
            this.mesh.scale.x *= -1;
            this.mesh.position.x = this.direction * 10;
            this.mesh.position.y = (Math.random() - 0.5) * 10;
        }
    }
}