"use client"

import { Suspense, useRef, useState, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Text, Box, Sphere, Plane, Environment, ContactShadows } from "@react-three/drei"
import type * as THREE from "three"

// Enhanced Animated Coder Character with more movements
function CoderCharacter({ position }: { position: [number, number, number] }) {
  const characterRef = useRef<THREE.Group>(null)
  const leftArmRef = useRef<THREE.Group>(null)
  const rightArmRef = useRef<THREE.Group>(null)
  const headRef = useRef<THREE.Mesh>(null)
  const leftLegRef = useRef<THREE.Group>(null)
  const rightLegRef = useRef<THREE.Group>(null)
  const torsoRef = useRef<THREE.Mesh>(null)

  const [currentAction, setCurrentAction] = useState<"typing" | "thinking" | "stretching" | "drinking">("typing")
  const [actionTimer, setActionTimer] = useState(0)

  useFrame((state) => {
    const time = state.clock.elapsedTime

    // Action switching logic
    if (time - actionTimer > 8) {
      const actions: Array<"typing" | "thinking" | "stretching" | "drinking"> = [
        "typing",
        "thinking",
        "stretching",
        "drinking",
      ]
      const newAction = actions[Math.floor(Math.random() * actions.length)]
      setCurrentAction(newAction)
      setActionTimer(time)
    }

    if (characterRef.current) {
      // Subtle breathing animation
      characterRef.current.position.y = position[1] + Math.sin(time * 2) * 0.02
    }

    if (torsoRef.current) {
      // Torso breathing
      torsoRef.current.scale.y = 1 + Math.sin(time * 2) * 0.02
    }

    // Head movements based on current action
    if (headRef.current) {
      switch (currentAction) {
        case "typing":
          headRef.current.rotation.y = Math.sin(time * 0.5) * 0.1
          headRef.current.rotation.x = -0.1 + Math.sin(time * 0.3) * 0.05
          break
        case "thinking":
          headRef.current.rotation.y = Math.sin(time * 0.2) * 0.3
          headRef.current.rotation.x = -0.2 + Math.sin(time * 0.1) * 0.1
          break
        case "stretching":
          headRef.current.rotation.y = Math.sin(time * 2) * 0.2
          headRef.current.rotation.x = 0.1 + Math.sin(time * 2) * 0.1
          break
        case "drinking":
          headRef.current.rotation.y = -0.3
          headRef.current.rotation.x = 0.2
          break
      }
    }

    // Arm movements based on current action
    const typingSpeed = 3
    const typingTime = time * typingSpeed

    if (leftArmRef.current && rightArmRef.current) {
      switch (currentAction) {
        case "typing":
          leftArmRef.current.rotation.x = -0.5 + Math.sin(typingTime + 0.5) * 0.2
          leftArmRef.current.rotation.z = 0.2 + Math.sin(typingTime + 0.5) * 0.1
          rightArmRef.current.rotation.x = -0.5 + Math.sin(typingTime) * 0.2
          rightArmRef.current.rotation.z = -0.2 + Math.sin(typingTime) * 0.1
          break
        case "thinking":
          leftArmRef.current.rotation.x = -0.3
          leftArmRef.current.rotation.z = 0.1
          rightArmRef.current.rotation.x = -0.8
          rightArmRef.current.rotation.z = -0.5
          rightArmRef.current.rotation.y = 0.3
          break
        case "stretching":
          leftArmRef.current.rotation.x = -1.5 + Math.sin(time * 2) * 0.3
          leftArmRef.current.rotation.z = 1.2
          rightArmRef.current.rotation.x = -1.5 + Math.sin(time * 2) * 0.3
          rightArmRef.current.rotation.z = -1.2
          break
        case "drinking":
          leftArmRef.current.rotation.x = -0.3
          leftArmRef.current.rotation.z = 0.1
          rightArmRef.current.rotation.x = -1.2
          rightArmRef.current.rotation.z = -0.8
          rightArmRef.current.rotation.y = 0.5
          break
      }
    }

    // Leg movements (subtle fidgeting)
    if (leftLegRef.current && rightLegRef.current) {
      leftLegRef.current.rotation.x = Math.sin(time * 0.3) * 0.05
      rightLegRef.current.rotation.x = Math.sin(time * 0.3 + Math.PI) * 0.05
    }
  })

  return (
    <group ref={characterRef} position={position}>
      {/* Body */}
      <Box ref={torsoRef} args={[0.6, 1.2, 0.3]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#2563eb" />
      </Box>

      {/* Head */}
      <Sphere ref={headRef} args={[0.25]} position={[0, 0.8, 0]}>
        <meshStandardMaterial color="#fdbcb4" />
      </Sphere>

      {/* Hair */}
      <Box args={[0.5, 0.2, 0.4]} position={[0, 1, 0]}>
        <meshStandardMaterial color="#4a4a4a" />
      </Box>

      {/* Eyes */}
      <Sphere args={[0.03]} position={[-0.08, 0.85, 0.2]}>
        <meshStandardMaterial color="#000" />
      </Sphere>
      <Sphere args={[0.03]} position={[0.08, 0.85, 0.2]}>
        <meshStandardMaterial color="#000" />
      </Sphere>

      {/* Glasses */}
      <Box args={[0.4, 0.15, 0.02]} position={[0, 0.85, 0.22]}>
        <meshStandardMaterial color="#333" transparent opacity={0.3} />
      </Box>

      {/* Left Arm */}
      <group ref={leftArmRef} position={[-0.4, 0.3, 0]}>
        <Box args={[0.15, 0.8, 0.15]}>
          <meshStandardMaterial color="#2563eb" />
        </Box>
        {/* Left Hand with fingers */}
        <group position={[0, -0.5, 0]}>
          <Sphere args={[0.08]}>
            <meshStandardMaterial color="#fdbcb4" />
          </Sphere>
          {/* Fingers */}
          <Box args={[0.02, 0.1, 0.02]} position={[-0.06, -0.05, 0.06]}>
            <meshStandardMaterial color="#fdbcb4" />
          </Box>
          <Box args={[0.02, 0.1, 0.02]} position={[-0.02, -0.05, 0.08]}>
            <meshStandardMaterial color="#fdbcb4" />
          </Box>
          <Box args={[0.02, 0.1, 0.02]} position={[0.02, -0.05, 0.08]}>
            <meshStandardMaterial color="#fdbcb4" />
          </Box>
          <Box args={[0.02, 0.1, 0.02]} position={[0.06, -0.05, 0.06]}>
            <meshStandardMaterial color="#fdbcb4" />
          </Box>
        </group>
      </group>

      {/* Right Arm */}
      <group ref={rightArmRef} position={[0.4, 0.3, 0]}>
        <Box args={[0.15, 0.8, 0.15]}>
          <meshStandardMaterial color="#2563eb" />
        </Box>
        {/* Right Hand with fingers */}
        <group position={[0, -0.5, 0]}>
          <Sphere args={[0.08]}>
            <meshStandardMaterial color="#fdbcb4" />
          </Sphere>
          {/* Fingers */}
          <Box args={[0.02, 0.1, 0.02]} position={[-0.06, -0.05, 0.06]}>
            <meshStandardMaterial color="#fdbcb4" />
          </Box>
          <Box args={[0.02, 0.1, 0.02]} position={[-0.02, -0.05, 0.08]}>
            <meshStandardMaterial color="#fdbcb4" />
          </Box>
          <Box args={[0.02, 0.1, 0.02]} position={[0.02, -0.05, 0.08]}>
            <meshStandardMaterial color="#fdbcb4" />
          </Box>
          <Box args={[0.02, 0.1, 0.02]} position={[0.06, -0.05, 0.06]}>
            <meshStandardMaterial color="#fdbcb4" />
          </Box>
        </group>
      </group>

      {/* Left Leg */}
      <group ref={leftLegRef} position={[-0.15, -1, 0]}>
        <Box args={[0.15, 0.8, 0.15]}>
          <meshStandardMaterial color="#1f2937" />
        </Box>
        {/* Left Foot */}
        <Box args={[0.15, 0.1, 0.25]} position={[0, -0.5, 0.05]}>
          <meshStandardMaterial color="#000" />
        </Box>
      </group>

      {/* Right Leg */}
      <group ref={rightLegRef} position={[0.15, -1, 0]}>
        <Box args={[0.15, 0.8, 0.15]}>
          <meshStandardMaterial color="#1f2937" />
        </Box>
        {/* Right Foot */}
        <Box args={[0.15, 0.1, 0.25]} position={[0, -0.5, 0.05]}>
          <meshStandardMaterial color="#000" />
        </Box>
      </group>
    </group>
  )
}

// Enhanced Computer Screen with dynamic content and click interaction
function ComputerScreen({ position }: { position: [number, number, number] }) {
  const screenRef = useRef<THREE.Mesh>(null)
  const [currentProject, setCurrentProject] = useState(0)
  const [codeLines, setCodeLines] = useState(0)
  const [projectTimer, setProjectTimer] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const projects = [
    {
      title: "E-commerce Website",
      code: `// Building online store
const ShoppingCart = () => {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  
  const addToCart = (product) => {
    setItems([...items, product]);
    calculateTotal();
  };
  
  return (
    <div className="cart">
      {items.map(item => (
        <CartItem key={item.id} {...item} />
      ))}
      <Total amount={total} />
    </div>
  );
};

export default ShoppingCart;`,
      color: "#00ff00",
    },
    {
      title: "Restaurant Website",
      code: `// Restaurant booking system
const ReservationForm = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(2);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const booking = { date, time, guests };
    
    try {
      await api.createReservation(booking);
      showSuccess('Table booked!');
    } catch (error) {
      showError('Booking failed');
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <DatePicker value={date} onChange={setDate} />
      <TimePicker value={time} onChange={setTime} />
      <GuestSelector value={guests} onChange={setGuests} />
      <button type="submit">Book Table</button>
    </form>
  );
};`,
      color: "#ff6b35",
    },
    {
      title: "Business Portfolio",
      code: `// Portfolio showcase
const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState('all');
  
  useEffect(() => {
    fetchProjects().then(setProjects);
  }, []);
  
  const filteredProjects = projects.filter(
    project => filter === 'all' || project.category === filter
  );
  
  return (
    <div className="portfolio">
      <FilterTabs 
        active={filter} 
        onChange={setFilter}
        options={['all', 'web', 'mobile', 'design']}
      />
      <ProjectGrid projects={filteredProjects} />
    </div>
  );
};

// Responsive design
@media (max-width: 768px) {
  .portfolio { padding: 1rem; }
}`,
      color: "#4f46e5",
    },
    {
      title: "WhatsApp Integration",
      code: `// WhatsApp business integration
const WhatsAppButton = ({ phoneNumber, message }) => {
  const formatPhone = (phone) => {
    return phone.replace(/\D/g, '');
  };
  
  const createWhatsAppURL = () => {
    const formattedPhone = formatPhone(phoneNumber);
    const encodedMessage = encodeURIComponent(message);
    return \`https://wa.me/\${formattedPhone}?text=\${encodedMessage}\`;
  };
  
  const handleClick = () => {
    window.open(createWhatsAppURL(), '_blank');
    analytics.track('whatsapp_click', {
      phone: phoneNumber,
      source: 'website'
    });
  };
  
  return (
    <button 
      onClick={handleClick}
      className="whatsapp-btn"
    >
      <WhatsAppIcon />
      Chat with us
    </button>
  );
};`,
      color: "#25d366",
    },
  ]

  // Handle click to change project
  const handleScreenClick = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length)
    setCodeLines(0)
    setProjectTimer(Date.now() / 1000) // Reset timer on manual change
  }

  useFrame((state) => {
    const time = state.clock.elapsedTime

    // Switch projects every 12 seconds if not manually changed recently
    if (time - projectTimer > 12) {
      setCurrentProject((prev) => (prev + 1) % projects.length)
      setCodeLines(0)
      setProjectTimer(time)
    }

    // Simulate typing by gradually revealing code lines
    const project = projects[currentProject]
    const totalLines = project.code.split("\n").length
    const newLines = Math.min(totalLines, Math.floor(((time - projectTimer) * 2) % (totalLines + 2)))
    setCodeLines(newLines)
  })

  const currentProjectData = projects[currentProject]
  const visibleCode = currentProjectData.code.split("\n").slice(0, codeLines).join("\n")

  return (
    <group position={position}>
      {/* Monitor Base */}
      <Box args={[0.1, 0.3, 0.3]} position={[0, -0.15, 0]}>
        <meshStandardMaterial color="#333" />
      </Box>

      {/* Monitor Stand */}
      <Box args={[0.05, 0.2, 0.05]} position={[0, -0.4, 0]}>
        <meshStandardMaterial color="#333" />
      </Box>

      {/* Screen Frame */}
      <Box args={[0.05, 1.2, 0.8]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#1a1a1a" />
      </Box>

      {/* Interactive Screen */}
      <Plane
        ref={screenRef}
        args={[0.7, 1.1]}
        position={[0.03, 0, 0]}
        onClick={handleScreenClick}
        onPointerOver={() => setIsHovered(true)}
        onPointerOut={() => setIsHovered(false)}
      >
        <meshStandardMaterial
          color="#0a0a0a"
          emissive={isHovered ? currentProjectData.color : "#000000"}
          emissiveIntensity={isHovered ? 0.1 : 0}
        />
      </Plane>

      {/* Project Title */}
      <Text position={[0.04, 0.45, 0]} fontSize={0.025} color="#ffffff" anchorX="left" anchorY="top" maxWidth={0.6}>
        {`// ${currentProjectData.title}`}
      </Text>

      {/* Code Text */}
      <Text
        position={[0.04, 0.35, 0]}
        fontSize={0.02}
        color={currentProjectData.color}
        anchorX="left"
        anchorY="top"
        maxWidth={0.6}
        font="/fonts/monospace.woff"
      >
        {visibleCode}
      </Text>

      {/* Blinking Cursor */}
      <Box args={[0.002, 0.025, 0.001]} position={[0.04 + codeLines * 0.008, 0.35 - codeLines * 0.025, 0.001]}>
        <meshStandardMaterial
          color={currentProjectData.color}
          transparent
          opacity={Math.sin(Date.now() * 0.01) > 0 ? 1 : 0}
        />
      </Box>

      {/* Screen Glow Effect */}
      <Plane args={[0.75, 1.15]} position={[0.02, 0, -0.001]}>
        <meshStandardMaterial
          color={currentProjectData.color}
          transparent
          opacity={0.1}
          emissive={currentProjectData.color}
          emissiveIntensity={0.2}
        />
      </Plane>

      {/* Click Indicator - only visible when hovered */}
      {isHovered && (
        <Text position={[0.04, -0.45, 0.001]} fontSize={0.02} color="#ffffff" anchorX="left" anchorY="bottom">
          Click to change project
        </Text>
      )}
    </group>
  )
}

