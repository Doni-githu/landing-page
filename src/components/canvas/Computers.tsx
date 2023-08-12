import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { ChangeEvent, Suspense, useEffect, useState } from "react";

import CanvasLoader from "../Loader"
import { IComputersProps } from "../../interfaces/types";

const Computers = ({ isMobile }: IComputersProps) => {
  const computer = useGLTF('./desktop_pc/scene.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={1.5} groundColor="black" />
      <pointLight intensity={0.80} />
      <spotLight
        position={[-20, 50, 8]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.45 : 0.75}
        position={isMobile ? [0, -2.5, -1] : [0, -3.5, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};


const ComputersCanvas = () => {
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
      <Canvas frameloop="demand" shadows camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}>
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Computers isMobile={isMobile} />
        </Suspense>
        <Preload all />
      </Canvas>
    )
};

export default ComputersCanvas;