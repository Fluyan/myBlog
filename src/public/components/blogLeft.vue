<template>
<div>
  <div class="blogLeft" :style="{height:fullHeight+'px'}">
      <div class="user-info">
        <img src="../../assets/user.jpg">
        <p  @click="handleClick()">{{myname}}</p>
      </div>
      <div class="expand">
          <a href ="https://github.com/Fluyan/blog"><span><img src="../../assets/github.png"></span></a>
          <a href ="https://weibo.com/3482394775/profile?rightmod=1&wvr=6&mod=personnumber&is_all=1"><span><img src="../../assets/weibo.png"></span></a>
      </div>
      <ul class="navlist">
        <li v-for="(nav,index) in navList" :key="index" @click="$store.commit('show')"><router-link :to="nav.url" ><span>{{nav.name}}</span></router-link></li>
      </ul>
      <div class="money">
          <p><span>共同进步,共创未来</span><img src="../../assets/money.png"></p>
      </div>
      <div class="copyright">@ 2018 - 2019 FanLuYan</div>
  </div>
  <loading v-show="loading"></loading>
</div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
import loading from './loading'
export default {
  components:{
    loading
  },
  data () {
    return {
      fullHeight:document.documentElement.clientHeight,
      myname:'',
      navList:[{
        name:'新闻头条',
        url:'/Blog',
      },
      {
        name:'前端导航',
        url:'/WebNav',
      },
      {
        name:'关于我',
        url:'/AboutMe',
      }]
    }
  },
  methods:{
    handleClick(){
      console.log(this.myname)
    },
    //读取cookie
    getCookie: function() {
      if (document.cookie.length > 0) {
          var arr = document.cookie.split('; '); //这里显示的格式需要切割一下自己可输出看下
          for (var i = 0; i < arr.length; i++) {
              var arr2 = arr[i].split('='); //再次切割
              //判断查找相对应的值
              if (arr2[0] == 'username') {
                  this.myname = arr2[1]; //保存到保存数据的地方
              } else if (arr2[0] == 'password') {
                  this.password = arr2[1];
              }
          }
      }
    },
  },
  computed:{
    ...mapState([
      'loading'
    ]),
  },
  watch:{
    fullHeight(val){
      if(!this.timer){
        this.fullHeight = val
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
        window.fullHeight = document.documentElement.clientHeight
        that.fullHeight = window.fullHeight
      })()
    },
    this.getCookie()
  }
}
</script>

<style lang="less">
.blogLeft{
  width: 200px;
  background: #29325c;
  position: absolute;
  .user-info{
    text-align: center;
    margin-top:40px;
    img {
      width: 70px;
      height: 70px;
      border-radius: 35px;
      cursor: pointer;
      transition:1s;
      -webkit-transition:1s;
      -moz-transition:1s;
      &:hover{
        -webkit-transform:rotate(360deg) scale(1.2); 
        -moz-transform:rotate(360deg) scale(1.2);
        -ms-transform:rotate(360deg) scale(1.2);
        -o-transform:rotate(360deg) scale(1.2);

      }
    }
    p{
      text-align: center;
      margin-top:15px;
      font-size:24px;
      background: linear-gradient(to right, blue, red);
      -webkit-background-clip: text;
      color: transparent;
      cursor: pointer;
    }
  }
  .expand{
    margin-top: 20px;
    text-align: center;
    img{
      width: 30px;
      height: 30px;
      margin: 0 5px;
      cursor: pointer;
    }
  }
  .navlist{
    margin-top: 20px;
    margin-bottom: 20px;
    li{
          margin-bottom: 10px;
      a{
        width: 198px;
        height: 40px;
        line-height: 40px;
        color:rgba(255,255,255,0.65);
        cursor: pointer;
        border-left:2px solid #29325c;
        list-style: none;
        text-decoration: none;
        display: inline-block;
        span{
          margin-left:40px;
        } 
        &:hover{
          background: #34446b;
          color:#fff;
          border-left:2px solid #3593f2;
        }
        &.router-link-active{
          background: #34446b;
          color:#fff;
          border-left:2px solid #3593f2;
        }
      }
    }
  }
  .money{
    text-align: center;
    p{
      span{
        display:block;
        padding:20px 0px;
        color:rgba(255,255,255,0.65);
      }
    }
    img{
      width: 120px;
      height: 120px;
      
    }
  }
  .copyright{
    margin:20px 0;
    text-align: center;
    font-size: 12px;
    color:rgba(255,255,255,0.25);
  } 
}
</style>