// Additional Screen Elements
function ScreenElements({ position }: { position: [number, number, number] }) {
  const [notifications, setNotifications] = useState(0)

  useFrame((state) => {
    // Random notifications
    if (Math.random() < 0.001) {
      setNotifications((prev) => prev + 1)
    }
  })

  return (
    <group position={position}>
      {/* Browser Tabs */}
      <Box args={[0.15, 0.03, 0.001]} position={[0.04, 0.52, 0.001]}>
        <meshStandardMaterial color="#4a5568" />
      </Box>
      <Box args={[0.15, 0.03, 0.001]} position={[0.22, 0.52, 0.001]}>
        <meshStandardMaterial color="#2d3748" />
      </Box>

      {/* Status Bar */}
      <Box args={[0.6, 0.02, 0.001]} position={[0.04, -0.52, 0.001]}>
        <meshStandardMaterial color="#1a202c" />
      </Box>

      {/* Notification Badge */}
      {notifications > 0 && (
        <Sphere args={[0.01]} position={[0.6, 0.5, 0.002]}>
          <meshStandardMaterial color="#ff0000" emissive="#ff0000" emissiveIntensity={0.5} />
        </Sphere>
      )}
    </group>
  )
}

// Desk Environment
function DeskEnvironment() {
  return (
    <group>
      {/* Desk */}
      <Box args={[2, 0.1, 1]} position={[0, -1.2, 0]}>
        <meshStandardMaterial color="#6b461d" />
      </Box>

      {/* Lamp */}
      <Box args={[0.1, 0.5, 0.1]} position={[0.8, -0.7, -0.3]}>
        <meshStandardMaterial color="#4a5568" />
      </Box>
      <Sphere args={[0.1]} position={[0.8, -0.2, -0.3]}>
        <meshStandardMaterial color="#fef08a" emissive="#fef08a" emissiveIntensity={1} />
      </Sphere>

      {/* Keyboard */}
      <Box args={[0.6, 0.05, 0.2]} position={[0, -1.1, -0.2]}>
        <meshStandardMaterial color="#4a5568" />
      </Box>

      {/* Mouse */}
      <Box args={[0.1, 0.05, 0.15]} position={[-0.3, -1.1, 0.2]}>
        <meshStandardMaterial color="#4a5568" />
      </Box>
    </group>
  )
}

