//loader.load( 'models/scoobydooCerealLifeSize.glb'
import { Suspense } from 'react'
import { Canvas } from "@react-three/fiber";
import { useLoader } from '@react-three/fiber'
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const Scooby = () => {
    const texture = useLoader(GLTFLoader, 'models/scoobydooCerealLifeSize.glb')

    return (
        <mesh>
            <primitive object={texture.scene} scale={30} />
        </mesh>
    )
}

export function Scene() {
    return (
        <Canvas camera={{ position: [0, 0, 10] }} style={{height: 500}}>
            <OrbitControls />
            <ambientLight intensity={0.8} />
            <Scooby />
        </Canvas>
    )
}