"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";
const Model3D = () => {
  const sceneRef = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);
  useEffect(() => {
    if (!initialized.current) {
      // Create scene
      const scene = new THREE.Scene();

      // Create camera
      const camera = new THREE.PerspectiveCamera(75, 1, 0.5, 1000);
      camera.position.z = 4.5;

      // Create renderer
      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(800, 600);
      if (sceneRef.current) {
        sceneRef.current.appendChild(renderer.domElement);
      }

      // Create a cube
      const geometry = new THREE.SphereGeometry();
      const material = new THREE.MeshBasicMaterial({
        color: 0x3b82f6,
        wireframe: true,
      });
      const cube = new THREE.Mesh(geometry, material);
      cube.scale.set(2, 2, 2);
      scene.add(cube);

      // Animation function
      const animate = () => {
        requestAnimationFrame(animate);

        // Rotate the cube
        if (cube) {
          cube.rotation.x += 0.01;
          cube.rotation.y += 0.01;
        }

        // Render the scene
        renderer.render(scene, camera);
      };

      // Call the animate function
      animate();

      initialized.current = true;

      // Clean up on component unmount
      return () => {
        if (renderer) {
          renderer.dispose();
        }
      };
    }
  }, []);
  return <div ref={sceneRef}></div>;
};

export default Model3D;
