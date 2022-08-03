import { ref } from 'vue'
import { dbFun, db } from '../firebase/config'

let error = ref(null)
let isPending = ref(false)

const { doc, getDoc } = dbFun
const getDocument = (collection, id) => {
  isPending.value = true
  // register the firestore collection reference
  let documentRef = doc(db, collection, id)

  const getSingleData = async () => {
    try{
      const docSnap  = await getDoc(documentRef)
      // need to make sure the doc exists & has data
      if(docSnap.exists()) {
        error.value = null
        isPending.value = false
        return {...docSnap.data(), id: docSnap.id}
      }
      else {
        error.value = 'that document does not exist'
        isPending.value = false
      }
    } catch(err){
      error.value = 'Get Data Error with' + err.message
      isPending.value = false
    }
  }
  
  return { error , isPending, getSingleData }
}

export default getDocument