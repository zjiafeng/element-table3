/// <reference types="vite/client" />

declare module '*.vue' {
  import type { PluginInstallFunction } from 'vue'
  const component: PluginInstallFunction<{}, {}, any>
  export default component
}
