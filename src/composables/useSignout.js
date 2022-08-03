import { ref } from "vue";
import { auth, authFun} from '../firebase/config'

const error = ref('')
const { signOut } = authFun

const signout = async() =>{
    error.value = null

    try{
        signOut(auth)
    }catch(err){
        error.value = err.message
    }
}

const useSignout = ()  => {
    return {error, signout}
}

export default useSignout