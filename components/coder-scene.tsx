"use client"

import { useState, useEffect } from "react"
import { Code, Monitor, Smartphone, Globe, Zap, Coffee } from "lucide-react"

// Animated Code Lines Component
function AnimatedCodeLines() {
  const [currentLine, setCurrentLine] = useState(0)

  const codeLines = [
    "const website = new Website();",
    "website.addResponsiveDesign();",
    "website.addWhatsAppIntegration();",
    "website.optimizeForSEO();",
    "website.addContactForm();",
    "website.deploy(); // ✅ Ready!",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLine((prev) => (prev + 1) % codeLines.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-gray-900 rounded-lg p-6 font-mono text-sm">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <span className="text-gray-400 ml-2">WebList - Building your website...</span>
      </div>
      <div className="space-y-2">
        {codeLines.map((line, index) => (
          <div
            key={index}
            className={`transition-all duration-500 ${
              index <= currentLine ? "text-green-400 opacity-100" : "text-gray-600 opacity-50"
            }`}
          >
            <span className="text-blue-400">{">"}</span> {line}
            {index === currentLine && <span className="animate-pulse text-green-400">|</span>}
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
