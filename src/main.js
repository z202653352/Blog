

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './router'

import './styles/global.scss' // 全局样式
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
//引入Elmessage和Elloading的css样式文件
import 'element-plus/theme-chalk/el-loading.css';
import 'element-plus/theme-chalk/el-message.css';

// 瀑布流
import V3waterfall from 'v3-waterfall'
import 'v3-waterfall/dist/style.css'

// 预览组件以及样式
import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
// VuePress主题以及样式（这里也可以选择github主题）
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';
// Prism
import Prism from 'prismjs'

// 代码高亮
import 'prismjs/components/prism-json';
// 选择使用主题
VMdPreview.use(vuepressTheme, {
  Prism,
});

// 评论
import UndrawUi from 'undraw-ui'
import 'undraw-ui/dist/style.css'

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(createPinia().use(piniaPluginPersistedstate))
app.use(router)
// 引入v-md-editor预览组件
app.use(VMdPreview);
app.use(V3waterfall);
app.use(UndrawUi)
app.mount('#app')
