"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle, Phone, MessageCircle, ArrowRight, Star, Code, Zap, Globe } from "lucide-react"
import { Header } from "@/components/header"
import { Logo } from "@/components/logo"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { AnimatedSection } from "@/components/animated-section"
import { AnimatedCounter } from "@/components/animated-counter"
import { AnimatedText } from "@/components/animated-text"
import { AnimatedImage } from "@/components/animated-image"
import { AnimatedButton } from "@/components/animated-button"
import { InteractiveCoderSection } from "@/components/interactive-coder-section"
import { ContactForm } from "@/components/contact-form"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Header />
      {/* Hero Section */}
      <section className="w-full pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-48 lg:pb-36 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 dark:from-blue-800 dark:via-blue-900 dark:to-gray-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:20px_20px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/0 via-blue-700/0 to-blue-800 dark:to-gray-900"></div>
        {/* Falling Stars Animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={`star-${i}`}
              className="absolute text-white/30 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-20px`,
                fontSize: `${Math.random() * 8 + 8}px`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            >
              <div
                className="animate-bounce"
                style={{
                  animation: `fallingStar ${3 + Math.random() * 4}s linear infinite`,
                  animationDelay: `${Math.random() * 5}s`,
                }}
              >
                ⭐
              </div>
            </div>
          ))}
        </div>

        <style jsx>{`
          @keyframes fallingStar {
            0% {
              transform: translateY(-100vh) rotate(0deg);
              opacity: 0;
            }
            10% {
              opacity: 1;
            }
            90% {
              opacity: 1;
            }
            100% {
              transform: translateY(100vh) rotate(360deg);
              opacity: 0;
            }
          }
        `}</style>
        <div className="container px-4 md:px-6 relative">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <AnimatedSection animation="slideRight" delay={0.1}>
                <div className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-3 py-1 text-sm backdrop-blur-xl mb-4 w-fit">
                  <span className="flex h-2 w-2 rounded-full bg-green-400 mr-2"></span>
                  Professional Web Development
                </div>
              </AnimatedSection>
              <div className="space-y-2">
                <AnimatedText
                  text="Grow Your Local Business with a Professional Website"
                  tag="h1"
                  className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                  delay={0.2}
                />
                <AnimatedSection animation="slideRight" delay={0.4}>
                  <p className="max-w-[600px] text-white/90 md:text-xl">
                    Affordable. Fast. Mobile Friendly. Perfect for Small Shops & Startups.
                  </p>
                </AnimatedSection>
              </div>
              <AnimatedSection animation="slideRight" delay={0.6}>
                <div className="flex flex-col gap-2 min-[400px]:flex-row mt-4">
                  <AnimatedButton
                    hoverScale={1.05}
                    className="bg-white text-blue-600 hover:bg-white/90 rounded-full group"
                  >
                    Get Free Demo
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </AnimatedButton>
                  <WhatsAppButton
                    phoneNumber="+917807803780"
                    message="Hi! I'm interested in getting a website for my business. Can you help?"
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white/20 rounded-full bg-transparent hover:bg-green-600/20"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    WhatsApp Us Now
                  </WhatsAppButton>
                </div>
              </AnimatedSection>
              <AnimatedSection animation="slideRight" delay={0.8}>
                <div className="flex items-center space-x-4 mt-6">
                  <div className="flex -space-x-2">
                    <div className="h-8 w-8 rounded-full bg-blue-400 border-2 border-white flex items-center justify-center text-xs font-medium text-white">
                      JD
                    </div>
                    <div className="h-8 w-8 rounded-full bg-blue-400 border-2 border-white flex items-center justify-center text-xs font-medium text-white">
                      SP
                    </div>
                    <div className="h-8 w-8 rounded-full bg-blue-400 border-2 border-white flex items-center justify-center text-xs font-medium text-white">
                      RK
                    </div>
                  </div>
                  <div className="text-sm text-white/80">
                    <span className="font-medium text-white">
                      <AnimatedCounter end={50} suffix="+" className="font-medium text-white inline" /> businesses
                    </span>{" "}
                    trust us with their online presence
                  </div>
                </div>
              </AnimatedSection>
            </div>
            <AnimatedSection animation="scale" delay={0.3}>
              <div className="flex justify-center relative">
                <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-blue-400 to-blue-300 opacity-20 blur-xl"></div>
                <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden border border-white/20 dark:border-gray-700/20">
                  <AnimatedImage
                    src="/hero-developer.jpg"
                    width={600}
                    height={400}
                    alt="Professional developer working on laptop - web development services"
                    className="w-full h-auto object-cover"
                    priority
                    animation="fadeIn"
                    delay={0.5}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-white font-medium">Professional Web Design</div>
                        <div className="text-white/80 text-sm">Responsive design for local businesses</div>
                      </div>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white dark:from-gray-900 to-transparent"></div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <AnimatedSection
            animation="slideUp"
            className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
          >
            <div className="inline-flex items-center rounded-full border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 text-sm text-blue-600 dark:text-blue-400 mb-4">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400 mr-2"></span>
              Why Choose Us
            </div>
            <div className="space-y-2">
              <AnimatedText
                text="Websites That Work For Your Business"
                tag="h2"
                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 dark:text-gray-100"
              />
              <p className="max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We build websites that help local businesses attract more customers and grow
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection animation="slideUp" delay={0.1}>
              <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md dark:hover:shadow-gray-800/20 transition-shadow">
                <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">Fast Loading</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Our websites are optimized for speed to keep your visitors engaged and improve search rankings.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="slideUp" delay={0.2}>
              <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md dark:hover:shadow-gray-800/20 transition-shadow">
                <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">Mobile Friendly</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  All our websites look great on smartphones, tablets, and desktop computers.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="slideUp" delay={0.3}>
              <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md dark:hover:shadow-gray-800/20 transition-shadow">
                <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">SEO Optimized</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Built with search engines in mind to help customers find your business online.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <AnimatedSection
            animation="slideUp"
            className="flex flex-col items-center justify-center space-y-4 text-center"
          >
            <div className="inline-flex items-center rounded-full border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 text-sm text-blue-600 dark:text-blue-400 mb-4">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400 mr-2"></span>
              Our Services
            </div>
            <div className="space-y-2">
              <AnimatedText
                text="Our Services"
                tag="h2"
                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 dark:text-gray-100"
              />
              <p className="max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We offer a range of web development services tailored for local businesses
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <AnimatedSection animation="slideUp" delay={0.1}>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white dark:bg-gray-900 overflow-hidden group">
                <div className="h-2 bg-gradient-to-r from-blue-400 to-blue-600"></div>
                <CardHeader>
                  <CardTitle className="text-gray-900 dark:text-gray-100">Single Page Website</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400">
                    Perfect for businesses that need a simple online presence with all essential information on one
                    page.
                  </p>
                </CardContent>
                <CardFooter className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <WhatsAppButton
                    phoneNumber="+917807803780"
                    message="Hi! I'm interested in your Single Page Website package. Can you provide more details?"
                    className="w-full rounded-full text-white"
                  />
                </CardFooter>
              </Card>
            </AnimatedSection>
            <AnimatedSection animation="slideUp" delay={0.2}>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white dark:bg-gray-900 overflow-hidden group">
                <div className="h-2 bg-gradient-to-r from-blue-400 to-blue-600"></div>
                <CardHeader>
                  <CardTitle className="text-gray-900 dark:text-gray-100">3-5 Page Business Website</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400">
                    Ideal for businesses that need multiple pages to showcase their services, about section, and contact
                    information.
                  </p>
                </CardContent>
                <CardFooter className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <WhatsAppButton
                    phoneNumber="+917807803780"
                    message="Hi! I'm interested in your 3-5 Page Business Website package. Can you provide more details?"
                    className="w-full rounded-full text-white"
                  />
                </CardFooter>
              </Card>
            </AnimatedSection>
            <AnimatedSection animation="slideUp" delay={0.3}>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white dark:bg-gray-900 overflow-hidden group">
                <div className="h-2 bg-gradient-to-r from-blue-400 to-blue-600"></div>
                <CardHeader>
                  <CardTitle className="text-gray-900 dark:text-gray-100">E-commerce Website</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400">
                    Complete online store solution with product listings, shopping cart, and secure payment processing.
                  </p>
                </CardContent>
                <CardFooter className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <WhatsAppButton
                    phoneNumber="+917807803780"
                    message="Hi! I'm interested in your E-commerce Website package. Can you provide more details?"
                    className="w-full rounded-full text-white"
                  />
                </CardFooter>
              </Card>
            </AnimatedSection>
            <AnimatedSection animation="slideUp" delay={0.4}>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white dark:bg-gray-900 overflow-hidden group">
                <div className="h-2 bg-gradient-to-r from-blue-400 to-blue-600"></div>
                <CardHeader>
                  <CardTitle className="text-gray-900 dark:text-gray-100">WhatsApp & Call Buttons</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400">
                    Integrated communication features that make it easy for customers to reach you directly from your
                    website.
                  </p>
                </CardContent>
                <CardFooter className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <WhatsAppButton
                    phoneNumber="+917807803780"
                    message="Hi! I'm interested in adding WhatsApp & Call Buttons to my website. Can you provide more details?"
                    className="w-full rounded-full text-white"
                  />
                </CardFooter>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <AnimatedSection
            animation="slideUp"
            className="flex flex-col items-center justify-center space-y-4 text-center"
          >
            <div className="inline-flex items-center rounded-full border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 text-sm text-blue-600 dark:text-blue-400 mb-4">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400 mr-2"></span>
              Pricing Plans
            </div>
            <div className="space-y-2">
              <AnimatedText
                text="Simple & Transparent Pricing"
                tag="h2"
                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 dark:text-gray-100"
              />
              <p className="max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Choose the perfect plan for your business needs
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <AnimatedSection animation="slideUp" delay={0.1}>
              <Card className="flex flex-col border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] bg-white dark:bg-gray-800">
                <CardHeader>
                  <CardTitle className="text-gray-900 dark:text-gray-100">Basic Website</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-400">
                    Perfect for small businesses just getting started
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="text-4xl font-bold text-gray-900 dark:text-gray-100">
                    ₹<AnimatedCounter end={22000} className="inline" /> / $
                    <AnimatedCounter end={259} className="inline" />
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">One-time payment</div>
                  <ul className="mt-6 space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                      <span className="text-gray-700 dark:text-gray-300">Single page responsive website</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                      <span className="text-gray-700 dark:text-gray-300">Mobile-friendly design</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                      <span className="text-gray-700 dark:text-gray-300">WhatsApp & Call buttons</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                      <span className="text-gray-700 dark:text-gray-300">Delivery in 7 days</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <WhatsAppButton
                    phoneNumber="+917807803780"
                    message="Hi! I'm interested in your Basic Website package for ₹22,000 / $259. Can we discuss the details?"
                    className="w-full rounded-full text-white"
                  >
                    Start Now
                  </WhatsAppButton>
                </CardFooter>
              </Card>
            </AnimatedSection>
            <AnimatedSection animation="slideUp" delay={0.2}>
              <Card className="flex flex-col relative border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:translate-y-[-5px] bg-white dark:bg-gray-800 before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-b before:from-blue-600 before:to-blue-800 before:opacity-[0.05]">
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white text-sm font-medium px-3 py-1 rounded-full">
                    Most Popular
                  </div>
                </div>
                <CardHeader className="border-b border-blue-100 dark:border-blue-800">
                  <CardTitle className="text-gray-900 dark:text-gray-100">Standard Website</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-400">
                    Most popular choice for growing businesses
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="text-4xl font-bold text-gray-900 dark:text-gray-100">
                    ₹<AnimatedCounter end={40000} className="inline" /> / $
                    <AnimatedCounter end={471} className="inline" />
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">One-time payment</div>
                  <ul className="mt-6 space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                      <span className="text-gray-700 dark:text-gray-300">3-5 page responsive website</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                      <span className="text-gray-700 dark:text-gray-300">Mobile-friendly design</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                      <span className="text-gray-700 dark:text-gray-300">WhatsApp & Call buttons</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                      <span className="text-gray-700 dark:text-gray-300">Basic SEO setup</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                      <span className="text-gray-700 dark:text-gray-300">Delivery in 14 days</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    onClick={() => {
                      const message =
                        "Hi! I'm interested in your Standard Website package for ₹40,000 / $471. Can we discuss the details?"
                      const whatsappUrl = `https://wa.me/917807803780?text=${encodeURIComponent(message)}`
                      window.open(whatsappUrl, "_blank")
                    }}
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 rounded-full text-white border-0"
                    size="default"
                  >
                    Start Now
                  </Button>
                </CardFooter>
              </Card>
            </AnimatedSection>
            <AnimatedSection animation="slideUp" delay={0.3}>
              <Card className="flex flex-col border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] bg-white dark:bg-gray-800">
                <CardHeader>
                  <CardTitle className="text-gray-900 dark:text-gray-100">Premium Website</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-400">
                    Complete solution for established businesses
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="text-4xl font-bold text-gray-900 dark:text-gray-100">
                    ₹<AnimatedCounter end={55000} className="inline" /> / $
                    <AnimatedCounter end={647} className="inline" />
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">One-time payment</div>
                  <ul className="mt-6 space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                      <span className="text-gray-700 dark:text-gray-300">E-commerce website</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                      <span className="text-gray-700 dark:text-gray-300">Mobile-friendly design</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                      <span className="text-gray-700 dark:text-gray-300">WhatsApp & Call buttons</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                      <span className="text-gray-700 dark:text-gray-300">Advanced SEO setup</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                      <span className="text-gray-700 dark:text-gray-300">Social media integration</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                      <span className="text-gray-700 dark:text-gray-300">Delivery in 21 days</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <WhatsAppButton
                    phoneNumber="+917807803780"
                    message="Hi! I'm interested in your Premium Website package for ₹55,000 / $647. Can we discuss the details?"
                    className="w-full rounded-full text-white"
                  >
                    Start Now
                  </WhatsAppButton>
                </CardFooter>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <AnimatedSection
            animation="slideUp"
            className="flex flex-col items-center justify-center space-y-4 text-center"
          >
            <div className="inline-flex items-center rounded-full border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 text-sm text-blue-600 dark:text-blue-400 mb-4">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400 mr-2"></span>
              Our Work
            </div>
            <div className="space-y-2">
              <AnimatedText
                text="Our Portfolio"
                tag="h2"
                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 dark:text-gray-100"
              />
              <p className="max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Check out some of our recent work
              </p>
            </div>
          </AnimatedSection>
          <Tabs defaultValue="all" className="mt-12">
            <TabsList className="grid w-full grid-cols-3 mb-8 bg-blue-50 dark:bg-blue-900/30 p-1 rounded-full max-w-md mx-auto">
              <TabsTrigger
                value="all"
                className="rounded-full data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800 data-[state=active]:text-blue-600 dark:data-[state=active]:text-blue-400 data-[state=active]:shadow text-gray-600 dark:text-gray-400"
              >
                All Projects
              </TabsTrigger>
              <TabsTrigger
                value="business"
                className="rounded-full data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800 data-[state=active]:text-blue-600 dark:data-[state=active]:text-blue-400 data-[state=active]:shadow text-gray-600 dark:text-gray-400"
              >
                Business
              </TabsTrigger>
              <TabsTrigger
                value="ecommerce"
                className="rounded-full data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800 data-[state=active]:text-blue-600 dark:data-[state=active]:text-blue-400 data-[state=active]:shadow text-gray-600 dark:text-gray-400"
              >
                E-commerce
              </TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatedSection animation="slideUp" delay={0.1}>
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] group bg-white dark:bg-gray-900">
                  <div className="relative overflow-hidden">
                    <AnimatedImage
                      src="/portfolio/restaurant-website.jpg"
                      width={400}
                      height={300}
                      alt="Restaurant website"
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      animation="fadeIn"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-white border-white hover:bg-white/20 bg-transparent"
                      >
                        View Project
                      </Button>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-gray-900 dark:text-gray-100">Spice Garden Restaurant</CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-400">
                      Restaurant website with online menu and reservation system
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="border-t border-gray-200 dark:border-gray-700 pt-4">
                    <Button
                      variant="outline"
                      className="w-full rounded-full border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 bg-transparent"
                    >
                      View Demo
                    </Button>
                  </CardFooter>
                </Card>
              </AnimatedSection>
              <AnimatedSection animation="slideUp" delay={0.2}>
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] group bg-white dark:bg-gray-900">
                  <div className="relative overflow-hidden">
                    <AnimatedImage
                      src="/portfolio/boutique-website.jpg"
                      width={400}
                      height={300}
                      alt="Boutique website"
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      animation="fadeIn"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-white border-white hover:bg-white/20 bg-transparent"
                      >
                        View Project
                      </Button>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-gray-900 dark:text-gray-100">Elegance Boutique</CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-400">
                      Fashion boutique with product catalog and contact form
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="border-t border-gray-200 dark:border-gray-700 pt-4">
                    <Button
                      variant="outline"
                      className="w-full rounded-full border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 bg-transparent"
                    >
                      View Demo
                    </Button>
                  </CardFooter>
                </Card>
              </AnimatedSection>
              <AnimatedSection animation="slideUp" delay={0.3}>
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] group bg-white dark:bg-gray-900">
                  <div className="relative overflow-hidden">
                    <AnimatedImage
                      src="/portfolio/salon-website.jpg"
                      width={400}
                      height={300}
                      alt="Salon website"
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      animation="fadeIn"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-white border-white hover:bg-white/20 bg-transparent"
                      >
                        View Project
                      </Button>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-gray-900 dark:text-gray-100">Glamour Salon</CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-400">
                      Beauty salon with service listings and appointment booking
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="border-t border-gray-200 dark:border-gray-700 pt-4">
                    <Button
                      variant="outline"
                      className="w-full rounded-full border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 bg-transparent"
                    >
                      View Demo
                    </Button>
                  </CardFooter>
                </Card>
              </AnimatedSection>
            </TabsContent>
            <TabsContent value="business" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatedSection animation="slideUp" delay={0.1}>
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] group bg-white dark:bg-gray-900">
                  <div className="relative overflow-hidden">
                    <AnimatedImage
                      src="/portfolio/restaurant-website.jpg"
                      width={400}
                      height={300}
                      alt="Restaurant website"
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      animation="fadeIn"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-white border-white hover:bg-white/20 bg-transparent"
                      >
                        View Project
                      </Button>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-gray-900 dark:text-gray-100">Spice Garden Restaurant</CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-400">
                      Restaurant website with online menu and reservation system
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="border-t border-gray-200 dark:border-gray-700 pt-4">
                    <Button
                      variant="outline"
                      className="w-full rounded-full border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 bg-transparent"
                    >
                      View Demo
                    </Button>
                  </CardFooter>
                </Card>
              </AnimatedSection>
              <AnimatedSection animation="slideUp" delay={0.2}>
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] group bg-white dark:bg-gray-900">
                  <div className="relative overflow-hidden">
                    <AnimatedImage
                      src="/portfolio/salon-website.jpg"
                      width={400}
                      height={300}
                      alt="Salon website"
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      animation="fadeIn"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-white border-white hover:bg-white/20 bg-transparent"
                      >
                        View Project
                      </Button>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-gray-900 dark:text-gray-100">Glamour Salon</CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-400">
                      Beauty salon with service listings and appointment booking
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="border-t border-gray-200 dark:border-gray-700 pt-4">
                    <Button
                      variant="outline"
                      className="w-full rounded-full border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 bg-transparent"
                    >
                      View Demo
                    </Button>
                  </CardFooter>
                </Card>
              </AnimatedSection>
            </TabsContent>
            <TabsContent value="ecommerce" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatedSection animation="slideUp" delay={0.1}>
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] group bg-white dark:bg-gray-900">
                  <div className="relative overflow-hidden">
                    <AnimatedImage
                      src="/portfolio/boutique-website.jpg"
                      width={400}
                      height={300}
                      alt="Boutique website"
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      animation="fadeIn"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-white border-white hover:bg-white/20 bg-transparent"
                      >
                        View Project
                      </Button>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-gray-900 dark:text-gray-100">Elegance Boutique</CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-400">
                      Fashion boutique with product catalog and contact form
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="border-t border-gray-200 dark:border-gray-700 pt-4">
                    <Button
                      variant="outline"
                      className="w-full rounded-full border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 bg-transparent"
                    >
                      View Demo
                    </Button>
                  </CardFooter>
                </Card>
              </AnimatedSection>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <AnimatedSection animation="slideRight" delay={0.1}>
              <div className="relative">
                <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-blue-100 to-blue-50 dark:from-blue-900/20 dark:to-blue-800/20 opacity-50 blur-xl"></div>
                <div className="relative">
                  <AnimatedImage
                    src="/about-team.jpg"
                    width={600}
                    height={400}
                    alt="About our web development team"
                    className="rounded-xl shadow-xl object-cover"
                    priority
                    animation="scale"
                    delay={0.3}
                  />
                  <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 w-48 border border-gray-200 dark:border-gray-700">
                    <div className="text-sm font-medium text-gray-700 dark:text-gray-300">Trusted by</div>
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                      <AnimatedCounter
                        end={50}
                        suffix="+"
                        className="text-3xl font-bold text-blue-600 dark:text-blue-400"
                      />
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Local Businesses</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="slideLeft" delay={0.2}>
              <div className="space-y-4">
                <div className="inline-flex items-center rounded-full border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 text-sm text-blue-600 dark:text-blue-400 mb-4">
                  <span className="flex h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400 mr-2"></span>
                  About Us
                </div>
                <AnimatedText
                  text="Why Choose Us"
                  tag="h2"
                  className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 dark:text-gray-100"
                />
                <p className="text-gray-500 dark:text-gray-400 md:text-xl/relaxed">
                  I'm passionate about helping local businesses thrive in the digital world. With years of experience in
                  web development, I understand the unique challenges that small businesses face.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-green-500 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">
                      Affordable solutions tailored for small businesses
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-green-500 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">
                      Fast turnaround times to get you online quickly
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-green-500 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">
                      Mobile-first approach for today's smartphone users
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-green-500 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">Ongoing support to help your business grow</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-green-500 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">
                      Local understanding with global web standards
                    </span>
                  </li>
                </ul>
                <div className="pt-4">
                  <AnimatedButton
                    className="rounded-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900"
                    hoverScale={1.05}
                  >
                    Learn More About Us
                  </AnimatedButton>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <AnimatedSection
            animation="slideUp"
            className="flex flex-col items-center justify-center space-y-4 text-center"
          >
            <div className="inline-flex items-center rounded-full border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 text-sm text-blue-600 dark:text-blue-400 mb-4">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400 mr-2"></span>
              Testimonials
            </div>
            <div className="space-y-2">
              <AnimatedText
                text="Client Testimonials"
                tag="h2"
                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 dark:text-gray-100"
              />
              <p className="max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Don't just take our word for it - hear what our clients have to say
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <AnimatedSection animation="slideUp" delay={0.1}>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] bg-white dark:bg-gray-900 overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-blue-400 to-blue-600"></div>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <AnimatedImage
                      src="/testimonials/client-1.jpg"
                      width={50}
                      height={50}
                      alt="Rahul Sharma"
                      className="rounded-full border-2 border-white dark:border-gray-700 shadow-md object-cover"
                      animation="scale"
                    />
                    <div>
                      <CardTitle className="text-gray-900 dark:text-gray-100">Rahul Sharma</CardTitle>
                      <CardDescription className="text-gray-600 dark:text-gray-400">
                        Spice Garden Restaurant
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex mb-4">
                    <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  </div>
                  <p className="italic text-gray-600 dark:text-gray-400">
                    "Our restaurant website has helped us get so many new customers! The online reservation system has
                    made managing bookings much easier. Highly recommended!"
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
            <AnimatedSection animation="slideUp" delay={0.2}>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] bg-white dark:bg-gray-900 overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-blue-400 to-blue-600"></div>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <AnimatedImage
                      src="/testimonials/client-2-indian.jpg"
                      width={50}
                      height={50}
                      alt="Priya Patel"
                      className="rounded-full border-2 border-white dark:border-gray-700 shadow-md object-cover"
                      animation="scale"
                    />
                    <div>
                      <CardTitle className="text-gray-900 dark:text-gray-100">Priya Patel</CardTitle>
                      <CardDescription className="text-gray-600 dark:text-gray-400">Elegance Boutique</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex mb-4">
                    <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  </div>
                  <p className="italic text-gray-600 dark:text-gray-400">
                    "The e-commerce website has transformed my small boutique. I'm now able to sell to customers across
                    the city, and the WhatsApp button makes customer service so much easier!"
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
            <AnimatedSection animation="slideUp" delay={0.3}>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] bg-white dark:bg-gray-900 overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-blue-400 to-blue-600"></div>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <AnimatedImage
                      src="/testimonials/client-3-indian.jpg"
                      width={50}
                      height={50}
                      alt="Anjali Desai"
                      className="rounded-full border-2 border-white dark:border-gray-700 shadow-md object-cover"
                      animation="scale"
                    />
                    <div>
                      <CardTitle className="text-gray-900 dark:text-gray-100">Aishwarya Mohanraj</CardTitle>
                      <CardDescription className="text-gray-600 dark:text-gray-400">Glamour Salon</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex mb-4">
                    <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  </div>
                  <p className="italic text-gray-600 dark:text-gray-400">
                    "Our salon website looks so professional and has all the features we need. The appointment booking
                    system has reduced no-shows and helped us manage our schedule better."
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <AnimatedSection
            animation="slideUp"
            className="flex flex-col items-center justify-center space-y-4 text-center"
          >
            <div className="inline-flex items-center rounded-full border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 text-sm text-blue-600 dark:text-blue-400 mb-4">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400 mr-2"></span>
              FAQ
            </div>
            <div className="space-y-2">
              <AnimatedText
                text="Frequently Asked Questions"
                tag="h2"
                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 dark:text-gray-100"
              />
              <p className="max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Find answers to common questions about our web development services
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="slideUp" delay={0.2} className="mx-auto max-w-3xl mt-12">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem
                value="item-1"
                className="border border-gray-200 dark:border-gray-700 rounded-lg mb-4 overflow-hidden shadow-sm bg-white dark:bg-gray-800"
              >
                <AccordionTrigger className="px-4 py-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-gray-900 dark:text-gray-100">
                  How much time will it take?
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 pt-0 text-gray-600 dark:text-gray-400">
                  Depending on the complexity of your website, it can take anywhere from 7 days for a basic website to
                  21 days for a premium e-commerce website. We'll provide you with a specific timeline during our
                  initial consultation.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-2"
                className="border border-gray-200 dark:border-gray-700 rounded-lg mb-4 overflow-hidden shadow-sm bg-white dark:bg-gray-800"
              >
                <AccordionTrigger className="px-4 py-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-gray-900 dark:text-gray-100">
                  Do I need to buy hosting?
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 pt-0 text-gray-600 dark:text-gray-400">
                  No, all our packages include hosting for the first year. After that, we offer affordable hosting
                  renewal options or can help you migrate to your preferred hosting provider.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-3"
                className="border border-gray-200 dark:border-gray-700 rounded-lg mb-4 overflow-hidden shadow-sm bg-white dark:bg-gray-800"
              >
                <AccordionTrigger className="px-4 py-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-gray-900 dark:text-gray-100">
                  Will it work on mobile?
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 pt-0 text-gray-600 dark:text-gray-400">
                  All our websites are built with a mobile-first approach, ensuring they look great and function
                  perfectly on smartphones, tablets, and desktop computers.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-4"
                className="border border-gray-200 dark:border-gray-700 rounded-lg mb-4 overflow-hidden shadow-sm bg-white dark:bg-gray-800"
              >
                <AccordionTrigger className="px-4 py-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-gray-900 dark:text-gray-100">
                  Can I update the site later?
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 pt-0 text-gray-600 dark:text-gray-400">
                  Yes, we provide a user-friendly content management system that allows you to update text, images, and
                  add new content. For more complex changes, we offer affordable maintenance packages.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-5"
                className="border border-gray-200 dark:border-gray-700 rounded-lg mb-4 overflow-hidden shadow-sm bg-white dark:bg-gray-800"
              >
                <AccordionTrigger className="px-4 py-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-gray-900 dark:text-gray-100">
                  What payment methods do you accept?
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 pt-0 text-gray-600 dark:text-gray-400">
                  We accept bank transfers, UPI payments, and major credit/debit cards. We typically require a 50%
                  deposit to begin work, with the remaining balance due upon completion.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-6"
                className="border border-gray-200 dark:border-gray-700 rounded-lg mb-4 overflow-hidden shadow-sm bg-white dark:bg-gray-800"
              >
                <AccordionTrigger className="px-4 py-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-gray-900 dark:text-gray-100">
                  Do you provide SEO services?
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 pt-0 text-gray-600 dark:text-gray-400">
                  Yes, our Standard and Premium packages include basic SEO setup. We also offer additional SEO services
                  to help improve your website's visibility in search engines.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </AnimatedSection>
        </div>
      </section>

      {/* Interactive Coder Section */}
      <InteractiveCoderSection />

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 dark:from-blue-800 dark:via-blue-900 dark:to-gray-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:20px_20px]"></div>
        <div className="container px-4 md:px-6 relative">
          <AnimatedSection
            animation="slideUp"
            className="flex flex-col items-center justify-center space-y-4 text-center"
          >
            <div className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-3 py-1 text-sm backdrop-blur-xl mb-4">
              <span className="flex h-2 w-2 rounded-full bg-green-400 mr-2"></span>
              Get Started Today
            </div>
            <div className="space-y-2">
              <AnimatedText
                text="Ready to Grow Your Business Online?"
                tag="h2"
                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
              />
              <p className="max-w-[700px] text-white/90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Get in touch today for a free consultation and demo
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row mt-4">
              <AnimatedButton
                size="lg"
                className="bg-white text-blue-600 hover:bg-white/90 rounded-full group"
                hoverScale={1.05}
              >
                Get Free Demo
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </AnimatedButton>
              <WhatsAppButton
                phoneNumber="+917807803780"
                message="Hi! I'd like to discuss my website project. Can we talk?"
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/20 rounded-full bg-transparent hover:bg-green-600/20"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Chat on WhatsApp
              </WhatsAppButton>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactForm />

      {/* Footer */}
      <footer className="w-full py-12 bg-gray-900 dark:bg-black text-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <Logo isScrolled={true} />
              <p className="text-gray-400 text-sm">
                Professional web development services for local businesses. Affordable, fast, and mobile-friendly
                websites.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                    Single Page Website
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                    3-5 Page Business Website
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                    E-commerce Website
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                    WhatsApp & Call Integration
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="text-gray-400 hover:text-white transition-colors">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-gray-400 hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-gray-400 hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Phone className="h-4 w-4 mr-2 text-gray-400" />
                  <span>7807803780</span>
                </li>
                <li>
                  <a href="mailto:contact@weblist.com" className="text-gray-400 hover:text-white transition-colors">
                    contact@weblist.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/917807803780?text=Hello!%20I'm%20interested%20in%20your%20web%20development%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors flex items-center"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    WhatsApp: 7807803780
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-6 text-center">
            <p className="text-gray-400">© 2025 WebList. All rights reserved.</p>
          </div>
        </div>
      </footer>
      {/* Floating WhatsApp Button */}
      <WhatsAppButton
        phoneNumber="+917807803780"
        message="Hello! I'm interested in your web development services. Can you help me?"
        floating
      />
    </div>
  )
}
