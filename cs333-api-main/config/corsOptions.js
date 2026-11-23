import { allowedOrigins } from './allowedOrigins.js'

// CORS only matters when a page on a *different* site calls this API.
// On your laptop, Vite's proxy sends /api/ here (see cs333-main/vite.config.js).
// On your server, nginx sends /api/ here. Either way the browser sees one site.
//
// For an origin that isn't in the list we answer "no CORS headers" (false)
// instead of throwing an error. Throwing would turn every request from your own
// server's address into a 500 error.
export const corsOptions = {
  origin: (origin, callback) => {
    const allowed = !origin || allowedOrigins.includes(origin)
    callback(null, allowed)
  }
}
