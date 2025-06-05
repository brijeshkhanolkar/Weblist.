"use client"

import { CoderScene } from "@/components/coder-scene"
import { AnimatedSection } from "@/components/animated-section"
import { AnimatedText } from "@/components/animated-text"

export function InteractiveCoderSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-gray-200/50 bg-[length:20px_20px] opacity-30"></div>

      <div className="container px-4 md:px-6 relative">
        <AnimatedSection
          animation="slideUp"
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <div className="inline-flex items-center rounded-full border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 text-sm text-blue-600 dark:text-blue-400 mb-4">
            <span className="flex h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400 mr-2"></span>
            Interactive Experience
          </div>
          <div className="space-y-2">
            <AnimatedText
              text="Watch Our Developer in Action"
              tag="h2"
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 dark:text-gray-100"
            />
            <p className="max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Experience our development process through this interactive 3D visualization. See how we bring your ideas
              to life!
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="scale" delay={0.3} className="relative">
          <CoderScene />
        </AnimatedSection>

        <AnimatedSection animation="slideUp" delay={0.5} className="mt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">24/7</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Dedicated Development</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">100%</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Custom Solutions</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">∞</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Creative Possibilities</div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
