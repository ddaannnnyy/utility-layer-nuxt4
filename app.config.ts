
/* Nuxt 5 is dropping support for app.config.ts
  So I'm intentionally leaving this default.
  https://masteringnuxt.com/blog/nitro-v3-whats-coming-with-nuxt-5#app-config-support-completely-removed

  The main things that I used the app.config for were white label customisation, as well as layer version handling.
  All of this is now handled in the nuxt.config runtimeConfig
*/

export default defineAppConfig({
  myLayer: {
    name: 'Hello from Nuxt layer'
  }
})

declare module '@nuxt/schema' {
  interface AppConfigInput {
    myLayer?: {
      /** Project name */
      name?: string
    }
  }
}
