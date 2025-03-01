"use client"

import { Button } from "@/components/ui/button"
import { authClient } from "@/lib/auth-client"
import { Languages, LogOut, Moon, Sun } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import DropDown from "@/components/global/drop-down"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

type Props = {}

const LandingPageNavbar = (props: Props) => {
  const [darkMode, setDarkMode] = useState(false)

  const { 
    data: session, 
    // isPending, //loading state
    // error, //error object
    // refetch //refetch the session
  } = authClient.useSession() 

  const router = useRouter()

  console.log(":::::::::::::::", session)

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

  const onLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/"); // redirect to login page
        },
      },
    });
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
        <div className="flex items-center gap-4 pr-3">
          <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          {
            session ? (
              <DropDown
              title={session.user.name}
              trigger={
                <Avatar className="cursor-pointer">
                  <AvatarImage src={session.user.image || undefined} alt="user" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
              }
              >
                {/* <h2 className="text-md pl-3 pb-2"></h2> */}
                <Button
                  onClick={onLogout}
                  variant="ghost"
                  className="flex gap-x-3 px-2 justify-start w-full"
                >
                  <LogOut />
                  Logout
                </Button>
              </DropDown>
            ) : (
              <Link href="/sign-in">
                Log in
              </Link>
            )
          }
        </div>
      </div>
    </header>
  )
}

export default LandingPageNavbar