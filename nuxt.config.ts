// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      helloText: 'Hello',
    },
  },
  future: { compatibilityVersion: 4 },
  compatibilityDate: '2024-07-30',

  hub: {
    database: true,
    kv: true,
  },

  modules: [
    '@nuxt/eslint',
    '@nuxtjs/google-fonts',
    'dayjs-nuxt',
    '@nuxtjs/device',
    '@morev/vue-transitions/nuxt',
    '@hypernym/nuxt-gsap',
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', 'acceptHMRUpdate', 'useDayjs'],
        storesDirs: ['./stores/**'],
      },
    ],
  ],
  
  googleFonts: {
    families: {
      Inter: '300..800',
    },
    display: 'swap',
    preload: true,
    useStylesheet: true,
    base64: true,
    download: true,
  },
  tailwindcss: {
    cssPath: ['~/assets/styles/index.scss', { injectPosition: 'first' }],
    configPath: 'tailwind.config',
    exposeConfig: {
      level: 2,
    },
    config: {},
    // viewer: true,
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: [
    '~/assets/styles/index.scss',
  ],

  devtools: { enabled: true },  

  eslint: {
    config: {
      stylistic: {
        quotes: 'single',
      },
    },
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler' // or "modern"
        }
      }
    }
  },
})
