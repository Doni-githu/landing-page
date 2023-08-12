import React, { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei'

import CanvasLoader from "../Loader"
interface BallCanvasProps {
  icon: string
}
const Ball = ({ icon }: BallCanvasProps) => {
  const [decal] = useTexture([icon])

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color={"#fff8eb"}
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          map={decal}
          rotation={[2 * Math.PI, 0, 6.25]}
          position={[0, 0, 1]}
        />
      </mesh>
    </Float>
  )
}

const BallCanvas = ({ icon }: BallCanvasProps) => {
  const [isMobile, setMobile] = useState(false)
  useEffect(() => {
    const mediaQuary = window.matchMedia('(max-width: 500px)');


    setMobile(mediaQuary.matches)

    const handleMediaQuaryChange = (event: MediaQueryListEvent) => {
      setMobile(event.matches)
    }

    mediaQuary.addEventListener("change", handleMediaQuaryChange)

    return () => {
      mediaQuary.removeEventListener("change", handleMediaQuaryChange)
    }
  }, [])

  return (
    <Canvas
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
        />
        <Ball icon={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default BallCanvas