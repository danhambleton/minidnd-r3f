import React, { useRef, useState, useEffect, useCallback } from 'react'
import { useFrame } from '@react-three/fiber'
import { Image } from '@react-three/drei';
import { TokenController } from '../components/TokenController.js'
import { MapController } from './MapController.js';

export function SceneManager(props) {

    const [sceneDesc, set] = useState({
        baseMap : {
            url : "forgotten_monastary.jpg"
        },
        tokens : [
            {
                key: 0,
                position: [4,0,0]
            },
            {
                key: 1,
                position: [-4,0,0]
            },
        ]
    })
    const handleKeyDown = useCallback(function(e){
        console.log("hello")
        set(sceneDesc = {
            baseMap : {
                url : "docks_of_the_dead.jpg"
            },
            tokens : [
                {
                    key: 0,
                    position: [2,0,0]
                },
                {
                    key: 1,
                    position: [-2,0,0]
                },
            ]
        })
    })
    document.addEventListener('keydown', handleKeyDown)
    return (
        <>
            <MapController url={sceneDesc.baseMap.url}></MapController>
            {sceneDesc.tokens.map((item)=>{
                return <TokenController key={item.key} position={item.position}/>
            })}
        </>
    )
  }