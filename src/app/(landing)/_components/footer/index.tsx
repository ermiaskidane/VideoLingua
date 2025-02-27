import { Languages } from "lucide-react"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div className="flex items-center gap-2">
          <Languages className="h-6 w-6" />
          <span className="text-lg font-bold">VideoLingua</span>
        </div>
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          © 2024 VideoLingua. All rights reserved.
        </p>
        <div className="flex gap-4">
          <Link href="#" className="text-sm text-muted-foreground hover:underline">
            Privacy Policy
          </Link>
          <Link href="#" className="text-sm text-muted-foreground hover:underline">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer