import { useEffect, useRef, Suspense, Component, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei'
import Header from '../components/shared/Header'
import Footer from '../components/shared/Footer'
import '../styles/factory3d.css'

// Error Boundary Component
class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || <CanvasErrorFallback />
    }
    return this.props.children
  }
}

// Factory floor component
function FactoryFloor() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
      <planeGeometry args={[50, 50]} />
      <meshStandardMaterial color="#2a2a2a" roughness={0.8} metalness={0.2} />
    </mesh>
  )
}

// Factory walls
function FactoryWalls() {
  return (
    <>
      {/* Back wall */}
      <mesh position={[0, 5, -25]} receiveShadow>
        <boxGeometry args={[50, 10, 1]} />
        <meshStandardMaterial color="#3a3a3a" roughness={0.7} />
      </mesh>
      {/* Left wall */}
      <mesh position={[-25, 5, 0]} rotation={[0, Math.PI / 2, 0]} receiveShadow>
        <boxGeometry args={[50, 10, 1]} />
        <meshStandardMaterial color="#3a3a3a" roughness={0.7} />
      </mesh>
      {/* Right wall */}
      <mesh position={[25, 5, 0]} rotation={[0, Math.PI / 2, 0]} receiveShadow>
        <boxGeometry args={[50, 10, 1]} />
        <meshStandardMaterial color="#3a3a3a" roughness={0.7} />
      </mesh>
    </>
  )
}

// Conveyor belt
function ConveyorBelt({ position, rotation = 0 }) {
  return (
    <group position={position} rotation={[0, rotation, 0]}>
      <mesh castShadow receiveShadow>
        <boxGeometry args={[8, 0.2, 1]} />
        <meshStandardMaterial color="#4681a8" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[0, 0.3, 0]} castShadow>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshStandardMaterial color="#5ba3d4" />
      </mesh>
    </group>
  )
}

// Spacecraft component (propulsion system part)
function SpacecraftComponent({ position, progress = 0 }) {
  const componentRef = useRef()
  
  useFrame(() => {
    try {
      if (componentRef.current) {
        componentRef.current.rotation.y += 0.01
      }
    } catch (error) {
      // Silently handle animation errors
      console.warn('Spacecraft component animation error:', error)
    }
  })

  return (
    <group ref={componentRef} position={position}>
      {/* Main body */}
      <mesh castShadow>
        <cylinderGeometry args={[0.4, 0.4, 1.5, 16]} />
        <meshStandardMaterial color="#4681a8" metalness={0.9} roughness={0.1} />
      </mesh>
      {/* Top connector */}
      <mesh castShadow position={[0, 0.9, 0]}>
        <cylinderGeometry args={[0.3, 0.4, 0.3, 16]} />
        <meshStandardMaterial color="#5ba3d4" metalness={0.9} roughness={0.1} />
      </mesh>
      {/* Status indicator */}
      <mesh position={[0, 0.75, 0.5]}>
        <sphereGeometry args={[0.1, 8, 8]} />
        <meshStandardMaterial color="#c4da50" emissive="#c4da50" emissiveIntensity={0.8} />
      </mesh>
    </group>
  )
}

// Person sitting in chair
function PersonSitting({ position }) {
  return (
    <group position={position}>
      {/* Chair */}
      <mesh castShadow position={[0, 0.3, 0]}>
        <boxGeometry args={[0.4, 0.6, 0.4]} />
        <meshStandardMaterial color="#3a3a3a" />
      </mesh>
      {/* Chair back */}
      <mesh castShadow position={[0, 0.6, -0.15]}>
        <boxGeometry args={[0.4, 0.4, 0.1]} />
        <meshStandardMaterial color="#3a3a3a" />
      </mesh>
      {/* Person body */}
      <mesh castShadow position={[0, 0.85, 0.05]}>
        <boxGeometry args={[0.3, 0.4, 0.25]} />
        <meshStandardMaterial color="#8b7355" />
      </mesh>
      {/* Person head */}
      <mesh castShadow position={[0, 1.15, 0.05]}>
        <sphereGeometry args={[0.12, 12, 12]} />
        <meshStandardMaterial color="#d4a574" />
      </mesh>
      {/* Arms */}
      <mesh castShadow position={[-0.2, 0.85, 0.1]} rotation={[0, 0, 0.3]}>
        <boxGeometry args={[0.08, 0.3, 0.08]} />
        <meshStandardMaterial color="#8b7355" />
      </mesh>
      <mesh castShadow position={[0.2, 0.85, 0.1]} rotation={[0, 0, -0.3]}>
        <boxGeometry args={[0.08, 0.3, 0.08]} />
        <meshStandardMaterial color="#8b7355" />
      </mesh>
    </group>
  )
}

