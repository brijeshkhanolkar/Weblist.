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
          "relative h-14 w-14 overflow-hidden rounded-lg transition-all duration-300 ease-in-out",
          "bg-gradient-to-br from-blue-500 to-blue-700 group-hover:shadow-xl group-hover:shadow-blue-500/25",
          "group-hover:scale-110 shadow-lg",
          isScrolled ? "scale-90" : "scale-100",
        )}
      >
        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="h-full w-full flex items-center justify-center">
          <Image
            src="/weblistt-logo.png"
            alt="WebListt Logo"
            width={48}
            height={48}
            className="h-12 w-12 object-contain drop-shadow-sm"
          />
        </div>
      </div>
    </Link>
  )
}
