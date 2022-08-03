<template>
  <header>
        <!-- Start Nav -->
        <nav class="navbar navbar-expand-lg fixed-top d-flex align-items-center navbars" :class="[yscroll > 150 ? 'scroll' : '']">
            <a href="#" class="navbar-brand text-light mx-3 d-flex mt-2 align-items-center">
                <img src="../../assets/img/logo.png" class="logoimgs ms-3 me-1" alt="">
                <span style="color:#77A7CD" class="text-uppercase h3 flex-column">Light</span><span style="color:#003E71" class="h6 d-block">Idea</span>
            </a>

            <button class="navbar-toggler shadow-none navbuttons mt-1 me-5" data-bs-toggle="collapse" data-bs-target="#nav">
                <div class="lines1"></div>
                <div class="lines2"></div>
                <div class="lines3"></div>
            </button>

            <div class="navbar-collapse collapse justify-content-end text-uppercase fw-bolder text-center" id="nav">
                <ul class="navbar-nav">
                    <li class="navbar-item mx-auto"><a href="#" class="nav-link m-2 menuitems">Home</a></li>
                    <li class="navbar-item mx-auto"><a href="#service" class="nav-link m-2 menuitems">Service</a></li>
                    <li class="navbar-item mx-auto"><a href="#room" class="nav-link m-2 menuitems">Room</a></li>
                    <li class="navbar-item mx-auto"><a href="#gallery" class="nav-link m-2 menuitems">Gallery</a></li>
                    <li class="navbar-item mx-auto"><a href="#about" class="nav-link m-2 menuitems">about</a></li>
                    <li class="navbar-item mx-auto"><a href="#contact" class="nav-link m-2 menuitems">contact</a></li>
                </ul>
           </div>
        </nav>
        <!-- Start Nav -->

        <!-- Start Banner -->
        <div id="banner" class="text-center banners scroll p-3">
            <h1 class="display-1 bannerheaders">Welcome</h1>
            <p class="h5 bannerparagraphs">“Hospitality should have no other nature than love.” </p>
        </div>
        <!-- End Banner -->

        <!-- Start Booking Section -->
        <div class="container bookings scroll">
            <form action="" method="">
                <div class="row form-container">
                    
                    <div class="col-sm mx-auto my-1">
                        <input type="date" name="dob" id="dob" class="form-control form-control-sm rounded-0 shadow-none py-2 first"/>
                    </div>

                    <div class="col-sm mx-auto my-1">
                        <a href="#room" class="btn btn-dark btn-sm rounded-0 shadow-none py-2">Book Now</a>
                    </div>
                </div>
            </form>
        </div>
        <!-- End Booking Section -->

    </header>
</template>

<script>
import { ref, onMounted } from '@vue/runtime-core'


export default {
    setup(){
        let yscroll = ref()
        onMounted(() => window.addEventListener("scroll" , () => yscroll.value = scrollY ) )
        return {yscroll}
    }
}
</script>

<style>
/* Start Header */
header{
    height: 100vh;
    background-image:url('../../assets/img/gallery/h1.jpg');
    
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    position: relative;
}


/*Start Nav*/
.navbars{
    /* height: 100px; */
    background-color: rgba(232, 235, 233, 0.6);
    backdrop-filter: blur(5px);

    transition:all 1s;

    padding: 20px 0;
}

.navbars.scroll{
    background-color: rgb(232, 235, 233,0.97);
    backdrop-filter: blur(5px);

    padding: 0;

    box-shadow: 0 3px 10px rgba(0,0,0,0.3);
}


.logoimgs{
    display: block;
    height: 65px;
    transform: translateY(-10px);
}

.navbuttons{
    margin-top: -20px;
}

.lines1, .lines2, .lines3{
    font-weight: bold;
    width: 30px;
    height: 4px;
    background-color: #000;
    margin: 6px;
    

    transition: all 1s;
}


.changes .lines1{
    animation: line1 1s linear forwards;
}
.changes .lines2{
    opacity: 0;
}
.changes .lines3{
    animation: line3 1s linear forwards;
}

@keyframes line1{
    0%{
        transform: translateY(0);
    }
   
    50%{
        transform: translateY(10px);
    }
    100%{
        transform: translateY(10px) rotate(135deg);

    }
}

@keyframes line3{
    0%{
        transform: translateY(0);
    }
    50%{
        transform: translateY(-10px);
    }
    100%{
        transform: translateY(-10px) rotate(45deg);
    }
}

.lines1{
    animation: aaline1 1s linear forwards;
}

.lines2{
    opacity: 1;
    animation: aaline2 1s linear ;
}

.lines3{
    animation: aaline3 1s linear forwards;
}

@keyframes aaline1{
    0%{
        transform: translateY(10px) rotate(135deg);
    }
   
    50%{
        transform: translateY(10px);
    }
    100%{
        transform: translateY(0);
    }
}

@keyframes aaline2{
    0%{
        opacity: 0;
    }
    50%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
}

@keyframes aaline3{
    0%{
        transform: translateY(-10px) rotate(45deg);
    }
    50%{
        transform: translateY(-10px);
    }
    100%{
        transform: translateY(0);
    }
}

.menuitems{
    padding: 3px 0;
    width: 100px;
    color: #000;
    margin:0 auto ;
}

.menuitems:hover{
    border-bottom: 2px solid #000;
    color: #444;
}
/*End Nav*/

/* Start Banner */
.banners{
    text-shadow: 5px 5px 7px rgba(0,0,0,0.7);

    background: rgba(232, 235, 233, 0.6);
    border-radius: 40px;
    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-50%,-50%);
}

.bannerheaders{
    font-weight: 650;
}

.banners.scroll .bannerheaders{
    animation: bnani 2s 1;
}

.banners.scroll .bannerparagraphs{
    animation: bnani 2s 1;
    animation-delay: 0.5s;
    animation-fill-mode: backwards;
}

@keyframes bnani{
    0%{
        transform: translateY(150px);
        opacity: 0;
    }
    100%{
        transform: translate(0);
        opacity: 1;
    }
}
/* End Banner */

/* Start Booking Section */
.bookings{
    width: 50%;
    position: absolute;
    top: 75%;
    left: 50%;

    transform: translate(-50%);
    opacity: 1;
}

.bookings.scroll{
    animation: bookingani 1.5s linear forwards;
}

@keyframes bookingani{
    0%{
        top: 75%;
        transform: translate(-50%);
        opacity: 0;
    }
    100%{
        top: 85%;
        transform: translate(-50%);
        opacity: 1;
    }
}

.bookings .first,
.bookings .second,
.bookings .third{
    background-color: rgba(255, 255, 255, 0.767);
    backdrop-filter: blur(10px);
}

.form-container{
    display: flex;
    justify-content:center;
    align-items: center;
}

.bookings .mx-auto{
    padding: 0;
    height: 100;
}

form .btn{
    width: 100%;
    background-color: #111;
}
form .btn:hover{
    background-color: #444;
}


/* End Booking Section */
/* End Header */
</style>