// Person walking with material
function PersonWalking({ initialX, initialY, initialZ, startPosition, endPosition, speed = 0.5 }) {
  const personRef = useRef()
  const materialRef = useRef()
  
  useFrame((state) => {
    try {
      if (personRef.current && materialRef.current) {
        // Calculate walking path
        const pathLength = Math.abs(endPosition - startPosition)
        const progress = ((state.clock.elapsedTime * speed) % (pathLength * 2))
        let currentX = startPosition
        
        if (progress < pathLength) {
          currentX = startPosition + progress
        } else {
          currentX = endPosition - (progress - pathLength)
        }
        
        personRef.current.position.x = currentX
        materialRef.current.position.x = currentX
        
        // Slight bobbing motion for walking
        const bobAmount = Math.sin(state.clock.elapsedTime * 3) * 0.05
        personRef.current.position.y = initialY + bobAmount
        materialRef.current.position.y = initialY + 0.5 + bobAmount
        personRef.current.position.z = initialZ
        materialRef.current.position.z = initialZ + 0.2
      }
    } catch (error) {
      console.warn('Walking person animation error:', error)
    }
  })

  return (
    <group>
      <group ref={personRef} position={[initialX, initialY, initialZ]}>
        {/* Person body */}
        <mesh castShadow>
          <boxGeometry args={[0.25, 0.5, 0.2]} />
          <meshStandardMaterial color="#8b7355" />
        </mesh>
        {/* Person head */}
        <mesh castShadow position={[0, 0.4, 0]}>
          <sphereGeometry args={[0.1, 12, 12]} />
          <meshStandardMaterial color="#d4a574" />
        </mesh>
        {/* Legs */}
        <mesh castShadow position={[-0.08, -0.3, 0]}>
          <boxGeometry args={[0.08, 0.3, 0.08]} />
          <meshStandardMaterial color="#5a4a3a" />
        </mesh>
        <mesh castShadow position={[0.08, -0.3, 0]}>
          <boxGeometry args={[0.08, 0.3, 0.08]} />
          <meshStandardMaterial color="#5a4a3a" />
        </mesh>
        {/* Arms */}
        <mesh castShadow position={[-0.15, 0.1, 0]} rotation={[0, 0, 0.5]}>
          <boxGeometry args={[0.06, 0.25, 0.06]} />
          <meshStandardMaterial color="#8b7355" />
        </mesh>
        <mesh castShadow position={[0.15, 0.1, 0]} rotation={[0, 0, -0.5]}>
          <boxGeometry args={[0.06, 0.25, 0.06]} />
          <meshStandardMaterial color="#8b7355" />
        </mesh>
      </group>
      {/* Material being carried */}
      <group ref={materialRef} position={[initialX, initialY + 0.5, initialZ + 0.2]}>
        <mesh castShadow>
          <boxGeometry args={[0.3, 0.3, 0.3]} />
          <meshStandardMaterial color="#4681a8" metalness={0.8} />
        </mesh>
      </group>
    </group>
  )
}

