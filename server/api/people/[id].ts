import { defineEventHandler } from 'h3'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const id = event.context.params.id
  const response = await fetch(`${config.public.apiBase}/people/${id}/`)
  return response.json()
})