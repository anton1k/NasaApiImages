<template>
    <div class="gallery-foto">
        <div class="top-block"></div>
       <h2>{{results[count].data[0].title}} </h2>
       <div class="close"
            @click="onClose">
           <span></span>
           <span></span>
       </div>
       
       <div class="btn-group">
            <button class="prev" @click="prev">Назад</button>
            <button class="next" @click="next">Вперед</button>
       </div>
       
        <div>
            <div v-if="preloaderShow">
                <a :href="src" target="_blank">
                    <img :src="src"
                    :alt="results[count].data[0].title"
                    >
                </a>
                
                <p>{{results[count].data[0].description}}</p>
            </div>
            <div v-else>
                <preloader></preloader>
            </div>
        </div>
            
    </div>
</template>
<script>
import {mapGetters} from 'vuex';

import Preloader from './Preloader'

export default {
    data(){
        return {
            src: '',
            href: this.results[this.count].href,
        }
    },
    created(){
        axios.get(this.results[this.count].href)
        .then(response => {
             this.src = response.data[0];
        })
        .finally(() => {
           this.$store.commit('preloaderShow');
        });
    },
    computed: {
		...mapGetters([
            'results',
            'count',
            'preloaderShow'
        ])
    },
    methods: {
        onClose(){
            window.history.go(-1); 
        },
        prev(){
            this.$store.commit('prev');
            axios.get(this.results[this.count].href)
            .then(response => {
                this.src = response.data[0];
            })
            .finally(() => {
                this.$store.commit('preloaderShow');
            });
            
        },
        next(){
            this.$store.commit('next');
            axios.get(this.results[this.count].href)
            .then(response => {
                this.src = response.data[0];
            })
            .finally(() => {
                this.$store.commit('preloaderShow');
            });
        }
    },
    components: {
        Preloader
    }
}
</script>

<style lang="scss" scoped>
.top-block {
  height: 70px;
  width: 100%;
  background: rgb(19, 17, 34);
  position: fixed;
  top: 0;
  z-index: 100;
}

.prev, .next {
    position: absolute;
    background: rgb(19, 17, 34);
    color: whitesmoke;
    border: none;
    width: 45%;
    transition: all .5s;
    cursor: pointer;
    height: 50px;
    &:hover {
        background: rgb(72, 53, 116);
    }
}
.next {
    border-left: 1px solid whitesmoke;
    right: 5%;
}
.prev {
    left: 5%;
}
.gallery-foto {
    overflow-y: scroll;
    color: wheat;
    font-weight: normal;
    text-align: center;
    background: rgb(33, 33, 43);
    position: absolute;
    padding-bottom: 100px;
    width: 100%;
    height: 100vh;
    padding-top: 65px;
    top: 0;
    left: 0;
    & p {
        display: block;
        width: 90%;
        margin: 30px auto;
        line-height: 30px;
    }
    & img {
        margin-top: 50px;
        width: 90%;
        cursor: pointer;
    }
    & h2 {
        text-align: center;
    }
    & .close {
        width: 50px;
        height: 50px;
        position: absolute;
        right: 10px;
        top: 30px;
        cursor: pointer;
        z-index: 1000;
        & span {
            display: block;
            width: 30px;
            height: 1px;
            background: wheat;
            &:last-child{
                transform: rotate(45deg);
            }
            &:first-child{
                transform: rotate(-45deg);
            }
        }
    }
    
}
</style>
