import { ref } from 'vue'
import { db, dbFun } from '../firebase/config'

const { collection, addDoc } = dbFun

const useCollection = (collection_) => {
    const isPending = ref(false)
    const error = ref(null)
    const add_doc = async (doc) => {
        isPending.value = true
        try{
            const colRef = await collection(db, collection_)
            addDoc(colRef, doc)
            error.value = null
            isPending.value = false
        }catch(err){
            error.value = err.message
        }
    }

    return { add_doc, error , isPending}
}

export default useCollection