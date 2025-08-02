import { MessageCircle } from "lucide-react"
import { Button, type ButtonProps } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface WhatsAppButtonProps extends ButtonProps {
  phoneNumber: string
  message?: string
  floating?: boolean
}

export function WhatsAppButton({
  phoneNumber,
  message = "Hello! I'm interested in your web development services.",
  floating = false,
  className,
  children,
  ...props
}: WhatsAppButtonProps) {
  // Format phone number (remove any non-digit characters)
  const formattedPhone = phoneNumber.replace(/\D/g, "")

  // Create WhatsApp URL with pre-filled message
  const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodeURIComponent(message)}`

  if (floating) {
    return (
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-all hover:bg-green-600 hover:scale-110",
          className,
        )}
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    )
  }

  return (
    <Button
      as="a"
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn("bg-green-500 hover:bg-green-600", className)}
      {...props}
    >
      {children || (
        <>
          <MessageCircle className="mr-2 h-4 w-4" />
          Chat on WhatsApp
        </>
      )}
    </Button>
  )
}
