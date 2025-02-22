"use client"

import { useEffect, useState } from "react"
import Header from "../components/Header"

export default function Resultado() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const targetDate = new Date("2024-03-08T14:00:00")

    const calculateTimeLeft = () => {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    // Calcular inmediatamente
    calculateTimeLeft()

    // Actualizar cada segundo
    const timer = setInterval(calculateTimeLeft, 1000)

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-[#f5f5f5]">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-8">Resultado</h1>
          <p className="text-xl mb-8">El sorteo se realizará el 8 de marzo a las 2:00 PM</p>

          <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="text-4xl font-bold mb-2">{timeLeft.days}</div>
              <div className="text-gray-400">Días</div>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="text-4xl font-bold mb-2">{timeLeft.hours}</div>
              <div className="text-gray-400">Horas</div>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="text-4xl font-bold mb-2">{timeLeft.minutes}</div>
              <div className="text-gray-400">Minutos</div>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="text-4xl font-bold mb-2">{timeLeft.seconds}</div>
              <div className="text-gray-400">Segundos</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

