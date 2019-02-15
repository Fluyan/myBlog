<template>
  <div class="blogcontain">
      <blog-nav></blog-nav>
      <router-view></router-view>
  </div>
</template>

<script>
import blogNav from './blogNav'
export default {
  name:'blog',
  components:{
    blogNav,
  },
}
</script>

<style lang="less">

</style>
