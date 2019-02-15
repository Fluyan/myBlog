<template>
  <div class="loading">
    <div class="ladingstyle slideShine">
      loading...
    </div>
  </div>
</template>

<script>
export default {
  name:'loading',
  data () {
    return {
      
    }
  },

}
</script>

<style lang="less">
.loading{
  position: fixed;
  left: 0;
  top: 0;
  z-index: 99999;
  width:100%;
  height: 100%;
  background: rgba(238,238,238,0.65);
  .ladingstyle{
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    font-size:24px;
  }
  .slideShine{
      background:#849aa4 -webkit-linear-gradient(-45deg,red, yellow, green) no-repeat 0 0;
      background-size:40% 100%; 
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-size: 36px;
      text-align: center;
      font-weight: bold;
      text-decoration: underline;
  }
  .slideShine {
    -webkit-animation: slideShine 0.5s linear infinite;
    animation: slideShine 0.5s linear infinite;
  }
  @-webkit-keyframes slideShine {
      0% {
            background-position: 0 0;
          }
      100% {
            background-position: 100% 100%;
        }
  }
  @keyframes slideShine {
        0% {background-position: 0 0; }
      100% {background-position: 100% 100%; }
  }
}
</style>
