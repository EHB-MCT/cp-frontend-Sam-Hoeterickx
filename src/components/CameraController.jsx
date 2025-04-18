// components/CameraController.jsx
import React, { useEffect } from 'react';
import { useThree } from '@react-three/fiber';

function CameraController() {
  const { camera, gl } = useThree();

  useEffect(() => {
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      gl.setSize(window.innerWidth, window.innerHeight);
      gl.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [camera, gl]);

  return null;
}

export default CameraController;