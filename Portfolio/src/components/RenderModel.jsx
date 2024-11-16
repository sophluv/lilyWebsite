"use client"
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import React from 'react'
import clsx from 'clsx'
import { Environment } from '@react-three/drei'

const RenderModel = ({children, className}) => {
    return (
        <Canvas
        className={clsx("w-screen h-screen -z-10 relative", className)} 
        >
            <Suspense fallback={null}>
                {children}
            </Suspense>
            <Environment preset='night'/>

        </Canvas>
    )
}

export default RenderModel