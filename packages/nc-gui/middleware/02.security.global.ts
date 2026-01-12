/**
 * Security middleware for iframe embedding
 * Modified for MySandbox prototype - allows ALL iframe embedding
 * Original file blocked iframes; this version is permissive for demo purposes
 */
export default defineNuxtRouteMiddleware(async (_to) => {
  // MySandbox Prototype: Allow ALL iframe embedding
  // For production, add proper origin validation
  return
})
