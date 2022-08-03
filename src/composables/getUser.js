import { ref } from 'vue'
import { auth, onAuthStateChanged } from '../firebase/config'

const updateUser = ref(auth.currentUser)

onAuthStateChanged(auth , user => {
    updateUser.value = user
    // console.log("Current User is " , user)
})

const getUser = () => { return {updateUser}}

export default getUser