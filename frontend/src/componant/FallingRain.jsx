"use client"
import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';

const FallingRain = () => {
  const canvasRef = useRef(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [scene, setScene] = useState(null);
  const [camera, setCamera] = useState(null);
  const [renderer, setRenderer] = useState(null);

  useEffect(() => {
    if (canvasRef.current) {
      setWidth(canvasRef.current.offsetWidth);
      setHeight(canvasRef.current.offsetHeight);

      // Create the scene, camera, and renderer
      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0x000000); // Black background
      const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({
        canvas: canvasRef.current,
        antialias: true,
      });

      setScene(scene);
      setCamera(camera);
      setRenderer(renderer);

      // Create the grid of squares
      const grid = new THREE.GridHelper(15, 20);
      scene.add(grid);

      // Create the rain drops
      const rainDrops = [];
      for (let i = 0; i < 100; i++) {
        const drop = new THREE.Mesh(
          new THREE.SphereGeometry(0.1, 32, 32),
          new THREE.MeshBasicMaterial({ color: getRandomColor() })
        );
        drop.position.x = Math.random() * 15 - 7.5;
        drop.position.y = Math.random() * 20 - 10;
        drop.position.z = 0;
        scene.add(drop);
        rainDrops.push(drop);
      }

      // Animate the rain drops
      function animate() {
        requestAnimationFrame(animate);
        rainDrops.forEach((drop) => {
          drop.position.y -= 0.1;
          if (drop.position.y < -10) {
            drop.position.y = 10;
          }
        });
        renderer.render(scene, camera);
      }
      animate();
    }
  }, [canvasRef]);

  const getRandomColor = () => {
    const r = Math.random() * 255;
    const g = Math.random() * 255;
    const b = Math.random() * 255;
    return `rgb(${r}, ${g}, ${b})`;
  };

  return (
    <canvas ref={canvasRef} width={width} height={height} style={{ backgroundColor: 'black' }} />
  );
};

export default FallingRain;