// Assembly station for spacecraft subsystems
function AssemblyStation({ position, label, hasPerson = false }) {
  return (
    <group position={position}>
      {/* Workbench */}
      <mesh castShadow receiveShadow position={[0, 0.5, 0]}>
        <boxGeometry args={[4, 1, 2]} />
        <meshStandardMaterial color="#4a4a4a" roughness={0.6} />
      </mesh>
      {/* Tool holder */}
      <mesh castShadow position={[-1.5, 1.2, 0.8]}>
        <boxGeometry args={[0.3, 0.3, 0.3]} />
        <meshStandardMaterial color="#5a5a5a" />
      </mesh>
      {/* Component fixture */}
      <mesh castShadow position={[0, 1.2, 0]}>
        <cylinderGeometry args={[0.5, 0.5, 0.3, 16]} />
        <meshStandardMaterial color="#4681a8" metalness={0.8} />
      </mesh>
      {/* Station label indicator */}
      <mesh position={[0, 2, 0]}>
        <boxGeometry args={[1.5, 0.3, 0.1]} />
        <meshStandardMaterial color="#c4da50" emissive="#c4da50" emissiveIntensity={0.5} />
      </mesh>
      {/* Person sitting at workstation */}
      {hasPerson && <PersonSitting position={[1, 0, 0.5]} />}
    </group>
  )
}

// Continuous flow conveyor system
function FlowConveyor({ position, length = 10, direction = 0 }) {
  const conveyorRef = useRef()
  
  useFrame((state) => {
    try {
      if (conveyorRef.current && conveyorRef.current.children) {
        // Animate conveyor belt texture
        conveyorRef.current.children.forEach((child) => {
          if (child && child.material && child.material.map) {
            child.material.map.offset.x = (state.clock.elapsedTime * 0.1) % 1
          }
        })
      }
    } catch (error) {
      // Silently handle animation errors
      console.warn('Conveyor animation error:', error)
    }
  })

  return (
    <group ref={conveyorRef} position={position} rotation={[0, direction, 0]}>
      {/* Conveyor base */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[length, 0.2, 1.5]} />
        <meshStandardMaterial color="#4681a8" metalness={0.8} roughness={0.2} />
      </mesh>
      {/* Side rails */}
      <mesh castShadow position={[0, 0.3, -0.75]}>
        <boxGeometry args={[length, 0.2, 0.1]} />
        <meshStandardMaterial color="#5a5a5a" />
      </mesh>
      <mesh castShadow position={[0, 0.3, 0.75]}>
        <boxGeometry args={[length, 0.2, 0.1]} />
        <meshStandardMaterial color="#5a5a5a" />
      </mesh>
      {/* Flow indicator lights */}
      {[0, 1, 2, 3, 4].map((i) => (
        <mesh key={i} position={[-length/2 + i * (length/4), 0.4, 0]}>
          <sphereGeometry args={[0.08, 8, 8]} />
          <meshStandardMaterial color="#c4da50" emissive="#c4da50" emissiveIntensity={0.6} />
        </mesh>
      ))}
    </group>
  )
}