// Code Particles
function CodeParticles() {
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 2 - 1,
    y: Math.random() * 2,
    z: Math.random() * 2 - 1,
    speed: Math.random() * 0.01,
  }))

  useFrame(() => {
    particles.forEach((particle) => {
      particle.y -= particle.speed
      if (particle.y < -1) {
        particle.y = 2
      }
    })
  })

  return (
    <>
      {particles.map((particle) => (
        <Text key={particle.id} position={[particle.x, particle.y, particle.z]} fontSize={0.05} color="#60a5fa">
          {Math.random() > 0.5 ? "1" : "0"}
        </Text>
      ))}
    </>
  )
}

// Update the Scene component to include ScreenElements
function Scene() {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <pointLight position={[2, 4, 2]} intensity={1} />
      <pointLight position={[-2, 2, -2]} intensity={0.5} color="#60a5fa" />
      <spotLight position={[0, 5, 0]} angle={0.3} penumbra={1} intensity={0.8} castShadow />

      {/* Environment */}
      <Environment preset="studio" />

      {/* Scene Objects */}
      <DeskEnvironment />
      <CoderCharacter position={[0, -0.5, 0]} />
      <ComputerScreen position={[0, 0, -0.5]} />
      <ScreenElements position={[0, 0, -0.5]} />
      <CodeParticles />

      {/* Ground */}
      <Plane args={[20, 20]} rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]}>
        <meshStandardMaterial color="#f5f5f5" />
      </Plane>

      {/* Contact Shadows */}
      <ContactShadows position={[0, -2.99, 0]} opacity={0.4} scale={10} blur={1} far={4} />

      {/* Camera Controls */}
      <OrbitControls
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        minDistance={3}
        maxDistance={15}
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 2}
      />
    </>
  )
}

// Loading Component
function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center h-96 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-blue-600 font-medium">Loading 3D Scene...</p>
      </div>
    </div>
  )
}

// Main Component Export
export function CoderScene() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return <LoadingSpinner />
  }

  return (
    <div className="h-96 w-full bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl overflow-hidden">
      <Canvas camera={{ position: [5, 3, 5], fov: 60 }} shadows gl={{ antialias: true, alpha: true }} dpr={[1, 2]}>
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>

      {/* Interactive Instructions */}
      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 text-sm text-gray-600">
        <p className="font-medium mb-1">🖱️ Interactive 3D Scene</p>
        <p>• Drag to rotate • Scroll to zoom • Click on screen to change projects</p>
      </div>
    </div>
  )
}
