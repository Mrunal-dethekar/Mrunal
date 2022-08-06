<template>
  <div>
    <button @click="getReq">Load Posts</button>
  </div>
</template>

<script>
import axios from 'axios';
  export default {
    name:'AxiosRequests',
    data(){
      return{
        posts:[],
      }
    },
    methods:{
      getReq(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>{console.log(res.data)})
        .catch((error)=>{console.log(error)})
      }
    }
  }
</script>

<style scoped>

</style>