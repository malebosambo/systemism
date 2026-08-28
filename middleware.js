export const config = {
  unstable_allowDynamic: [
    "**/node_modules/next-auth/**",
    "**/node_modules/@babel/runtime/**"
  ]
}
export { auth as middleware } from "./auth";