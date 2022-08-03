import { ref } from 'vue'
import { db, dbFun } from '../firebase/config'

const { doc, deleteDoc, updateDoc } = dbFun
const useDocument = (collection_, id) => {

  let error = ref(null)
  let isPending = ref(false)
  let docRef = doc(db, collection_, id)

  const deletedoc = async () => {
    isPending.value = true
    error.value = null

    try {
      const res = await deleteDoc(docRef)
      isPending.value = false
      return res
    }
    catch(err) {
      console.log(err.message)
      isPending.value = false
      error.value = 'could not delete the document'
    }
  }

  const updatedoc = async (updates) => {
    isPending.value = true
    error.value = null

    try {
      const res = await updateDoc(docRef, updates)
      isPending.value = false
      return res
    }
    catch(err) {
      console.log(err.message)
      isPending.value = false
      error.value = 'could not update the document'
    }
  }

  return { error, isPending, deletedoc, updatedoc }

}

export default useDocument