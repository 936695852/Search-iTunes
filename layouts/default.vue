<template>
  <section class="container">
    <ToolBar />
    <nuxt/>
  </section>
</template>

<script>
import ToolBar from '~/components/ToolBar.vue'
export default {
  components: {  
    ToolBar 
  }
}
</script>


<style>
.title{
  text-decoration: none;
  color: #fff;
}
</style>
