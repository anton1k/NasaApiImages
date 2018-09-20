<template>
  <div class="image">
    <div class="top-block"></div>
    <div class="container-fluid">
      <div class="results row align-items-center" v-if="preloaderShow">
        <div v-for="(result, index) in results" 
             :key="index"
             class="col">
             <div>
            <router-link to="/nasaimages/original">
              <img :src="result.links[0].href"
                  @click="onOpenOriginal(index)"/>
            </router-link>
            
            <div class="info">
                {{results[index].data[0].title}}
                </div>
            </div>
        </div>
      </div>
      <div v-else>
        <preloader></preloader>
      </div>
    </div>
  </div>
</template>
<script>
import Preloader from './Preloader'

import {mapGetters} from 'vuex';

export default {
  name: 'gallery',
  props: ['query'],
  data () {
    return {
      results: '',
      preloaderShow: false,
    }
  },
  created(){
    axios.get('https://images-api.nasa.gov/search?q=' + this.query + '&media_type=image').then( response => {
            this.results = response.data.collection.items;
        })
    .then(response => {
      for (let i = 0; i < this.results.length; i++) {  
           axios.get('https://translate.yandex.net/api/v1.5/tr.json/translate?key=[key]&text=' + this.results[i].data[0].title + '&lang=en-ru')
           .then(response => {
             this.results[i].data[0].title = response.data.text[0];
           });
           axios.get('https://translate.yandex.net/api/v1.5/tr.json/translate?key=[key]&text=' + this.results[i].data[0].description + '&lang=en-ru')
           .then(response => {
             this.results[i].data[0].description = response.data.text[0];
           });

      }
    })
    .catch(e => console.log(e))
    .finally(() => {
      setTimeout(() => {
        this.preloaderShow = true
      }, 1000);
    });
  },
  computed: {
		...mapGetters([
            'count'
        ])
    },
  methods: {
    onOpenOriginal(index) { 
      this.$store.commit('originalOpen', {
        index: index,
        results: this.results
        });
    },
  },
  components: {
    Preloader
  }
}
</script>

<style lang="scss" scoped>
.image {
  padding-top: 70px;
}
.top-block {
  height: 70px;
  width: 100%;
  background: rgb(19, 17, 34);
  position: fixed;
  top: 0;
  z-index: 100;
}
h2 {
  color: antiquewhite;
  text-align: center
}
.results {
  & div {
    text-align: center;
    position: relative;
  }
  & img {
    width: 300px;
    margin: 10px;
    transition: all .5s;
    cursor: pointer;
    &:hover {
    box-shadow: 2px 2px 10px rgba(154, 147, 140, 0.5), 1px 1px 5px rgb(99, 86, 212);
  }
  }
}

.info {
  color: rgb(189, 209, 226);
  margin: 0 auto;
  position: absolute;
  bottom: 69px;
  width: 300px;
  height: 55px;
  font-size: 15px;
  display: block;
  padding: 10px;
  background: rgba(0, 0, 255, 0.425);
  cursor: default;
}
</style>