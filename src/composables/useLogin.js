import { ref } from "vue"
import { auth, authFun } from "../firebase/config"

const error = ref('')
const {signInWithEmailAndPassword} = authFun

const login = async (email,password) => {
    error.value = null
    
    try{
        const res = await signInWithEmailAndPassword(auth, email, password)

        if(!res) throw new Error("Firebase signin error")

        error.value = null
        console.log(res)
        return res
    }catch(err){
        error.value = err.message
    }

}

const useLogin = () => {
    return {login,error}
}

export default useLogin