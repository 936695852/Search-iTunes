<template>
  <div>
      <h1>Results for {{$route.params.id}}</h1>
      <div v-if="albumExists">
          <div v-for="(album, index) in albumData" :key='index'>
               <Card
                    :title="album.collectionName"
                    :image="album.artworkUrl100"
                    :artistName="album.artistName"
                    :url="album.artistViewUrl"
                    :color="picker(index)"
               />
          </div>
      </div>
      <div v-else>
          <h1>Could Not Find Album.</h1>
      </div>
  </div>
</template>

<script>
import axios from "axios"
import Card from '~/components/Card.vue'

export default {
    asyncData({params}){
      return axios.get(`https://itunes.apple.com/search?term=${params.id}&entity=album`)
        .then((res)=>{
            console.log(res.data.results);
            return {albumData: res.data.results}
        })  
    },
    components: {
        Card
    },
    // middleware: 'search',
    computed: {
        albumExists(){
            return this.albumData.length > 0
        }
    },
    methods: {
        picker(index){
            return index % 2 == 0 ? 'red' : 'blue';
        }
    }
}
</script>

<style scoped>
*{
    text-align: center;
}
</style>

