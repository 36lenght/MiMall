<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import storage from './storage/index'

export default {
  name: 'App',
  components: {
    
  },
  data(){
    return {
      
    }
  },
  mounted(){
    // storage.setItem('a',1);
    // storage.setItem('user',{a:1})
    // storage.setItem('abc',{a:1},'user');
  }
}
</script>

<style >
  @import './assets/scss/reset.scss'
</style>
