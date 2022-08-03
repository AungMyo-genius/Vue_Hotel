import { storage, storageFun } from '../firebase/config'
import { ref } from 'vue'

const { uploadBytes, getDownloadURL, deleteObject} = storageFun

const useStroage = () => {
    const errorUpload = ref(null)
    const url = ref(null)
    const filePath = ref(null)

    const uploadImage = async (file) => {
        filePath.value = `images/${file.name}`
        const storageRef = storageFun.ref(storage, filePath.value)

        try{
            await uploadBytes(storageRef, file)
            url.value = await getDownloadURL(storageFun.ref(storage,filePath.value))
            errorUpload.value = null
        }catch(err){
            errorUpload.value = err.message
            console.log(err.message)
        }
    }

    const deleteImage = async(file) => {
        filePath.value = `images/${file}`
        const storageRef = storageFun.ref(storage, filePath.value)
        try{
            await deleteObject(storageRef, file)
        }catch(err){
            errorUpload.value = err.message
            console.log(err.message)
        }
    }

    

    return { uploadImage, url, filePath, errorUpload, deleteImage }
} 

export default useStroage