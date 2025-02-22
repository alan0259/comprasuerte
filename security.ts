import DOMPurify from "dompurify"

export function sanitizeInput(input: string): string {
  return DOMPurify.sanitize(input)
}

export function validateInput(input: string, type: "name" | "id" | "address" | "phone"): boolean {
  switch (type) {
    case "name":
      return /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{2,50}$/.test(input)
    case "id":
      return /^\d{11}$/.test(input)
    case "address":
      return input.length >= 5 && input.length <= 100
    case "phone":
      return /^\+?[0-9]{8,15}$/.test(input)
    default:
      return false
  }
}

