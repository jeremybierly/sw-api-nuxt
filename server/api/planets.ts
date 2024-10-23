import { defineEventHandler } from 'h3'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const response = await fetch(`${config.public.apiBase}/planets/`)
  return response.json()
})