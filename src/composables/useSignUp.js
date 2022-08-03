import { ref } from 'vue'
import { auth, authFun } from '../firebase/config'

let error = ref(null)
let {createUserWithEmailAndPassword, updateProfile} = authFun

const createAccount = async (displayName, email, password) => {
    try{
        const res = await createUserWithEmailAndPassword(auth, email, password)

        if(!res){
            throw new Error("Could not create new user!")
        }

        updateProfile(auth.currentUser, {displayName})
        error.value = null;
        return res              
    }catch(err){
        error.value = err.message;
        // console.log(error.value);
    }
}

const useSignUp = () => {
    return {createAccount, error}
}

export default useSignUp