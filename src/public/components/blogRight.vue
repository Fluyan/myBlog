<template>
  <div class="blogRight" >
    <div class="blogmain" :style="{height:blogHeight-60+'px'}">
        <router-view ></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name:"blogRight",
  data () {
    return {
      blogHeight:document.documentElement.clientHeight,
    }
  },
  watch:{
    blogHeight(val){
      if(!this.timer){
        this.blogHeight = val
        this.timer = true
        let that = this
        setTimeout(function(){
          that.timer = false
        },400)
      }
    }
  },
  mounted(){
    let that = this
    window.onresize=()=>{
      return (()=>{
        window.blogHeight = document.documentElement.clientHeight
        that.blogHeight = window.blogHeight
      })()
    }
  }
}
</script>

<style lang="less">
.blogRight{
  height: 100%;
  padding-left: 200px;
  .blogmain{
    background: #fff;
    height: 100%;
    padding:30px 20px;
  }
}
</style>
