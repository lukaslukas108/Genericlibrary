import * as THREE from 'three';

export class Ocean {
    constructor(scene) {
        // Create a blue plane for the ocean
        const geometry = new THREE.PlaneGeometry(20, 20);
        const material = new THREE.MeshBasicMaterial({ 
            color: 0x0077be,
            side: THREE.DoubleSide 
        });
        this.mesh = new THREE.Mesh(geometry, material);
        this.mesh.position.z = -5;
        
        scene.add(this.mesh);
    }
}