// Quality inspection station
function InspectionStation({ position }) {
  return (
    <group position={position}>
      {/* Inspection table */}
      <mesh castShadow receiveShadow position={[0, 0.6, 0]}>
        <boxGeometry args={[3, 1.2, 2]} />
        <meshStandardMaterial color="#3a3a3a" roughness={0.5} />
      </mesh>
      {/* Inspection equipment */}
      <mesh castShadow position={[0, 1.5, 0]}>
        <boxGeometry args={[1, 0.8, 1]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>
      {/* Scanner arm */}
      <mesh castShadow position={[0, 2, 0.5]} rotation={[0.2, 0, 0]}>
        <boxGeometry args={[0.3, 1, 0.3]} />
        <meshStandardMaterial color="#4681a8" metalness={0.9} />
      </mesh>
      {/* Status display */}
      <mesh position={[1.2, 1.5, 0]}>
        <boxGeometry args={[0.5, 0.4, 0.1]} />
        <meshStandardMaterial color="#c4da50" emissive="#c4da50" emissiveIntensity={0.7} />
      </mesh>
    </group>
  )
}

// Material kitting station
function KittingStation({ position }) {
  return (
    <group position={position}>
      {/* Kitting table */}
      <mesh castShadow receiveShadow position={[0, 0.5, 0]}>
        <boxGeometry args={[3, 1, 3]} />
        <meshStandardMaterial color="#4a4a4a" />
      </mesh>
      {/* Component bins */}
      {[-1, 0, 1].map((x, i) => (
        <mesh key={i} castShadow position={[x, 1, 0]}>
          <boxGeometry args={[0.8, 0.8, 0.8]} />
          <meshStandardMaterial color="#5a5a5a" />
        </mesh>
      ))}
      {/* RFID reader */}
      <mesh castShadow position={[0, 1.5, 1]}>
        <boxGeometry args={[0.4, 0.2, 0.4]} />
        <meshStandardMaterial color="#4681a8" metalness={0.9} />
      </mesh>
    </group>
  )
}

// Workstation
function Workstation({ position, hasPerson = false }) {
  return (
    <group position={position}>
      {/* Table */}
      <mesh castShadow receiveShadow position={[0, 0.5, 0]}>
        <boxGeometry args={[3, 1, 2]} />
        <meshStandardMaterial color="#4a4a4a" roughness={0.6} />
      </mesh>
      {/* Monitor */}
      <mesh castShadow position={[0, 1.5, -0.8]}>
        <boxGeometry args={[1.2, 0.8, 0.1]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>
      {/* Screen glow */}
      <mesh position={[0, 1.5, -0.75]}>
        <boxGeometry args={[1, 0.6, 0.05]} />
        <meshStandardMaterial color="#4681a8" emissive="#4681a8" emissiveIntensity={0.5} />
      </mesh>
      {/* Person sitting at workstation */}
      {hasPerson && <PersonSitting position={[1, 0, 0.5]} />}
    </group>
  )
}

// Blinking light component - vivid colors
function BlinkingLight({ position, color, delay = 0 }) {
  const lightRef = useRef()
  
  useFrame((state) => {
    if (lightRef.current) {
      // Blink every 1 second with offset delay - more dramatic
      const blinkSpeed = 1.0
      const intensity = Math.sin((state.clock.elapsedTime + delay) * blinkSpeed * Math.PI * 2) * 0.5 + 0.5
      // Make it more vivid - higher intensity range
      lightRef.current.material.emissiveIntensity = intensity * 2.5 + 0.5
      // Also adjust opacity for more visibility
      lightRef.current.material.opacity = intensity * 0.9 + 0.1
      lightRef.current.material.transparent = true
    }
  })

  return (
    <mesh ref={lightRef} position={position}>
      <sphereGeometry args={[0.12, 12, 12]} />
      <meshStandardMaterial 
        color={color} 
        emissive={color} 
        emissiveIntensity={2.5}
        transparent={true}
        opacity={1}
      />
    </mesh>
  )
}

// Smart rack container
function SmartRack({ position }) {
  return (
    <group position={position}>
      {/* Main container box */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[0.6, 0.4, 0.6]} />
        <meshStandardMaterial color="#4681a8" metalness={0.8} roughness={0.2} />
      </mesh>
      {/* RFID sensor indicator */}
      <mesh position={[0, 0.25, 0.35]}>
        <boxGeometry args={[0.3, 0.1, 0.05]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>
      {/* Status LED */}
      <mesh position={[0.25, 0.25, 0.35]}>
        <sphereGeometry args={[0.03, 8, 8]} />
        <meshStandardMaterial color="#c4da50" emissive="#c4da50" emissiveIntensity={0.5} />
      </mesh>
    </group>
  )
}

// Storage rack with smart racks and blinking lights
function StorageRack({ position }) {
  const shelfCount = 4
  const shelvesPerRack = shelfCount
  
  return (
    <group position={position}>
      {/* Shelves */}
      {[0, 1, 2, 3].map((i) => {
        const shelfY = i * 1.5 + 0.75
        return (
          <group key={i}>
            {/* Shelf platform */}
            <mesh castShadow receiveShadow position={[0, shelfY, 0]}>
              <boxGeometry args={[2, 0.1, 1]} />
              <meshStandardMaterial color="#5a5a5a" metalness={0.7} roughness={0.3} />
            </mesh>
            
            {/* Smart racks on shelf - 3 per shelf */}
            {[-0.6, 0, 0.6].map((x, rackIndex) => (
              <SmartRack key={rackIndex} position={[x, shelfY + 0.25, 0]} />
            ))}
            
            {/* Blinking lights - 2 vivid green and 2 vivid yellow per shelf */}
            <BlinkingLight 
              position={[-0.8, shelfY + 0.15, 0.6]} 
              color="#00ff00" 
              delay={i * 0.2}
            />
            <BlinkingLight 
              position={[0.8, shelfY + 0.15, 0.6]} 
              color="#00ff00" 
              delay={i * 0.2 + 0.5}
            />
            <BlinkingLight 
              position={[-0.8, shelfY + 0.15, -0.6]} 
              color="#ffff00" 
              delay={i * 0.2 + 0.25}
            />
            <BlinkingLight 
              position={[0.8, shelfY + 0.15, -0.6]} 
              color="#ffff00" 
              delay={i * 0.2 + 0.75}
            />
          </group>
        )
      })}
      
      {/* Vertical supports */}
      <mesh castShadow position={[-1, 3, 0]}>
        <boxGeometry args={[0.1, 6, 0.1]} />
        <meshStandardMaterial color="#4a4a4a" />
      </mesh>
      <mesh castShadow position={[1, 3, 0]}>
        <boxGeometry args={[0.1, 6, 0.1]} />
        <meshStandardMaterial color="#4a4a4a" />
      </mesh>
    </group>
  )
}

// Moving component on conveyor
function MovingComponent({ position, index }) {
  const componentRef = useRef()
  const groupRef = useRef()
  
  useFrame((state) => {
    try {
      if (componentRef.current) {
        componentRef.current.rotation.y += 0.02
      }
      if (groupRef.current) {
        const speed = 0.02
        const pathLength = 40
        groupRef.current.position.x = -20 + ((state.clock.elapsedTime * speed + index * 2) % pathLength)
      }
    } catch (error) {
      // Silently handle animation errors
      console.warn('Moving component animation error:', error)
    }
  })

  return (
    <group ref={groupRef} position={position}>
      <group ref={componentRef}>
        <SpacecraftComponent position={[0, 0.3, 0]} />
      </group>
    </group>
  )
}

// Main 3D Scene - Lean Factory Flow for Spacecraft Subsystems
function FactoryScene() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 15, 5]} intensity={1.2} castShadow />
      <pointLight position={[-10, 10, -10]} intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={0.4} />
      
      <FactoryFloor />
      <FactoryWalls />
      
      {/* Lean Factory Flow Layout - Continuous/Synchronous Flow */}
      
      {/* Flow Line 1: Subsystem Assembly Line */}
      {/* Stage 1: Material Kitting */}
      <KittingStation position={[-18, 0, -10]} />
      
      {/* Flow Line 1: Kitting to Assembly */}
      <FlowConveyor position={[-10, 0.3, -10]} length={8} direction={0} />
      <MovingComponent position={[-14, 0.3, -10]} index={0} />
      
      {/* Stage 2: Subsystem Assembly Stations (Continuous Flow) */}
      <AssemblyStation position={[-5, 0, -10]} label="Assembly 1" hasPerson={true} />
      <FlowConveyor position={[-2, 0.3, -10]} length={4} direction={0} />
      <MovingComponent position={[-4, 0.3, -10]} index={1} />
      
      <AssemblyStation position={[3, 0, -10]} label="Assembly 2" hasPerson={true} />
      <FlowConveyor position={[6, 0.3, -10]} length={4} direction={0} />
      <MovingComponent position={[4, 0.3, -10]} index={2} />
      
      {/* Stage 3: Quality Inspection */}
      <InspectionStation position={[12, 0, -10]} />
      <FlowConveyor position={[15, 0.3, -10]} length={4} direction={0} />
      <MovingComponent position={[13, 0.3, -10]} index={3} />
      
      {/* Stage 4: Integration & Testing */}
      <Workstation position={[18, 0, -10]} hasPerson={true} />
      
      {/* Parallel Flow Line (Second Subsystem) */}
      <KittingStation position={[-18, 0, 0]} />
      <FlowConveyor position={[-10, 0.3, 0]} length={8} direction={0} />
      <MovingComponent position={[-14, 0.3, 0]} index={4} />
      <AssemblyStation position={[-5, 0, 0]} label="Assembly 3" hasPerson={true} />
      <FlowConveyor position={[-2, 0.3, 0]} length={4} direction={0} />
      <MovingComponent position={[-4, 0.3, 0]} index={5} />
      <AssemblyStation position={[3, 0, 0]} label="Assembly 4" hasPerson={true} />
      <FlowConveyor position={[6, 0.3, 0]} length={4} direction={0} />
      <MovingComponent position={[4, 0.3, 0]} index={6} />
      <InspectionStation position={[12, 0, 0]} />
      <FlowConveyor position={[15, 0.3, 0]} length={4} direction={0} />
      <MovingComponent position={[13, 0.3, 0]} index={7} />
      <Workstation position={[18, 0, 0]} hasPerson={true} />
      
      {/* Parallel Flow Line (Third Subsystem) */}
      <KittingStation position={[-18, 0, 10]} />
      <FlowConveyor position={[-10, 0.3, 10]} length={8} direction={0} />
      <MovingComponent position={[-14, 0.3, 10]} index={8} />
      <AssemblyStation position={[-5, 0, 10]} label="Assembly 5" hasPerson={true} />
      <FlowConveyor position={[-2, 0.3, 10]} length={4} direction={0} />
      <MovingComponent position={[-4, 0.3, 10]} index={9} />
      <AssemblyStation position={[3, 0, 10]} label="Assembly 6" hasPerson={true} />
      <FlowConveyor position={[6, 0.3, 10]} length={4} direction={0} />
      <MovingComponent position={[4, 0.3, 10]} index={10} />
      <InspectionStation position={[12, 0, 10]} />
      <FlowConveyor position={[15, 0.3, 10]} length={4} direction={0} />
      <MovingComponent position={[13, 0.3, 10]} index={11} />
      <Workstation position={[18, 0, 10]} hasPerson={true} />
      
      {/* Walking people moving materials */}
      <PersonWalking initialX={0} initialY={0.3} initialZ={-5} startPosition={-15} endPosition={15} speed={0.3} />
      <PersonWalking initialX={0} initialY={0.3} initialZ={5} startPosition={15} endPosition={-15} speed={0.4} />
      <PersonWalking initialX={-10} initialY={0.3} initialZ={0} startPosition={-20} endPosition={20} speed={0.35} />
      <PersonWalking initialX={10} initialY={0.3} initialZ={-8} startPosition={20} endPosition={-20} speed={0.25} />
      <PersonWalking initialX={5} initialY={0.3} initialZ={8} startPosition={-18} endPosition={18} speed={0.3} />
      
      {/* Storage racks with smart racks - Multiple locations throughout factory */}
      <StorageRack position={[20, 0, -5]} />
      <StorageRack position={[20, 0, 5]} />
      <StorageRack position={[-22, 0, -5]} />
      <StorageRack position={[-22, 0, 5]} />
      <StorageRack position={[-22, 0, 0]} />
      <StorageRack position={[20, 0, 0]} />
      <StorageRack position={[0, 0, -22]} />
      <StorageRack position={[0, 0, 22]} />
      <StorageRack position={[-10, 0, -15]} />
      <StorageRack position={[10, 0, -15]} />
      <StorageRack position={[-10, 0, 15]} />
      <StorageRack position={[10, 0, 15]} />
      
      {/* Final assembly area for spacecraft integration */}
      <mesh castShadow receiveShadow position={[0, 1, -18]}>
        <boxGeometry args={[6, 2, 4]} />
        <meshStandardMaterial color="#4681a8" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Status indicators showing synchronous flow */}
      {[-15, -5, 5, 15].map((x, i) => (
        <mesh key={i} position={[x, 8, 0]}>
          <boxGeometry args={[2, 0.3, 0.1]} />
          <meshStandardMaterial color="#c4da50" emissive="#c4da50" emissiveIntensity={0.6} />
        </mesh>
      ))}
      
      {/* Environment - wrapped in Suspense to prevent blocking render */}
      <Suspense fallback={null}>
        <Environment preset="warehouse" />
      </Suspense>
    </>
  )
}

