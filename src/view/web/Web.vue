<template>
  <div class="WebNav">
      <web-nav></web-nav>
      <router-view></router-view>
  </div>
</template>

<script>
import webNav from './webNav'
export default {
  components:{
    webNav,
  },
  data () {
    return {
     
    }
  },
  watch:{
    
  },
  mounted(){
   
  }
}
</script>

<style lang="less">
.WebNav{
  width: 200px;
  position: absolute;
  background: #fcc; 


}
</style>
