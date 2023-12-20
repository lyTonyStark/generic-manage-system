import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import 'virtual:windi.css'
import router from './router'
import * as ElIcon from '@element-plus/icons-vue'  // import all element-plus icons
import  store  from './store'


const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
for (let iconName in ElIcon){
    app.component(iconName, ElIcon[iconName])
}
app.use(store)