// Error fallback component
function CanvasErrorFallback() {
  return (
    <div style={{ 
      width: '100%', 
      height: '100%', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      color: '#ffffff',
      background: 'linear-gradient(135deg, #0a0e27 0%, #1d2c67 100%)'
    }}>
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <h3>Unable to load 3D visualization</h3>
        <p>Please refresh the page or try again later.</p>
      </div>
    </div>
  )
}

function Factory3D() {
  const [isFullscreen, setIsFullscreen] = useState(false)

  useEffect(() => {
    document.body.className = 'factory3d-body'
    return () => {
      document.body.className = ''
    }
  }, [])

  useEffect(() => {
    // Prevent body scroll when in fullscreen
    if (isFullscreen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isFullscreen])

  const openFullscreen = () => {
    setIsFullscreen(true)
  }

  const closeFullscreen = () => {
    setIsFullscreen(false)
  }

  // Render the 3D Canvas component
  const renderCanvas = () => (
    <ErrorBoundary fallback={<CanvasErrorFallback />}>
      <Suspense fallback={
        <div style={{ 
          width: '100%', 
          height: '100%', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          color: '#ffffff'
        }}>
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading 3D scene...</span>
          </div>
        </div>
      }>
        <Canvas
          shadows
          camera={{ position: [15, 15, 15], fov: 50 }}
          gl={{ 
            antialias: true,
            alpha: false,
            powerPreference: "high-performance",
            preserveDrawingBuffer: true
          }}
          dpr={[1, 2]}
          frameloop="always"
        >
          <PerspectiveCamera makeDefault position={[15, 15, 15]} fov={50} />
          <FactoryScene />
          <OrbitControls
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
            minDistance={5}
            maxDistance={50}
          />
        </Canvas>
      </Suspense>
    </ErrorBoundary>
  )

  return (
    <div className="factory3d-page">
      <Header variant="demo1" />
      
      <div className="factory3d-container">
        <div className="factory3d-header">
          <div className="container">
            <h1 className="factory3d-title">3D Factory Visualization</h1>
            <p className="factory3d-subtitle">
              Lean Manufacturing Flow for Spacecraft Subsystems Production
            </p>
          </div>
        </div>
        
        <div className="factory3d-canvas-wrapper">
          {renderCanvas()}
          <button 
            className="factory3d-fullscreen-btn"
            onClick={openFullscreen}
            aria-label="Open fullscreen"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
            </svg>
          </button>
        </div>
        
        <div className="factory3d-info">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <h3>Interactive Controls</h3>
                <ul>
                  <li>Left Click + Drag: Rotate</li>
                  <li>Right Click + Drag: Pan</li>
                  <li>Scroll: Zoom</li>
                </ul>
              </div>
              <div className="col-md-4">
                <h3>Lean Flow Elements</h3>
                <ul>
                  <li>Material Kitting Stations</li>
                  <li>Assembly Workstations</li>
                  <li>Continuous Flow Conveyors</li>
                  <li>Quality Inspection Points</li>
                  <li>Integration & Testing</li>
                </ul>
              </div>
              <div className="col-md-4">
                <h3>Spacecraft Manufacturing</h3>
                <ul>
                  <li>Synchronous Flow Production</li>
                  <li>Parallel Subsystem Lines</li>
                  <li>Zero Backtracking Design</li>
                  <li>Real-time WIP Tracking</li>
                  <li>End-to-End Traceability</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Overlay */}
      {isFullscreen && (
        <div className="factory3d-fullscreen-overlay">
          <button 
            className="factory3d-close-btn"
            onClick={closeFullscreen}
            aria-label="Close fullscreen"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          <div className="factory3d-fullscreen-canvas">
            {renderCanvas()}
          </div>
        </div>
      )}

      <Footer variant="demo1" />
    </div>
  )
}

export default Factory3D

