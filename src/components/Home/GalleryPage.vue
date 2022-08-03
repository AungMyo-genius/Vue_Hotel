<template>
  <section id="gallery" class="py-2 py-lg-5">
        <div class="container-fluid">
            <!-- start title -->
            <h2 class="text-dark text-center display-3 my-2 my-lg-5">Gallery</h2>
            <div class="under-title mb-5"></div>
            <!-- end title -->


            <div class="container-fluid">
                <div class="d-flex justify-content-center flex-wrap">
                    <div class="filters">
                        <img src="../../assets/img/gallery/rose.jpg" class="img-fluid" width="300px" alt="fphoto1" />
                    </div>
                    <div class="filters">
                        <img src="../../assets/img/gallery/viprose.jpg" class="img-fluid" width="300px" alt="fphoto2" />
                    </div>
                    <div class="filters">
                        <img src="../../assets/img/gallery/vviprose.jpg" class="img-fluid" width="300px" alt="fphoto3" />
                    </div>
                    <div class="filters">
                        <img src="../../assets/img/gallery/jasmine.jpg" class="img-fluid" width="300px" alt="fphoto4" />
                    </div>
                    <div class="filters">
                        <img src="../../assets/img/gallery/vipjasmine.jpg" class="img-fluid" width="300px" alt="fphoto5" />
                    </div>
                    <div class="filters">
                        <img src="../../assets/img/gallery/vvipjasmine.jpg" class="img-fluid" width="300px" alt="fphoto6" />
                    </div>
                    <div class="filters">
                        <img src="../../assets/img/gallery/lavander.jpg" class="img-fluid" width="300px" alt="fphoto7" />
                    </div>
                    <div class="filters">
                        <img src="../../assets/img/gallery/viplavander.jpg" class="img-fluid" width="300px" alt="fphoto8" />
                    </div>
                    <div class="filters">
                        <img src="../../assets/img/gallery/vviplavander.jpg" class="img-fluid" width="300px" alt="fphoto9" />
                    </div>
                    <div class="filters">
                        <img src="../../assets/img/gallery/lily.jpg" class="img-fluid" width="300px" alt="fphoto10" />
                    </div>
                    <div class="filters">
                        <img src="../../assets/img/gallery/viplily.jpg" class="img-fluid" width="300px" alt="fphoto11" />
                    </div>
                    <div class="filters">
                        <img src="../../assets/img/gallery/vviplily.jpg" class="img-fluid" width="300px" alt="fphoto12" />
                    </div>
                    <div class="filters">
                        <img src="../../assets/img/gallery/h3.jpg" class="img-fluid" width="300px" alt="h1" />
                    </div>
                    <div class="filters">
                        <img src="../../assets/img/gallery/h1.jpg" class="img-fluid" width="300px" alt="h3" />
                    </div>
                    <div class="filters">
                        <img src="../../assets/img/gallery/lavander.jpg" class="img-fluid" width="300px" alt="h5" />
                    </div>
                    <div class="filters">
                        <img src="../../assets/img/gallery/h5.jpg" class="img-fluid" width="300px" alt="h2" />
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style>
.filters{
    overflow: hidden;
    cursor:pointer;
}

.filters img{
    transition: all 2.5s;
}

.filters:hover img{
    transform: scale(1.3);
}
</style>