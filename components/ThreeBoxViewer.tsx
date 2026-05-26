import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

interface BoxProps {
  width: number;
  height: number;
  depth: number;
  color?: string;
  isIridescent?: boolean;
}

const MagneticBox = ({ width, height, depth, color = '#f5f5dc', isIridescent = false }: BoxProps) => {
  const meshRef = useRef<THREE.Mesh>(null!);

  const scaleX = width / 10;
  const scaleY = height / 10;
  const scaleZ = depth / 10;

  return (
    <mesh ref={meshRef} castShadow receiveShadow scale={[scaleX, scaleY, scaleZ]}>
      <boxGeometry args={[1, 1, 1]} />
      {isIridescent ? (
        <meshPhysicalMaterial 
          color={color} 
          metalness={0.1} 
          roughness={0.4}
          iridescence={1.0}
          iridescenceIOR={1.3}
          iridescenceThicknessRange={[100, 400]}
          clearcoat={0.1}
        />
      ) : (
        <meshStandardMaterial color={color} metalness={0.1} roughness={0.5} />
      )}
    </mesh>
  );
};

const ThreeBoxViewer = ({ width, height, depth, color, isIridescent }: BoxProps) => {
  return (
    <div className="w-full h-[400px] bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[5, 5, 5]} fov={50} />
        <OrbitControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 1.75} />
        
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} castShadow intensity={2} />
        <pointLight position={[-10, -10, -10]} intensity={1} />
        
        <Environment preset="studio" />
        
        <MagneticBox width={width} height={height} depth={depth} color={color} isIridescent={isIridescent} />
        
        <ContactShadows 
          position={[0, -1, 0]} 
          opacity={0.4} 
          scale={20} 
          blur={2} 
          far={4.5} 
        />
        
        <gridHelper args={[20, 20, 0x888888, 0xcccccc]} position={[0, -1, 0]} />
      </Canvas>
    </div>
  );
};

export default ThreeBoxViewer;
