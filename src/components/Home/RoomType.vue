<template>
  <!-- Start Room Section -->
    <section id="room" class="rooms pt-lg-5 pt-2">
        <div class="container-fluid">
            <div id="room-list" class="my-lg-5 my-2 mb-1 d-flex flex-column rooms-list">
                <h2 class="text-dark btn-sm text-center display-6">Room & Suits</h2>
                <form @submit.prevent="" class="d-flex my-2 align-self-lg-end align-self-center me-lg-5 mt-0">
                    <input type="number" v-model.number="people" class="form-control searchforms" placeholder="People Count">
                    <button type="submit" class="btn btn-ouline-dark btn-sm searchbtns">
                        <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                    </button>
                </form>
                <ul>
                    <li @click="activeBtn='All'" :class="{active: activeBtn === 'All' }">All</li>
                    <li @click="activeBtn='Delux'" :class="{active: activeBtn === 'Delux' }">DELUXE</li>
                    <li @click="activeBtn='Standard'" :class="{active: activeBtn === 'Standard' }">STANDART</li>
                    <li @click="activeBtn='Studio'" :class="{active: activeBtn === 'Studio' }">STUDIO</li>
                </ul>
            </div>

            <div class="container row mx-auto px-5 my-5 mt-1">
                <p v-if="error" class="danger-text">{{error}}</p>
                <div v-for="(data,idx) in fetchDatas" :key="idx" class="col-lg-5 col-md-6 col-12 cards fromlefts">
                    <div class="d-flex justify-content-between">
                        <div class="roomimgs">
                            <img :src="data.coverUrl" class="img-fluid" />
                        </div>
                        <div class="roomtexts ms-auto">
                            <ul>
                                <li>{{data.category}}</li>
                                <li><font-awesome-icon icon="fa-user-friends"></font-awesome-icon> {{data.peopleCount}} people</li>
                                <li><font-awesome-icon icon="fa-wine-glass"></font-awesome-icon>
                                    <span v-for="(i,d) in data.service" :key="d">{{ i + ", " }}</span>
                                </li>
                                <li><font-awesome-icon icon="fa-dollar-sign"></font-awesome-icon> {{data.price}}</li>
                                <li><button class="btn btn-outline-dark btn-sm mt-1"  data-bs-toggle="modal" data-bs-target="#exampleModal">Book Now</button></li>
                            </ul>
                        </div>
                    </div>
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">{{data.category}}</h5>
                            
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body d-flex justify-content-center">
                        <div class="card" style="width: 18rem;">
                        <img :src="data.coverUrl" class="card-img-top" :alt="data.image">
                        <h5 class="card-title p-2">{{data.title}}</h5>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">{{data.category}}</li>
                            <li class="list-group-item"><font-awesome-icon icon="fa-user-friends"></font-awesome-icon> {{data.peopleCount}} people</li>
                            <li class="list-group-item"><font-awesome-icon icon="fa-wine-glass"></font-awesome-icon>
                                    <span v-for="(i,d) in data.service" :key="d">{{ i + ", " }}</span>
                            </li>
                            <li class="list-group-item">
                                <div class="col-sm mx-auto my-1">
                                    <input type="date" name="dob" id="dob" class="form-control form-control-sm rounded-0 shadow-none first"/>
                                </div>
                            </li>
                        </ul>
                        </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-dark" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Accept</button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

        </div>

    </section>
    
</template>

<script>
import { ref,computed } from '@vue/reactivity'
import getCollection from '@/composables/getCollection'


export default {
    setup(){
        const activeBtn = ref('All')
        const people = ref()
        const {error, documents, fetchAll} = getCollection('rooms')
       
        fetchAll('createdAt')
        const fetchDatas = computed( ()=> {
           if(documents.value){
                return documents.value.filter( doc => {
                return (activeBtn.value && doc.category.toLowerCase().includes(activeBtn.value.toLowerCase()) ) && (!people.value || doc.peopleCount <= people.value) || activeBtn.value === "All" && (!people.value || doc.peopleCount <= people.value)
                })
           }
        })

        return {activeBtn,error,fetchDatas,people}
    }
}
</script>

<style>
/* Start Room Section */
.rooms-lists{
    width: 100%;
}

.rooms ul{
    list-style: none;
    display: flex;
    justify-content: center;
    margin:0;
    padding:0;
}

.roomimgs{
    width: 42%;
    height: auto;
}
.roomtexts{
    width: 57%;
}

.roomtexts ul{
    display: block;
}

.rooms ul li{
    margin: 0 5%;
    cursor: pointer;
    align-self: center;
}

.rooms-list li.active{
    color: #23afc2;
    border-bottom: 2px solid #23afc2;
}

.book-cards{
    transition: all 0.4s;
}

.book-cards:hover{
    transform: translateY(-15px);
    box-shadow: 0 10px 10px rgba(0,0,0,0.3);
}

.cards{
    padding: 1rem;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    margin: 1rem;
    transition: all .5s;
}

.cards:hover{
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.cards.fromlefts{
    animation: fromleft 1s linear;
}

.searchforms{
    width: 100% !important;
    border-radius: 0 !important;
}
.searchbtns{
    width: 50px !important;
    height: 40px !important;
    border-radius: 0 !important;
    color:#fff !important;
}
.searchbtns:outline{
    border: none;
}

@keyframes fromleft{
    0%{
        transform: translate(-90px);
        opacity: 0;
    }
    100%{
        transform: translate(0);
        opacity: 1;
    }
}

@media (max-width:700px){
    .rooms ul{
        margin-right: 5%;
    }
}

@media (max-width:450px){
    .roomtexts{
        width:60%;
    }
}
/* End Room Section */
</style>