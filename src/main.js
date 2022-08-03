import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Fontawesome
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faArrowRight, 
         faUtensils, 
         faWifi, 
         faSwimmingPool, 
         faMountainSun, 
         faUserFriends, 
         faWineGlass,
         faDollarSign,
         faMagnifyingGlass,
         faBars,
         faPowerOff,
         faHotel,
         faUser,
         faKey,
         faFileImage,
         faAdd
          } from '@fortawesome/free-solid-svg-icons'



library.add( faWifi
            ,faUtensils
            ,faSwimmingPool
            ,faMountainSun
            ,faUserFriends
            ,faWineGlass
            ,faDollarSign
            ,faMagnifyingGlass
            ,faBars
            ,faDollarSign
            ,faArrowRight
            ,faPowerOff
            ,faHotel
            ,faUser
            ,faKey
            ,faFileImage
            ,faAdd
            )


// Bootstrap
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"

//firebase 
import {auth ,onAuthStateChanged} from './firebase/config'

//Vue Pagination
import VueAwesomePaginate from "vue-awesome-paginate";

let app
onAuthStateChanged(auth , () => {
    if(!app){
    app = createApp(App)
            .use(store)
            .use(router)
            .component('font-awesome-icon', FontAwesomeIcon)
            .use(VueAwesomePaginate)
            .mount('#app')
    }
})
            
