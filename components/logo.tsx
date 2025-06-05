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
          <Image src="/logo.png" alt="WebList Logo" width={24} height={24} className="h-6 w-6 object-contain" />
        </div>
      </div>
      <div className={cn("font-bold transition-all duration-300", isScrolled ? "text-lg" : "text-xl")}>
        <span className="text-blue-600 dark:text-blue-400">Web</span>
        <span className={isScrolled ? "text-gray-800 dark:text-gray-200" : "text-white"}>List</span>
      </div>
    </Link>
  )
}
