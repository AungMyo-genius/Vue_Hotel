<template>
  <section id="service" class="bg-light">
        <div class="container p-3">
            <!-- start title -->
            <h4 class="text-dark text-center display-3 my-3 mt-5 pt-2">Best Service For You</h4>
            <div class="under-title mb-5"></div>
            <!-- end title -->

            <div class="row">
                <div class="col-md-6 col-sm-12 text-center mx-auto imgboxs rooms">
                    <h3 class="display-6 bg-dark text-light p-1 rounded">ROOMS</h3>
                    <p class="lead bg-light text-dark p-1 rounded">A neat room will make you happy.</p>
                </div>
                 <div class="col-md-6 col-sm-12 text-center mx-auto imgboxs rests">
                    <h3 class="display-6 bg-dark text-light p-1 rounded">RESTAURANT</h3>
                    <p class="lead bg-light text-dark p-1 rounded">You say it. We will cook it.</p>
                </div>
                 <div class="col-md-6 col-sm-12 text-center mx-auto imgboxs spas">
                    <h3 class="display-6 bg-dark text-light p-1 rounded">SPA & FITNESS</h3>
                    <p class="lead bg-light text-dark p-1 rounded">“To keep the body in good health is a duty to keep our mind strong and clear.”</p>
                </div>
                <div class="col-md-6 col-sm-12 text-center mx-auto imgboxs envs">
                    <h3 class="display-6 bg-dark text-light p-1 rounded">Enviroment</h3>
                    <p class="lead bg-light text-dark p-1 rounded">Somewhere on your journey, don't forget to turn around and enjoy the view.</p>
                </div>
            </div>

        </div>
        <div class="container">
            <div class="row my-4">           
                <div class="col-md-4 mx-auto d-flex justify-content-start align-items-center my-2">
                    <font-awesome-icon icon="fa-solid fa-wifi" class="me-3" size="5x"></font-awesome-icon>
                    <div>
                        <h3 class="fw-bold">Enjoy free Wi-Fi</h3>
                        <p class="text-muted small">We believe that when a hotel advertises free WiFi, they should provide travelers with a fast and reliable connection.</p>
                    </div>
                </div>

                <div class="col-md-4 mx-auto d-flex my-2 justify-content-start align-items-center">
                    <font-awesome-icon icon="fa-solid fa-utensils" class="me-3" size="5x"></font-awesome-icon>
                    <div class="ms-3">
                        <h3 class="fw-bold">Concierge service</h3>
                        <p class="text-muted small">Top-tier hotels have a lot to recommend them: luxurious spas, twice-daily room service and superb on-site restaurants.</p>
                    </div>
                </div>

                <div class="col-md-4 mx-auto d-flex my-2 justify-content-start align-items-center">
                    <font-awesome-icon icon="fa-solid fa-swimming-pool" class="me-3" size="5x"></font-awesome-icon>
                    <div>
                        <h3 class="fw-bold">Pool access</h3>
                        <p class="text-muted small">Hotel has pool room, in particular, hotels based in big cities might require keycard access to get into the pool. Spa, and amenity access.</p>
                    </div>
                </div>

                <div class="col-md-4 mx-auto d-flex my-2 justify-content-start align-items-center">
                    <font-awesome-icon icon="fa-solid fa-mountain-sun" class="me-3" size="5x"></font-awesome-icon>
                    <div>
                        <h3 class="fw-bold">Views</h3>
                        <p class="text-muted small">There are many beautiful spots which you will love.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

export default {
    setup(){
        
        return {}
    }
}
</script>

<style>
/* Start Service section */
.under-title{
    width: 200px;
    height: 3px;
    background-color: #000;
    border-radius: 10px;

    margin: 0 auto;
}

.imgboxs{
    background: url(../../assets/img/gallery/h3.jpg);
    background-size: cover;
    height:300px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    transition: all .5s;
    overflow: hidden;
}

.imgboxs:hover{
    transform: scale(1.01);
}



.imgboxs h3,.imgboxs p{
    opacity: 0;
    transform: translateY(-50px) rotate(-10deg);
    transform-origin: top left;
    transition: transform .5s;
}

.imgboxs:hover h3, .imgboxs:hover p{
    opacity: 0.9;
    transform: translateY(0px);
}

.rests{
    background-image: url(../../assets/img/gallery/restaurance.jpg);
}

.spas{
    background-image: url(../../assets/img/gallery/spa&gym.jpg);
}

.envs{
    background-image: url(../../assets/img/gallery/enviroment.jpg);
}


/* End Service Section */
</style>