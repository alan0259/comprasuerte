import Link from "next/link"
import { Logo } from "./Logo"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="bg-[#1a1a1a] text-[#f5f5f5] p-4">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between sm:items-center">
          <Link href="/" className="flex items-center">
            <Logo />
            <span className="ml-2 text-2xl sm:text-3xl font-bold lowercase tracking-wider">comprasuerte</span>
          </Link>
          <nav className="flex justify-center gap-2 w-full sm:w-auto">
            <Button
              asChild
              variant="outline"
              className="flex-1 sm:flex-initial text-sm sm:text-base bg-white text-[#1a1a1a] hover:bg-gray-200 sm:bg-transparent sm:text-[#f5f5f5] sm:hover:bg-gray-800 sm:hover:text-white"
            >
              <Link href="/">Inicio</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="flex-1 sm:flex-initial text-sm sm:text-base bg-white text-[#1a1a1a] hover:bg-gray-200 sm:bg-transparent sm:text-[#f5f5f5] sm:hover:bg-gray-800 sm:hover:text-white"
            >
              <Link href="/comprar">Comprar</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="flex-1 sm:flex-initial text-sm sm:text-base bg-white text-[#1a1a1a] hover:bg-gray-200 sm:bg-transparent sm:text-[#f5f5f5] sm:hover:bg-gray-800 sm:hover:text-white"
            >
              <Link href="/resultado">Resultado</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}

