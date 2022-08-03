<template>
  <NavBar></NavBar>
  <ServiceSection></ServiceSection>
  <RoomType></RoomType>
  <GalleryPage></GalleryPage>
  <AboutUs></AboutUs>
</template>

<script>
import NavBar from '../components/Home/NavBar'
import ServiceSection from '../components/Home/ServiceSection'
import RoomType from '../components/Home/RoomType'
import GalleryPage from '../components/Home/GalleryPage'
import AboutUs from '../components/Home/AboutUs'

export default {
  name: 'HomeView',
  components: {
    NavBar,
    ServiceSection,
    GalleryPage,
    RoomType,
    AboutUs
  }
}
</script>
