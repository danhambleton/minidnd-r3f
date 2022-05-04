import React, { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// import { HexGrid } from "./HexGrid";
import { HexMapMaterial } from "./HexMapMaterial";

export function MapController(props) {
    // This reference gives us direct access to the THREE.Mesh object
    const ref = useRef()
    // Hold state for hovered and clicked events
    const [hovered, hover] = useState(false)
    const [clicked, click] = useState(false)
    // Subscribe this component to the render-loop, rotate the mesh every frame
    useFrame((state, delta) => (ref.current.material.needsUpdate = true))
    // Return the view, these are regular Threejs elements expressed in JSX
    const handleKeyDown = (e) => {
      ref.current.position.x += 0.01;
    }
    document.addEventListener('keydown', handleKeyDown)
    return (
      <mesh
        {...props}
        ref={ref}
        scale={clicked ? 1.5 : 1}
        onClick={(event) => click(!clicked)}
        onPointerOver={(event) => hover(true)}
        onPointerOut={(event) => hover(false)}>
        <planeGeometry args={[16, 9]} />
        <hexMapMaterial color={hovered ? 'hotpink' : 'orange'} />
      </mesh>
    )
  }