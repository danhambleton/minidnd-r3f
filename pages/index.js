import { createRoot } from 'react-dom/client'
import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { AssetMenu } from '../components/AssetMenu.js'
import { CameraController } from '../components/CameraController.js'
import { MapController } from '../components/MapController.js'

// function Box(props) {
//   // This reference gives us direct access to the THREE.Mesh object
//   const ref = useRef()
//   // Hold state for hovered and clicked events
//   const [hovered, hover] = useState(false)
//   const [clicked, click] = useState(false)
//   // Subscribe this component to the render-loop, rotate the mesh every frame
//   useFrame((state, delta) => (ref.current.rotation.x += 0.01))
//   // Return the view, these are regular Threejs elements expressed in JSX
//   const handleKeyDown = (e) => {
//     ref.current.position.x += 0.01;
//   }
//   document.addEventListener('keydown', handleKeyDown)
//   return (
//     <mesh
//       {...props}
//       ref={ref}
//       scale={clicked ? 1.5 : 1}
//       onClick={(event) => click(!clicked)}
//       onPointerOver={(event) => hover(true)}
//       onPointerOut={(event) => hover(false)}>
//       <boxGeometry args={[2, 2, 2]} />
//       <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
//     </mesh>
//   )
// }

export default function Main() {
    return (
        <div className="myclass">
            <Canvas style={{ height: '100vh', backgroundColor: 'steelblue' }}>
                <CameraController />
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <MapController position={[-1.2, 0, 0]} />
            </Canvas>

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