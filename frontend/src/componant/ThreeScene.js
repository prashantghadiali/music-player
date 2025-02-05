import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeScene = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        // Scene
        const scene = new THREE.Scene();

        // Camera
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5;

        // Renderer
        const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
        renderer.setSize(window.innerWidth, window.innerHeight);

        // Geometry
        const geometry = new THREE.BoxGeometry();

        // Material
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

        // Mesh
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        // Animation Loop
        const animate = () => {
            requestAnimationFrame(animate);

            // Rotate cube
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;

            renderer.render(scene, camera);
        };

        animate();

        // Handle window resize
        const handleResize = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            renderer.setSize(width, height);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        };

        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            // Optionally, clean up scene objects here
        };
    }, []);

    return <canvas ref={canvasRef} />;
};

export default ThreeScene;