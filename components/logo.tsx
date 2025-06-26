import Link from "next/link"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface LogoProps {
  isScrolled?: boolean
}

export function Logo({ isScrolled = false }: LogoProps) {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      <div
        className={cn(
          "relative h-10 w-10 overflow-hidden rounded-lg transition-all duration-300 ease-in-out",
          "bg-gradient-to-br from-blue-500 to-blue-700 group-hover:shadow-lg",
          isScrolled ? "scale-90" : "scale-100",
        )}
      >
        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="h-full w-full flex items-center justify-center">
          <Image
            src="/weblistt-logo.png"
            alt="WebListt Logo"
            width={32}
            height={32}
            className="h-8 w-8 object-contain"
          />
        </div>
      </div>
      <div className={cn("font-bold transition-all duration-300", isScrolled ? "text-lg" : "text-xl")}>
        <span className="text-blue-600 dark:text-blue-400">WebList</span>
        <span
          className={cn(
            "text-cyan-500 dark:text-cyan-400",
            isScrolled ? "text-gray-800 dark:text-gray-200" : "text-white",
          )}
        >
          T
        </span>
      </div>
    </Link>
  )
}
