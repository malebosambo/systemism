export const config = {
  unstable_allowDynamic: [
    "./auth.js"
  ]
}
export { auth as middleware } from "./auth";