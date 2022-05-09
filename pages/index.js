import { createRoot } from 'react-dom/client'
import React, { useRef, useState, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere } from '@react-three/drei'
import { AssetMenu } from '../components/AssetMenu.js'
import { CameraController } from '../components/CameraController.js'
import { MapController } from '../components/MapController.js'
import * as THREE from "three";
import { SceneManager } from '../components/SceneManager.js'

// make sure we are z up
THREE.Object3D.DefaultUp.set(0, 0, 1)

export default function Main() {

    
    return (
        <div className="myclass">
          <Suspense>
            <Canvas style={{ height: '100vh', backgroundColor: 'steelblue' }}>
                <CameraController />
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <SceneManager position={[0, 0, 0]} />

            </Canvas>
            </Suspense>

            <AssetMenu></AssetMenu>

            <style jsx>{`

                .myclass {
                    min-height: 100vh;
                }
                `
            }</style>
        </div>

    )
};