
import { extend } from '@react-three/fiber'
import { shaderMaterial } from '@react-three/drei'
import { mapFragmentShader } from '../shaders/MapFragmentShader';
import { mapVertexShader } from '../shaders/MapVertexShader';
import * as THREE from "three";


const HexMapMaterial = shaderMaterial(
  { 
    u_token_position : new THREE.Vector3(0,0,0),
    u_hex_fade_distance : 1000,
    u_grid_scale : 1,
    u_grid_alpha : 0.2,
    u_grid_spacing :  0.01,
    blending: THREE.NormalBlending,
    transparent: true,
  },
  // vertex shader
  mapVertexShader,
  // fragment shader
  mapFragmentShader
);

extend({ HexMapMaterial })

 
 
 