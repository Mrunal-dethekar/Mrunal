<template>
<h1>I am New Component with Name - {{name}} {{surname}}</h1>
</template>

<script>
  export default {
    name:'NewComponent',
    props:['name','surname']
  }
</script>

<style scoped>

</style>