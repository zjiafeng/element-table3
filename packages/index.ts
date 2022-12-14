// index.ts 注册组件并导出
import type { App, Plugin } from 'vue';

import Components from './components';
const INSTALLED_KEY = Symbol('INSTALLED_KEY');

export const makeInstaller = (components: Plugin[] = []) => {
  const install = (app: App | any) => {
    if (app[INSTALLED_KEY]) return;

    app[INSTALLED_KEY] = true;
    components.forEach(c => app.use(c));
  };

  return {
    install,
  };
};

export default makeInstaller([...Components]);