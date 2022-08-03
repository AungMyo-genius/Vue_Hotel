<template>
  <section id="contact" class="my-2 my-lg-5 mx-auto">
    <div class="container">
        <h2 class="text-dark text-center display-3 my-2 my-lg-5">About & Contact Us</h2>
        <div class="under-title mb-5"></div>
        <!-- end title -->

        <div class="row">
            <div class="col-md-12 mx-auto">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2082.70501923491!2d103.86886732324335!3d1.2879030438830283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19b3ce186ae3%3A0x30f0c4eb920ff406!2sGardens%20by%20the%20Bay%20East%20(Panoramic%20view)!5e0!3m2!1sen!2smm!4v1632415196677!5m2!1sen!2smm" width="100%" height="500" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
            </div>
        </div>

        <div class="row">
            <div class="col-md-7 col-sm-12 my-3">
                <form action="" method="">

                    <div class="form-group col-md12 mb-3">
                        <label for="email">Email</label>
                        <input type="email" name="email" id="email" class="form-control form-control-sm rounded-0" placeholder="Enter your email" autocomplete="off"/>
                    </div>

                    <div class="form-group col-md12 mb-3">
                        <label for="name">Name</label>
                        <input type="text" name="name" id="name" class="form-control form-control-sm rounded-0" placeholder="Enter your name" autocomplete="off"/>
                    </div>
                    
                    <div class="form-group col-md-12 mb-3">
                        <label for="message">Message</label>
                        <textarea type="message" name="message" id="message" class="form-control form-control-sm rounded-0" rows="3" placeholder="Enter your message here"></textarea>
                    </div>
                    <div class="mb-3">
                        <button type="submit" class="btn btn-warning rounded-0 text-white">Send</button>
                    </div>
                </form>
            </div>
            <div class="col-md-4 col-sm-12 ms-5 mt-5 ">
                <div class="d-flex my-4 contactuss">
                    <i class="fas fa-home fa-2x"></i>
                    <span class="ms-4">MARINA EAST ,SINGAPORE<span class="d-block">Rosemead, CA 91770</span></span>
                </div>

                <div class="d-flex ms-2 my-4 contactuss">
                    <i class="fas fa-mobile-alt fa-2x"></i>
                    <span class="ms-4">+1 253 456 7890 <span class="d-block">Mon to Fri 9am to 6pm</span></span>
                </div>

                <div class="d-flex my-4 contactuss">
                    <i class="far fa-envelope fa-2x"></i>
                    <span class="ms-4">mraung@hotmail.com <span class="d-block">Send us your query anytime!</span></span>
                </div>
            </div>
        </div>
    </div>


    </section>
  <section id="about" class="my-5 abouts mx-auto">
    <div class="container">
        <div class="row">
            <div class="col-md-3 my-4">
                <h3 class="companynames mb-4">Light Idea</h3>
                <p>"We don't want to push our ideas on to customers, we simply want to make what they want."</p>
                <div class="d-flex">
                    <i class="fab fa-twitter-square mx-2 socialicons"></i>
                    <i class="fab fa-facebook-square mx-2 socialicons"></i>
                    <i class="fab fa-instagram-square mx-2 socialicons"></i>
                    <i class="fab fa-line mx-2 socialicons"></i>
                </div>
            </div>

            <div class="col-md-3 my-4">

                <h4 class="mb-4">Navigation</h4>
                <ul class="list-unstyled">
                    <li class="listnvs">About</li>
                    <li class="listnvs">Blog</li>
                    <li class="listnvs">Privacy & Policy</li>
                    <li class="listnvs">Contact</li>
                    <li class="listnvs" @click="routeToLogin">Admin Panel</li>
                </ul>
            </div>

            <div class="col-md-3 my-4">
                <h4 class="mb-4">Contact</h4>
                <p>SINGAPORE, Rosemead, CA 91770</p>
                <p class="text-info">19 (80) 321-2345</p>
                <p class="text-info">motherhouse@hotmail.com</p>
            </div>

            <div class="col-md-3 my-4">
                <h4 class="mb-4">Newsletter</h4>
                <p>Subscribe our newsletter toget update</p>
                <div class="form-group col-md12 mb-3">
                    <input type="email" name="email" id="email" class="form-control form-control-sm rounded-0 p-2" placeholder="Enter your email" autocomplete="off"/>
                </div>
                <div class="d-flex">
                    <button class="btn btn-dark text-white" style="width: 100%;">Subscribe</button>
                </div>
            </div>
        </div>
    </div>
    </section>
</template>

<script>
import { useRouter } from 'vue-router'
import { auth } from '../../firebase/config'

export default {
    setup(){
        const router = useRouter()

        const routeToLogin = () =>{
            if(auth.currentUser){
                router.push({name:'adminpanel'})
            }else{
                router.push({name:'login'})
            }
            
        }

        return {routeToLogin}
    }
}
</script>

<style>
.contactuss{
    cursor: pointer;
    transition: all 0.5s;
}
.contactuss:hover{
    color: blue;
}
.abouts h4{
    font-family:Courier, monospace;
    cursor: pointer;
}

.socialicons{
    font-size: 20px;
    cursor: pointer;

    transition: all 0.4s;
}

.socialicons:hover{
    color: rgb(0, 153, 255);
    transform: translateY(-5px);
}

.listnvs{
    cursor: pointer;
    transition: all 0.4s;
}

.listnvs:hover{
    color: rgb(1, 196, 255);
}
</style>