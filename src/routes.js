import Hello from './components/HelloWorld.vue'
import One from './components/One.vue'
import Two from './components/Two.vue'
import Three from './components/Three.vue'
import Four from './components/Four.vue'
import Success from './components/SuccessPage.vue'
import Admin from './components/Admin.vue'
import Bye from './components/Bye.vue'


export default[
{ path: '/', component:  One},
{ path: '/home', component: Hello },
{ path: '/2', component: Two },
{ path: '/3', component: Three },
{ path: '/4', component: Four },
{ path: '/confirm', component: Success },
{ path: '/admin', component: Admin },
{ path: '/bye', component: Bye }

]
    
