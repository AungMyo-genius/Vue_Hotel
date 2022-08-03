<template>
  <div class="signupforms">
        <div class="row container contents">
            <div v-if="!areUdev">
                <form @submit.prevent="checkSignup">
                    <div class="form-group">
                        <p class="display-6">Please answer to continue. <font-awesome-icon icon="fa-solid fa-arrow-right" /></p>
                        <p class="display-6">10 + '10' = ?</p>
                        <input type="text" v-model="ans" class="form-control">
                    </div>
                </form>
            </div>
            <div v-if="areUdev" class="col-md-6">
                <h3 class="mb-3 signin-text"> Sign Up</h3>
                <form @submit.prevent="signUp">
                    <div class="form-group mt-3">
                        <label for="text">Username</label>
                        <input type="text" v-model="name" class="form-control">
                    </div>
                    <div class="form-group mt-3">
                        <label for="email">Email</label>
                        <input type="email" v-model="email" class="form-control">
                    </div>
                    <div class="form-group mt-3">
                        <label for="password">Password</label>
                        <input type="password" v-model="password" class="form-control">
                    </div>
                    <button class="btn btn-class mt-3">Sign Up</button>
                    <div v-if="error" class="error">{{ error }}</div>
                    <div class="d-flex justify-content-end my-3">
                        <router-link :to="{name:'login'}" class="links me-3">Login</router-link>
                        <a class="links" @click="goBack">Not Admin</a>
                    </div>
                </form>
            </div>
            <div v-if="areUdev" class="col-md-6 mt-3">
                <img src="../assets/img/signup.svg" class="img-fluid signupimgs" alt="">
            </div>
        </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { useRouter } from 'vue-router'
import useSignUp from '../composables/useSignUp'
 
export default {
    setup(){
        const ans = ref('')
        const areUdev = ref(false)
        const router = useRouter()
        const name = ref('')
        const email = ref('')
        const password = ref('')
        const {error, createAccount} = useSignUp()

        const checkSignup = () => {
            if(ans.value === '1010') return areUdev.value = true
            return router.push({name:'home'})
        }

        const signUp = async () =>{
            let res = await createAccount(name.value,email.value,password.value)
            console.log(res)
            if(res) router.push({name:'adminpanel'})
        }

        const goBack = () => {
            router.push({name:"home"})
        }

        return {ans, 
                areUdev, 
                checkSignup, 
                name,
                email,
                password,
                error,
                signUp,
                goBack
            }
    }
}
</script>

<style scoped>
.signupforms{
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #5995fd;
}
.signupimgs{
    height: 25rem;
}

@media (max-width:550px){
    .signupimgs{
        height: 15rem;
}
}

.contents{
    margin:8%;
    background-color: #fff;
    padding:4rem 1rem 4rem 1rem;
    box-shadow: 0 0 5px 5px rgba(0, 0, 0, .05);
    border-radius: 30px;
}
.signing-text{
    font-style: normal;
    font-weight: 600 !important;
}
.form-control{
    display: block;
    width: 100%;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    border-color:#5995fd !important;
    border-style: solid !important;
    border-width: 0 0 1px 0 !important;
    padding: 0px !important;
    color:#495057;
    height: auto;
    border-radius: 0;
    background-color: #fff;
    background-clip:padding-box;
}
.form-control:focus{
    color:#495057;
    background-color:#fff;
    border-color: #fff;
    outline: 0;
    box-shadow: none;
}
.form-group{
    transition: all .3s;
    position: relative;
}
.form-group::after{
    content: '';
    width: 2px;
    height: 25px;
    position: absolute;
    bottom: 0;
    right: 0;
    background: #5995fd;
    opacity: 0;
}
.form-group:hover::after, .form-group:focus::after{
    opacity: 1;
}
.btn-class{
    border-color:#5995fd;
    color:#5995fd;
    background:transparent;
}

.btn-class:hover{
    background-color: #5995fd;
    color:#fff;
}
.links{
    text-decoration: none;
    cursor: pointer;
}
.links:hover{
    color:#000;
}
</style>