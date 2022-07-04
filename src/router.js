import { createRouter, createWebHashHistory } from "vue-router";
import Model from './components/model.vue'
import App from './App.vue'

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', component: App },
        { path: '/model', name: 'model', component: Model },
    ]
})