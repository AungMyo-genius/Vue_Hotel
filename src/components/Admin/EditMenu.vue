<template>
<p v-if="isPending" class="danger-text">Loading</p>
<form v-else @submit.prevent class="mt-2">
  <div class="mb-2">
  <label for="formGroupExampleInput" class="form-label">Category</label>
    <select v-model="form.category" class="form-select">
        <option value="Delux">Delux</option>
        <option value="Standard">Standard</option>
        <option value="Studio">Studio</option>
    </select>
  </div>
<div class="mb-2">
  <label for="formGroupExampleInput2" class="form-label">Title</label>
  <input v-model="form.title" type="text" class="form-control" id="formGroupExampleInput2" placeholder="Title">
</div>
<img v-if="form.coverUrl" class="editImgs m-2" :src="form.coverUrl" alt="" />
<div class="mb-2 d-inline-block">
  <label for="formFile" class="form-label">
    <span v-if="error">{{error}}</span>
    <span v-if="fileError">{{fileError}}</span>
  </label>
  <input class="form-control" @change="handleChange" name="file" type="file">
</div>
<div class="m-2 d-inline-block">
  <label for="formGroupExampleInput3" class="form-label">Price</label>
  <input v-model.number="form.price" type="number" class="form-control" id="formGroupExampleInput3" placeholder="Price">
</div>
<div class="m-2 d-inline-block">
  <label for="formGroupExampleInput4" class="form-label">People Count</label>
  <input v-model.number="form.peopleCount" type="number" class="form-control" id="formGroupExampleInput4" placeholder="People Count">
</div>
<p class="mb-0">Service</p>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="Breakfast" id="flexCheckDefault" v-model="form.service"
   checked>
  <label class="form-check-label" for="flexCheckDefault">
    Breakfast
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="Message" id="flexCheckChecked" v-model="form.service"
  >
  <label class="form-check-label" for="flexCheckChecked">
    Message
  </label>
</div>
</form>
<button @click="updateMenu" type="submit" class="btn btn-outline-dark mx-2 d-inline-block mt-2">Accept</button>
<button @click="goback" type="submit" class="btn btn-outline-dark d-inline-block mt-2">Back</button>
</template>

<script>
import { ref } from '@vue/reactivity'
import { serverTimestamp } from '../../firebase/config'
import { useRouter ,useRoute } from 'vue-router'
import getDocument from '@/composables/getDocument'
import useStroage from '@/composables/useStorage'
import useDocument from '../../composables/useDocument'



export default {
    setup(){
        const image = ref(null)
        const router = useRouter()
        const route = useRoute()
        const fileError = ref(null)
        const { error, getSingleData ,isPending } = getDocument('rooms', route.params.id)
        const { uploadImage, url, filePath } = useStroage()
        const { updatedoc } = useDocument('rooms', route.params.id)
        
        const form = ref({
            category: '',
            price:'',
            peopleCount:'',
            title:'',
            createdAt:null,
            image:null,
            coverUrl:null,
            service:[]
        })


        // fetch singledata
        const res = getSingleData()
        res.then( data => {
          form.value = {
          category:data.category,
          price:data.price,
          peopleCount:data.peopleCount,
          title:data.title,
          createdAt:data.createdAt,
          image:data.image,
          coverUrl:data.coverUrl,
          service:[...data.service]
    } })


        // allowed file types
      const types = ['image/png', 'image/jpeg', 'image/jpg']
      const handleChange = (e) => {
      let selected = e.target.files[0]
      form.value.coverUrl = URL.createObjectURL(selected)
      if (selected && types.includes(selected.type)) {
        image.value = selected
        fileError.value = null
      } else {
        image.value = null
        fileError.value = 'Please select an image file (png or jpg)'
      }
      }
      
      const updateMenu = async () => {
        if(image.value){
          await uploadImage(image.value)
          await updatedoc({
            ...form.value,
            image:filePath.value,
            coverUrl:url.value,
            createdAt:serverTimestamp()
          })
          router.push({name:'adminpanel'})
        }else{
          await updatedoc({...form.value, createdAt:serverTimestamp()})
          router.push({name:'adminpanel'})
        }
      }

        const goback = () => router.push({name:'menudata'})
        
        return { image
                 ,form 
                 ,goback
                 ,error 
                 ,isPending
                 ,handleChange
                 ,fileError
                 ,updateMenu }
    }
}
</script>
<style scoped>
.editImgs{
  width:150px;
  height: 150px;
  object-fit: cover;
}
</style>