<template>
<AxiosRequests/>
</template>

<script>
import AxiosRequests from './components/AxiosRequests.vue'

export default {
  name: 'App',
  data(){
    return{
      name:'Mrunal'
    }
  },
  components: {
    AxiosRequests
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
