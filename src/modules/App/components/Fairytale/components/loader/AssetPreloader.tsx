import { useGLTF } from "@react-three/drei";
import { FC, useEffect } from "react";

//Models
const modelPaths = [
  './models/Wolfie_Joy_0512115612_texture.glb',
  './models/pig.glb',
  './models/BrokenHouse_wooden.glb',
  './models/straw_house.glb',
  './models/stick_house.glb',
  './models/stone_house.glb',
  './models/cloud.glb',
  './models/Hill.glb',
  './models/round-tree.glb',
  './models/tree-1.glb',
  './models/wolf_house.glb'
];


export const AssetPreloader: FC = () => {

  // Force preload models
  useEffect(() => {
    console.log('Starting model preload:', modelPaths);
    
    // Force load each model one by one
    modelPaths.forEach((path) => {
      try {
        useGLTF.preload(path);
      } catch (error) {
        console.error(`Error preloading model ${path}:`, error);
      }
    });
  }, []);

  return null;
};