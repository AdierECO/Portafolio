import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import { Group, Mesh } from 'three';

const RealisticSolarSystem: React.FC = () => {
  const groupRef = useRef<Group>(null);
  const planetsRef = useRef<Mesh[]>([]);
  const saturnGroupRef = useRef<Group>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    // Mover planetas en órbitas circulares alrededor del sol a diferentes velocidades
    if (planetsRef.current.length > 0) {
      // Velocidades orbitales únicas para cada planeta (más rápido cerca del sol)
      const orbitSpeeds = [1.2, 0.9, 0.8, 0.7, 0.6, 0.5, 0.45, 0.40];
      
      // Radios de las órbitas (distancia al sol)
      const orbitRadii = [4, 6, 8, 10, 13, 16, 19, 21];
      
      // Pequeñas inclinaciones orbitales para hacerlo más realista
      const orbitInclinations = [0.1, 0.2, 0.1, 0.3, 0.4, 0.5, 0.6, 0.7];

      // Mover los primeros 5 planetas (Mercurio a Júpiter)
      for (let i = 0; i < 5; i++) {
        if (planetsRef.current[i]) {
          const speed = orbitSpeeds[i];
          const radius = orbitRadii[i];
          const inclination = orbitInclinations[i];
          
          const angle = time * speed;
          const x = Math.cos(angle) * radius;
          const z = Math.sin(angle) * radius;
          const y = Math.sin(angle * 0.5) * inclination;
          
          planetsRef.current[i].position.set(x, y, z);
          planetsRef.current[i].rotation.y += 0.005 * (i + 1);
        }
      }

      // Mover Saturno (índice 5) - que es un grupo
      if (planetsRef.current[5] && saturnGroupRef.current) {
        const speed = orbitSpeeds[5];
        const radius = orbitRadii[5];
        const inclination = orbitInclinations[5];
        
        const angle = time * speed;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        const y = Math.sin(angle * 0.5) * inclination;
        
        // Mover el grupo de Saturno
        saturnGroupRef.current.position.set(x, y, z);
        // Rotar el planeta Saturno dentro del grupo
        if (planetsRef.current[5]) {
          planetsRef.current[5].rotation.y += 0.005 * 6;
        }
      }

      // Mover Urano y Neptuno (índices 6 y 7)
      for (let i = 6; i < 8; i++) {
        if (planetsRef.current[i]) {
          const speed = orbitSpeeds[i];
          const radius = orbitRadii[i];
          const inclination = orbitInclinations[i];
          
          const angle = time * speed;
          const x = Math.cos(angle) * radius;
          const z = Math.sin(angle) * radius;
          const y = Math.sin(angle * 0.5) * inclination;
          
          planetsRef.current[i].position.set(x, y, z);
          planetsRef.current[i].rotation.y += 0.005 * (i + 1);
        }
      }
    }
  });

  return (
    <group ref={groupRef}>
      {/* Sol - Estrella realista */}
      <Sphere args={[2, 64, 64]} position={[0, 0, 0]}>
        <meshStandardMaterial
          emissive="#ff8c00"
          emissiveIntensity={2}
          color="#ff6b00"
          roughness={0.8}
          metalness={0.1}
        />
      </Sphere>

      {/* Mercurio - Órbita rápida */}
      <Sphere 
        ref={el => { if (el) planetsRef.current[0] = el; }}
        args={[0.4, 32, 32]} 
      >
        <meshStandardMaterial
          color="#a8a8a8"
          roughness={0.9}
          metalness={0.3}
        />
      </Sphere>

      {/* Venus */}
      <Sphere 
        ref={el => { if (el) planetsRef.current[1] = el; }}
        args={[0.6, 32, 32]} 
      >
        <meshStandardMaterial
          color="#e6e6c8"
          roughness={0.8}
          metalness={0.2}
        />
      </Sphere>

      {/* Tierra */}
      <Sphere 
        ref={el => { if (el) planetsRef.current[2] = el; }}
        args={[0.7, 32, 32]}
      >
        <meshStandardMaterial
          color="#2a5c9a"
          roughness={0.7}
          metalness={0.1}
        />
      </Sphere>

      {/* Marte */}
      <Sphere 
        ref={el => { if (el) planetsRef.current[3] = el; }}
        args={[0.5, 32, 32]} 
      >
        <meshStandardMaterial
          color="#c1440e"
          roughness={0.9}
          metalness={0.4}
        />
      </Sphere>

      {/* Júpiter */}
      <Sphere 
        ref={el => { if (el) planetsRef.current[4] = el; }}
        args={[1.2, 32, 32]} 
      >
        <meshStandardMaterial
          color="#d8ca9d"
          roughness={0.8}
          metalness={0.2}
        />
      </Sphere>

      {/* Saturno - Con anillos (usando grupo separado) */}
      <group ref={saturnGroupRef}>
        <Sphere 
          ref={el => { if (el) planetsRef.current[5] = el; }}
          args={[1.0, 32, 32]}
        >
          <meshStandardMaterial
            color="#e3d8b0"
            roughness={0.7}
            metalness={0.3}
          />
        </Sphere>
        {/* Anillos */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[1.3, 2.0, 64]} />
          <meshStandardMaterial
            color="#c9b88e"
            roughness={0.6}
            metalness={0.4}
            transparent
            opacity={0.8}
            side={2}
          />
        </mesh>
      </group>

      {/* Urano */}
      <Sphere 
        ref={el => { if (el) planetsRef.current[6] = el; }}
        args={[0.8, 32, 32]} 
      >
        <meshStandardMaterial
          color="#a6d1e4"
          roughness={0.6}
          metalness={0.1}
        />
      </Sphere>

      {/* Neptuno */}
      <Sphere 
        ref={el => { if (el) planetsRef.current[7] = el; }}
        args={[0.8, 32, 32]} 
      >
        <meshStandardMaterial
          color="#3457d5"
          roughness={0.5}
          metalness={0.2}
        />
      </Sphere>

      {/* Órbitas visibles */}
      {[4, 6, 8, 10, 13, 16, 19, 21].map((radius, index) => (
        <mesh key={index} rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[radius - 0.1, radius + 0.1, 64]} />
          <meshBasicMaterial 
            color="#3b82f6" 
            transparent 
            opacity={0.1} 
            side={2} 
          />
        </mesh>
      ))}
    </group>
  );
};

const RealisticPlanetsScene: React.FC = () => {
  return (
    <div className="w-full h-[70vh] min-h-[500px]">
      <Canvas camera={{ position: [0, 25, 25], fov: 60 }}>
        <ambientLight intensity={0.5} color="#404040" />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
        <pointLight position={[0, 0, 0]} intensity={3} color="#ff7b00" distance={35} />

        <RealisticSolarSystem />
        
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          minDistance={10}
          maxDistance={100}
          enableDamping={true}
          dampingFactor={0.05}
        />
      </Canvas>
    </div>
  );
};

export default RealisticPlanetsScene;