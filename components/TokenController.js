import React, { useRef, useState, useEffect, useCallback } from 'react'
import { useGLTF, TransformControls } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { TextureLoader } from 'three'
import { HexGrid } from './HexGrid'
import * as THREE from "three";

export function TokenController(props) {

    const gltf = useGLTF('DwarfFighter4.glb')

    // This reference gives us direct access to the THREE.Mesh object
    const tokenModelGroup = useRef()
    const transfromControls = useRef()

    const handleDraggingChanged = useCallback(function(e){

        //snap object to hex
        var hexGrid = new HexGrid();
        var sp = new THREE.Vector3(
            tokenModelGroup.current.position.x, 
            tokenModelGroup.current.position.y,
             0.0);
        var newPos = hexGrid.HexCenterFromPoint(sp, 0.3);
        tokenModelGroup.current.position.x = newPos.x;
        tokenModelGroup.current.position.y = newPos.y;

    })

    useEffect(() => {
        if (transfromControls.current) {
            
            transfromControls.current.addEventListener('dragging-changed', handleDraggingChanged);
            
            if(!clicked)
            {
                transfromControls.current.enabled = false;
                transfromControls.current.detach();    
            }
            else
            {
                transfromControls.current.attach(tokenModelGroup.current)
                transfromControls.current.enabled = true;
            }
        }
      })

    // Hold state for hovered and clicked events
    const [hovered, hover] = useState(false)
    const [clicked, click] = useState(false)
    // Subscribe this component to the render-loop, rotate the mesh every frame
    // useFrame((state, delta) => (hexGridRef.current.material.needsUpdate = true))
    // Return the view, these are regular Threejs elements expressed in JSX
    const handleKeyDown = (e) => {
    //   ref.current.position.x += 0.01;
    }
    document.addEventListener('keydown', handleKeyDown)
    return (
        <TransformControls object={tokenModelGroup} mode="translate" ref={transfromControls}>
            <mesh
                {...props}
                ref={tokenModelGroup}
                name={'token-hit-box'}
                scale={clicked ? 1 : 1}
                onClick={(event) => {
                    click(!clicked);
                }}
                onPointerOver={(event) => hover(true)}
                onPointerOut={(event) => {
                    hover(false)
                }}>
                {/* <boxGeometry args={[2, 2, 4]} />
                <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} transparent={true} opacity={0.2} /> */}
                <primitive 
                    object={gltf.scene.clone()} 
                    position={[0, 0, 0]} 
                    scale={0.05}
                    rotation={[Math.PI/2.0, 0, 0]}
                />
            </mesh>
        </TransformControls>
    )
  }