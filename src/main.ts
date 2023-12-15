import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


//importing local styles
import './assets/styles/main.css'
import './assets/styles/colors.css'
import './assets/styles/animations.css'
import './assets/styles/scrollbar.css'

//importing animations libraries
import 'aos/dist/aos.css';
import 'animate.css';

//@ts-ignore
import AOS from 'aos';
AOS.init()

createApp(App).use(router).mount('#app')
