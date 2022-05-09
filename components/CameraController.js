import React, { useEffect } from "react";
import ReactDOM from 'react-dom'
import { useThree } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'


export function CameraController (props) {
//   useEffect(() => {
//     console.log('Control style changed to: ', props.controlStyle)
//   }, [props.controlStyle])

//   if (props.controlStyle === 'orbit') {
//     return <OrbitControls rotateSpeed={2} />
//   }
  return <OrbitControls makeDefault rotateSpeed={2} />
}