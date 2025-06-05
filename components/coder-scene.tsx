"use client"

import { useState, useEffect } from "react"
import { Code, Monitor, Smartphone, Globe, Zap, Coffee } from "lucide-react"

// Animated Code Lines Component with falling letters
function AnimatedCodeLines() {
  const [activeLineIndex, setActiveLineIndex] = useState(0)
  const [visibleChars, setVisibleChars] = useState<{ [key: number]: number }>({})

  const codeLines = [
    "const website = new Website();",
    "website.addResponsiveDesign();",
    "website.addWhatsAppIntegration();",
    "website.optimizeForSEO();",
    "website.addContactForm();",
    "website.deploy(); // ✅ Ready!",
  ]

  useEffect(() => {
    // Handle line progression
    const intervalId = setInterval(() => {
      setActiveLineIndex((prev) => {
        const next = (prev + 1) % codeLines.length
        // Reset visible characters when we start a new cycle
        if (next === 0) setVisibleChars({})
        return next
      })
    }, 4000)

    return () => clearInterval(intervalId)
  }, [])

  useEffect(() => {
    // Handle character progression for current line
    const intervalId = setInterval(() => {
      setVisibleChars((prev) => {
        const currentVisible = prev[activeLineIndex] || 0
        const lineLength = codeLines[activeLineIndex].length

        if (currentVisible >= lineLength) {
          return prev
        }

        return {
          ...prev,
          [activeLineIndex]: currentVisible + 1,
        }
      })
    }, 100)

    return () => clearInterval(intervalId)
  }, [activeLineIndex])

  return (
    <div className="bg-gray-900 rounded-lg p-6 font-mono text-sm relative overflow-hidden h-80">
      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(-100px);
            opacity: 0;
          }
          50% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(400px);
            opacity: 0;
          }
        }
        .animate-fall {
          animation: fall 3s linear infinite;
        }
      `}</style>

      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <span className="text-gray-400 ml-2">WebList - Building your website...</span>
      </div>

      <div className="relative h-64">
        {/* Matrix-like falling characters in background */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={`rain-${i}`}
            className="absolute text-green-500 opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: "-20px",
              animation: `fall ${2 + Math.random() * 3}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
              fontSize: `${Math.random() * 8 + 10}px`,
            }}
          >
            {["0", "1", "{", "}", "(", ")", ";", "=", "<", ">", "/", "*"][Math.floor(Math.random() * 12)]}
          </div>
        ))}

        {/* Code lines with falling characters */}
        {codeLines.map((line, lineIndex) => (
          <div
            key={`line-${lineIndex}`}
            className={`absolute left-0 transition-all duration-500 ${
              lineIndex <= activeLineIndex ? "opacity-100" : "opacity-30"
            }`}
            style={{
              top: `${lineIndex * 35}px`,
            }}
          >
            <span className="text-blue-400">{">"}</span>{" "}
            <span className="text-green-400">
              {line.split("").map((char, charIndex) => {
                const isVisible = (visibleChars[lineIndex] || 0) > charIndex
                const isCurrentChar = (visibleChars[lineIndex] || 0) === charIndex + 1
                return (
                  <span
                    key={`char-${lineIndex}-${charIndex}`}
                    className={`inline-block transition-all duration-200 ${
                      isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform -translate-y-8"
                    } ${isCurrentChar ? "text-white bg-green-500" : ""}`}
                    style={{
                      transitionDelay: `${charIndex * 30}ms`,
                    }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                )
              })}
            </span>
            {lineIndex === activeLineIndex && (visibleChars[lineIndex] || 0) >= line.length && (
              <span className="animate-pulse text-green-400 ml-1">|</span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

// Floating Icons Animation
function FloatingIcons() {
  const icons = [
    { Icon: Code, delay: 0, color: "text-blue-500" },
    { Icon: Monitor, delay: 1, color: "text-green-500" },
    { Icon: Smartphone, delay: 2, color: "text-purple-500" },
    { Icon: Globe, delay: 3, color: "text-orange-500" },
    { Icon: Zap, delay: 4, color: "text-yellow-500" },
    { Icon: Coffee, delay: 5, color: "text-red-500" },
  ]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map(({ Icon, delay, color }, index) => (
        <div
          key={index}
          className={`absolute animate-bounce ${color}`}
          style={{
            left: `${20 + index * 12}%`,
            top: `${30 + (index % 2) * 20}%`,
            animationDelay: `${delay * 0.5}s`,
            animationDuration: "3s",
          }}
        >
          <Icon size={24} />
        </div>
      ))}
    </div>
  )
}

// Developer Avatar Component
function DeveloperAvatar() {
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping((prev) => !prev)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="relative">
        <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
            <Code size={32} className="text-blue-600" />
          </div>
        </div>
        <div
          className={`absolute -bottom-2 -right-2 w-6 h-6 rounded-full ${
            isTyping ? "bg-green-500" : "bg-gray-400"
          } flex items-center justify-center transition-colors duration-300`}
        >
          <div className="w-2 h-2 bg-white rounded-full"></div>
        </div>
      </div>
      <div className="text-center">
        <p className="font-semibold text-gray-800 dark:text-gray-200">
          {isTyping ? "Coding your website..." : "Taking a coffee break ☕"}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400">WebList Developer</p>
      </div>
    </div>
  )
}

// Project Showcase Component
function ProjectShowcase() {
  const [currentProject, setCurrentProject] = useState(0)

  const projects = [
    {
      name: "E-commerce Store",
      description: "Online shopping with cart & payments",
      color: "from-green-400 to-green-600",
      icon: "🛒",
    },
    {
      name: "Restaurant Website",
      description: "Menu display with online booking",
      color: "from-orange-400 to-red-600",
      icon: "🍕",
    },
    {
      name: "Business Portfolio",
      description: "Professional showcase website",
      color: "from-blue-400 to-purple-600",
      icon: "💼",
    },
    {
      name: "Service Website",
      description: "WhatsApp integration & contact forms",
      color: "from-purple-400 to-pink-600",
      icon: "🔧",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const currentProj = projects[currentProject]

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-gray-800 dark:text-gray-200">Current Project</h3>
        <div className="flex space-x-1">
          {projects.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                index === currentProject ? "bg-blue-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      <div className={`bg-gradient-to-r ${currentProj.color} rounded-lg p-4 text-white mb-4`}>
        <div className="text-2xl mb-2">{currentProj.icon}</div>
        <h4 className="font-bold text-lg">{currentProj.name}</h4>
        <p className="text-sm opacity-90">{currentProj.description}</p>
      </div>

      <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
        <span>Progress: {(((currentProject + 1) / projects.length) * 100).toFixed(0)}%</span>
        <span>ETA: 2-5 days</span>
      </div>
    </div>
  )
}

// Main CoderScene Component
export function CoderScene() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return (
      <div className="flex items-center justify-center h-96 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-blue-600 font-medium">Loading Developer Scene...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="h-96 w-full bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900 rounded-xl overflow-hidden relative">
      <FloatingIcons />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6 h-full">
        {/* Developer Avatar */}
        <div className="flex items-center justify-center">
          <DeveloperAvatar />
        </div>

        {/* Code Editor */}
        <div className="flex items-center justify-center">
          <AnimatedCodeLines />
        </div>

        {/* Project Showcase */}
        <div className="flex items-center justify-center">
          <ProjectShowcase />
        </div>
      </div>

      {/* Interactive Instructions */}
      <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg p-3 text-sm text-gray-600 dark:text-gray-300">
        <p className="font-medium mb-1">🚀 Live Development Process</p>
        <p>Watch as we build your website step by step!</p>
      </div>
    </div>
  )
}
