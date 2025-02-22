import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { headers } from "next/headers"

export const metadata: Metadata = {
  title: "Comprasuerte",
  description: "Compra boletos para ganar premios increíbles",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Añadir encabezados de seguridad
  headers({
    "X-Frame-Options": "DENY",
    "X-Content-Type-Options": "nosniff",
    "Referrer-Policy": "origin-when-cross-origin",
    "Content-Security-Policy":
      "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:;",
  })

  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}

import "./globals.css"



import './globals.css'