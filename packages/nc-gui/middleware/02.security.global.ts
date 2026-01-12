/**
 * Security middleware for iframe embedding
 * Modified for MySandbox prototype - allows iframe embedding from my-sandbox.io
 */
export default defineNuxtRouteMiddleware(async (to) => {
  // Check if we're in an iframe
  if (self !== top) {
    // Allow embedding from MySandbox domains
    const parentOrigin = document.referrer || ''
    if (parentOrigin.includes('my-sandbox.io') || parentOrigin.includes('localhost')) {
      return // Allowed for MySandbox
    }

    // Allow for shared base (original behavior)
    if (to.path.startsWith('/base/')) {
      return
    }

    // Allow for shared views based on page layout (original behavior)
    if (to.meta?.layout === 'shared-view') {
      return
    }

    // Allow for shared views based on pageType meta prop (original behavior)
    if (to.meta?.pageType === 'shared-view') {
      return
    }

    // Block other iframe sources
    throw createError({ statusCode: 403, message: 'Not allowed' })
  }
})
