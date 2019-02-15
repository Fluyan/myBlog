<template>
  <div class="webinfo">
      <div class="headNav">
        <ul class="webul">
          <li v-for="(nav,index) in headList" :key="index">{{nav.name}}</li>
        </ul>
      </div>
  </div>
  
</template>

<script>
import {mapState,mapMutations} from 'vuex'
import loading from '../../public/components/loading'
import weblistInfo from './weblistInfo'
import axios from 'axios'
export default {
  components:{
    loading,
  },
  data () {
    return {
      headList:[
        {
          name:'首页',
          url:'/'
        },
        {
          name:'产品中心',
          url:'/'
        },
        {
          name:'解决方案',
          url:'/'
        },
        {
          name:'服务支持',
          url:'/'
        },
        {
          name:'关于我们',
          url:'/'
        }
      ]
    }
  },
  computed:{
    ...mapState([
      'loading'
    ]),
  },
  created: function(){

  },
  methods:{
    
  },
}
</script>
<style lang="less">
.webinfo{
  .headNav{
    height: 80px;
    background: rgba(0,0,0,.5)
  }
}
</style>
