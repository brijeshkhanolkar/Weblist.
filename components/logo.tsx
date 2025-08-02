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
          "relative h-12 w-48 overflow-hidden transition-all duration-300 ease-in-out",
          "group-hover:scale-105",
          isScrolled ? "scale-90" : "scale-100",
        )}
      >
        <Image
          src="/weblistt-logo.png"
          alt="WEBLISTT - Professional Web Development"
          width={192}
          height={48}
          className="h-12 w-48 object-contain transform transition-transform duration-300"
          priority
        />
      </div>
    </Link>
  )
}
