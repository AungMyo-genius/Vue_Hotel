<template>
  <div class="d-flex" id="wrapper">
        <!-- Sidebar -->
        <div class="bg-dark text-light" id="sidebar-wrapper">
            <div class="sidebar-heading text-center primary-text fs-5 fw-bold text-uppercase border-bottom d-flex justify-content-lg-end justify-content-center align-items-center py-2 my-2 pe-0 pe-lg-3">
                <router-link :to="{name:'menudata'}" class="bg-transparent text-second">
                  <span class="d-none d-lg-inline-block">Light Idea</span>
                  <font-awesome-icon icon="fa-solid fa-hotel" class="ms-1 ms-lg-2"></font-awesome-icon>
                </router-link>
            </div>
            <p class="primary-text fw-bold border-bottom d-flex justify-content-lg-end justify-content-center align-items-center my-2 pt-2 pb-3 pe-0 pe-lg-3">
                <span class="d-none d-lg-inline-block">{{updateUser.displayName.charAt(0).toUpperCase() + updateUser.displayName.slice(1)}}</span>
                <font-awesome-icon icon="fa-solid fa-user" class="ms-1 ms-lg-2"></font-awesome-icon>
            </p>
            <div class="list-group list-group-flush my-3">

                <router-link :to="{name:'menudata'}" @click="activeMenu('menudata')" :class="{active:menuActive==='menudata'}"
                  class=" d-flex justify-content-lg-end justify-content-center align-items-center list-group-item list-group-item-action bg-transparent second-text">
                    <span class="d-none d-lg-inline-block">Room Menu Lists</span>
                    <font-awesome-icon icon="fa-solid fa-key" class="ms-1 ms-lg-2" />
                </router-link>

                <router-link :to="{name:'addmenu'}" @click="activeMenu('addmenu')" :class="{active:menuActive==='addmenu'}"
                class=" d-flex justify-content-lg-end justify-content-center align-items-center list-group-item list-group-item-action bg-transparent second-text">
                    <span class="d-none d-lg-inline-block">Add Menu</span>
                    <font-awesome-icon icon="fa-solid fa-add" class="ms-1 ms-lg-2" />
                </router-link>

                <router-link :to="{name:'stillworking'}" @click="activeMenu('stillworking')" :class="{active:menuActive==='stillworking'}"
                class=" d-flex justify-content-lg-end justify-content-center align-items-center list-group-item list-group-item-action bg-transparent second-text fw-bold">
                    <span class="d-none d-lg-inline-block">Gallery</span>
                    <font-awesome-icon icon="fa-solid fa-file-image" class="ms-1 ms-lg-2" /> 
                </router-link>

                <a href="#" @click="goback" :class="{active:menuActive==='goback'}"
                class=" d-flex justify-content-lg-end justify-content-center align-items-center list-group-item list-group-item-action bg-transparent second-text fw-bold">
                    <span class="d-none d-lg-inline-block">Home</span>
                    <font-awesome-icon icon="fa-solid fa-arrow-right" class="ms-1 ms-lg-2" />
                </a>          
                <a href="#" @click="logout" :class="{active:menuActive==='logout'}"
                class=" d-flex justify-content-lg-end justify-content-center align-items-center list-group-item list-group-item-action bg-transparent text-danger fw-bold">
                    <span class="d-none d-lg-inline-block">Logout</span>
                    <font-awesome-icon icon="fa-solid fa-power-off" class="ms-1 ms-lg-2"></font-awesome-icon>
                </a>

            </div>
        </div>
        <!-- /#sidebar-wrapper -->

        <!-- Page Content -->
        <div id="page-content-wrapper">
            <span class="danger-text" v-if="error">{{error}}</span>
            
            <nav  v-if="menuActive==='menudata'"  class="navbar navbar-dark bg-dark d-flex justify-content-end fixed-top navbars">
            <form @submit.prevent class="d-flex">
                      <input type="text" class="form-control form-control-sm me-2 m-1" v-model="search" placeholder="Category" @change.capture="searchChange" />
            </form> 
            </nav>
            <div class="container-fluid px-4" :class="{'margin-tops':menuActive==='menudata'}">
              <router-view></router-view>
            </div>
          </div>
    </div>
</template>

<script>
import { ref, watch } from 'vue'
import getUser from '../composables/getUser'
import useSignout from '@/composables/useSignout'
import { useRouter } from 'vue-router'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

export default {
  components: { 
    
    },
    setup(){
       
       const {updateUser} = getUser()
       const { error, signout } = useSignout()
       const router = useRouter()
       const route = useRoute()
       const search = ref('')
       
       const store = useStore()
       store.commit('SEARCH_TITLE', search.value)

       //get Active from route.path
       const activeRoute = ref(route.path.slice(route.path.lastIndexOf('/') + 1))
       watch(route, () => activeRoute.value = route.path.slice(route.path.lastIndexOf('/') + 1))
       

       const menuActive = ref(activeRoute)
       const currentTab = ref(activeRoute)
       //for sidebar
       const activeMenu = (active) => {
        menuActive.value = active
        currentTab.value = active
       }


       //search vuex
       const searchChange = () => {
          store.commit('SEARCH_TITLE', search.value)
       }

       //for logout
       const logout = () =>{
        signout()
        if(!error.value){
          router.push({name:'login'})
        }
       }

       //goback
       const goback = () => {
          router.push({name:'home'})
       }

       
       return {menuActive
              ,activeMenu
              ,currentTab
              ,logout
              ,updateUser
              ,goback
              ,error
              ,search
              ,searchChange}
    }
}
</script>

<style scoped>
:root {
  --main-bg-color: #5995fd;
  --main-text-color: #5995fd;
  --second-text-color: #bbbec5;
  --second-bg-color: #c1efde;
}

.primary-text {
  color: var(--main-text-color);
}

.second-text {
  color: var(--second-text-color);
}

.primary-bg {
  background-color: var(--main-bg-color);
}

.secondary-bg {
  background-color: var(--second-bg-color);
}

.rounded-full {
  border-radius: 100%;
}

#wrapper {
  overflow-x: hidden;
}

#sidebar-wrapper {
  min-height: 100vh;
  position: fixed;
  left:0;
  -webkit-transition: margin 0.25s ease-out;
  -moz-transition: margin 0.25s ease-out;
  -o-transition: margin 0.25s ease-out;
  transition: margin 0.25s ease-out;
  z-index: 2;
}

#sidebar-wrapper .list-group {
  width: 3rem;
}

#page-content-wrapper {
  min-width: 100vw;
  margin-left: 2rem;
  height: 100vh;
}

#wrapper.toggled #sidebar-wrapper {
  margin-left: 0;
}

#menu-toggle {
  cursor: pointer;
}

.list-group-item {
  border: none;
}

.list-group-item.active {
  background-color: #5995fd !important;
  color: #fff !important;
  font-weight: bold;
  border: none;
}

@media (min-width: 990px) {
  #sidebar-wrapper {
    margin-left: -3rem;
  }

  #page-content-wrapper {
    min-width: 0;
    width: 100%;
    height: 100vh;
    margin-left:11.25rem;
  }

  #wrapper.toggled #sidebar-wrapper {
    margin-left: -15rem;
  }
  #sidebar-wrapper .list-group {
  width: 15rem;
 }
}

.navbars{
  z-index: 1;
}

.margin-tops{
  margin-top: 4rem;
}
</style>