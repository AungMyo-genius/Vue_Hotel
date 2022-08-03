import { ref,watchEffect } from 'vue'
import { db, dbFun } from '../firebase/config'

const { collection, 
        orderBy, 
        onSnapshot, 
        query,
        where
        } = dbFun


const getCollection = (collection_) =>{
    let error = ref(null)
    let documents = ref(null)
    let isPending = ref(false)
    
   
    const fetchAll = (query_) => {
    const colRef = collection(db, collection_)
    const q = query(colRef, orderBy(query_, 'desc'))
    let results = []
    isPending.value = true

    const unsub = onSnapshot(q , snapshot => {
        snapshot.docs.forEach( doc => {
            results.push({...doc.data(), id:doc.id}) 
        })
        isPending.value = false
        documents.value = results
        error.value = null

    }, err => {
        documents.value = null
        isPending.value = false
        error.value = 'could not fetch the data' + err.message
    })

    watchEffect((onInvalidate) => {
        // unsub from prev collection when watcher is stopped (component unmounted)
        onInvalidate(() => unsub());
      });
    }


    const fetchQuery = (data_ ,wherec_) => {

    const colRef = collection(db, collection_)
    const q = query(colRef, where(data_, "==", wherec_))
    let results = []
    isPending.value = true

    const unsub = onSnapshot(q , snapshot => {
        snapshot.docs.forEach( doc => {
            results.push({...doc.data(), id:doc.id}) 
        })
        isPending.value = false
        documents.value = results
        error.value = null
      
    }, err => {
        documents.value = null
        isPending.value = false
        error.value = 'could not fetch the data' + err.message
    })

    watchEffect((onInvalidate) => {
        // unsub from prev collection when watcher is stopped (component unmounted)
        onInvalidate(() => unsub());
      });
    }
    

    return {documents, error, isPending ,fetchAll ,fetchQuery}
}

export default getCollection