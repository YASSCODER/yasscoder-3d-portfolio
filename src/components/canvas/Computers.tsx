import React, { Suspense, useEffect, useState } from 'react';
import { Canvas, events } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

interface computerProps {
  isMobile: boolean;
}


const Computers: React.FC<computerProps> = ({ isMobile }) => {
  const computer = useGLTF('../desktop_pc/scene.gltf');
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight 
      position={[-20, 50, 10]} 
      angle={0.12} 
      penumbra={1} 
      intensity={1} 
      castShadow
      shadow-mapSize={1024}
      />
      <primitive object={computer.scene} scale={isMobile ? 0.7 : 0.75} position={isMobile ? [0, -3 -2,2] : [0, -3, -1.5]} rotation={[-0.01, -0.2, -0.1]}/>
    </mesh>
  );
};

const ComputerCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    
    const mediaQuery = window.matchMedia('(max-width: 500px)'); //-> add event listener for changes to the screen size
    setIsMobile(mediaQuery.matches) // -> Set the Initial value of the `IsMobile` start value 

    // Define a callback function to hundle changes to the media query
    const handleMediaQueryChange = (event: { matches: boolean | ((prevState: boolean) => boolean); }) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange); // Add the callback function as a listenner for changes to the mediaQuery

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };

  }, [])
  
  return (
    <Canvas frameloop="demand" shadows camera={{ position: [20, 3, 5], fov: 25 }} gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
      </Suspense>
      <Computers isMobile={isMobile} />
    </Canvas>
  );
};

export default ComputerCanvas;