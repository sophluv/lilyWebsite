/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: ffish.asia / floraZia.com (https://sketchfab.com/ffishAsia-and-floraZia)
License: CC0-1.0 (http://creativecommons.org/publicdomain/zero/1.0/)
Source: https://sketchfab.com/3d-models/cc0-rip-my-friend-abc1bba2bdac40d0acff87d52a3aa0a7
Title: CC0 | RIP My Friend
*/
"use client"
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Flower(props) {
  const { nodes, materials } = useGLTF('/models/flower-transformed.glb')
  
  const modelRef = useRef()

  // useFrame((state, delta) => {
  //   if (modelRef.current) {
  //     modelRef.current.rotation.y += delta * 0.5; 
  //   }
  // });
  
  return (
    <group {...props} 
    dispose={null}
    ref={modelRef}
    position={[0, -2, 0]}
    rotation={[0,-0.2,0]}
    scale={[30, 30, 30]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials['MRKT058-W01-1-1.001']}
      />
    </group>
  )
}

useGLTF.preload('/models/flower-transformed.glb')