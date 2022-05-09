import React, { useRef, useState, useEffect, useCallback } from 'react'
import { useFrame } from '@react-three/fiber'
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// import { HexGrid } from "./HexGrid";
import { HexMapMaterial } from "./HexMapMaterial";
import { Image } from '@react-three/drei';
import { TokenController } from '../components/TokenController.js'

export function MapController(props) {
    // This reference gives us direct access to the THREE.Mesh object
    const hexGridRef = useRef()
    const madBaseRef = useRef()

    const [tokens, setTokens] = useState([])
    const handleClick = useCallback(function(e){
        // setTokens(tokens = [...tokens,<TokenController key={2} position={e.intersections[0].position}/>])
    })

    // Hold state for hovered and clicked events
    const [hovered, hover] = useState(false)
    const [clicked, click] = useState(false)
    // Subscribe this component to the render-loop, rotate the mesh every frame
    useFrame((state, delta) => (hexGridRef.current.material.needsUpdate = true))
    // Return the view, these are regular Threejs elements expressed in JSX

    const handleKeyDown = (e) => {
    //   ref.current.position.x += 0.01;
        console.log("hello");


    }
    document.addEventListener('keydown', handleKeyDown)
    return (
        <group name={"map-group"}>
            <mesh
                {...props}
                ref={hexGridRef}
                name={'hex-grid'}
                scale={clicked ? 1 : 1}
                onClick={handleClick}
                onPointerOver={(event) => hover(true)}
                onPointerOut={(event) => hover(false)}>
                <planeGeometry args={[16, 9]} />
                <hexMapMaterial color={hovered ? 'hotpink' : 'orange'} />
            </mesh>
            <Image 
            ref={madBaseRef} 
            name={'base-map'}
            url={props.url}  
            scale={10} 
            position={[0, 0, -0.01]}/>
            {tokens}
        </group>
    )
  }