import Link from "next/link"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface LogoProps {
  isScrolled?: boolean
}

export function Logo({ isScrolled = false }: LogoProps) {
  return (
    <Link href="/" className="flex items-center group">
      <div
        className={cn(
          "relative h-16 w-28 overflow-hidden rounded-lg transition-all duration-300 ease-in-out",
          "bg-white dark:bg-gray-800 group-hover:shadow-2xl group-hover:shadow-gray-500/25",
          "group-hover:scale-110 group-hover:rotate-3 shadow-xl border border-gray-200 dark:border-gray-700",
          "group-hover:animate-pulse",
          isScrolled ? "scale-90" : "scale-100",
        )}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white dark:from-gray-700 dark:to-gray-800 opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="h-full w-full flex items-center justify-center relative z-10">
          <Image
            src="/weblistt-logo.png"
            alt="WebListt Logo"
            width={88}
            height={48}
            className="h-12 w-24 object-cover object-center drop-shadow-lg transition-transform duration-300 group-hover:-rotate-2"
          />
        </div>
      </div>
    </Link>
  )
}
