import { createInertiaApp } from '@inertiajs/vue3'
import { renderToString } from '@vue/server-renderer'
import { createSSRApp, h, type DefineComponent } from 'vue'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import ToastService from 'primevue/toastservice'
import ConfirmationService from 'primevue/confirmationservice'
import AppLayout from '~/layouts/AppLayout.vue'

const appName = import.meta.env.VITE_APP_NAME || 'Domain Manager'

export default function render(page: any) {
  return createInertiaApp({
    page,
    render: renderToString,
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => {
      const pages = import.meta.glob<DefineComponent>('../pages/**/*.vue', { eager: true })
      const resolvedPage = pages[`../pages/${name}.vue`]
      resolvedPage.default.layout = resolvedPage.default.layout || AppLayout

      return resolvedPage
    },

    setup({ App, props, plugin }) {
      const app = createSSRApp({ render: () => h(App, props) })
      app.use(plugin)
      app.use(PrimeVue, {
        theme: {
          preset: Aura,
        },
      })
      app.use(ToastService)
      app.use(ConfirmationService)
      return app
    },
  })
}
