"use client"

import { Button } from "@/components/ui/button"
import { Languages, Moon, Sun } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

type Props = {}

const LandingPageNavbar = (props: Props) => {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }
  return(
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Languages className="h-6 w-6" />
          <span className="text-xl font-bold">VideoLingua</span>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link href="#features" className="text-sm font-medium hover:text-primary">
            Features
          </Link>
          <Link href="#how-it-works" className="text-sm font-medium hover:text-primary">
            How It Works
          </Link>
          <Link href="#pricing" className="text-sm font-medium hover:text-primary">
            Pricing
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button variant="ghost" size="sm">
            Log in
          </Button>
          <Button size="sm">Sign up free</Button>
        </div>
      </div>
    </header>
  )
}

export default LandingPageNavbar