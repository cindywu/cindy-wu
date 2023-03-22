// The websocket address will be ws:// when developing locally or wss://
// in production. Likewise the reflect server is accessible via http://
// in development and https:// in production.
//
// Note: process.env has to be used instead of importing env because Next.js
// apparently does string substitution.
export const workerWsURI : any =
  process.env.NEXT_PUBLIC_WORKER_HOST
export const workerURL = workerWsURI && workerWsURI.replace(/^ws/, "http");
