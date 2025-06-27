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
          "relative h-20 w-20 overflow-hidden rounded-lg transition-all duration-300 ease-in-out",
          "bg-gradient-to-br from-blue-500 to-blue-700 group-hover:shadow-xl group-hover:shadow-blue-500/25",
          "group-hover:scale-110 shadow-xl shadow-blue-500/20",
          isScrolled ? "scale-95" : "scale-100",
        )}
      >
        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="h-full w-full flex items-center justify-center">
          <Image
            src="/weblistt-logo.png"
            alt="WebListt Logo"
            width={64}
            height={64}
            className="h-16 w-16 object-contain drop-shadow-sm"
          />
        </div>
      </div>
      <div className={cn("font-bold transition-all duration-300", isScrolled ? "text-2xl" : "text-3xl")}>
        <span className="text-blue-600 dark:text-blue-400">WebList</span>
      </div>
    </Link>
  )
}
