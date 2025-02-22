import { NextResponse } from "next/server"

const soldTickets = new Set<number>()
const clients = new Set<ReadableStreamDefaultController>()

export async function GET() {
  const stream = new ReadableStream({
    start(controller) {
      clients.add(controller)

      // Enviar los boletos vendidos inicialmente
      controller.enqueue(`data: ${JSON.stringify({ soldTickets: Array.from(soldTickets) })}\n\n`)

      // Mantener la conexión viva
      const keepAlive = setInterval(() => {
        controller.enqueue(": keepalive\n\n")
      }, 15000)

      // Limpiar cuando el cliente se desconecte
      return () => {
        clearInterval(keepAlive)
        clients.delete(controller)
      }
    },
  })

  return new NextResponse(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    },
  })
}

export async function POST(request: Request) {
  const data = await request.json()
  const ticketNumber = data.ticketNumber

  if (typeof ticketNumber !== "number" || soldTickets.has(ticketNumber)) {
    return NextResponse.json({ success: false, message: "Boleto no disponible" }, { status: 400 })
  }

  soldTickets.add(ticketNumber)

  // Notificar a todos los clientes conectados
  clients.forEach((client) => {
    client.enqueue(`data: ${JSON.stringify({ soldTickets: Array.from(soldTickets) })}\n\n`)
  })

  return NextResponse.json({ success: true, message: "Boleto comprado con éxito" })
}

