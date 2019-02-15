<template>
  <div class="aboutme">
      <div class="pattern-overlay"></div>
      <div class="introduce" :style="{height:blogHeight-60+'px'}">
        <h2 class="title">
          <span>Hello..!</span>
          <span>I'm Fan Luyan</span>
          FRONT-END DEVELOPER
        </h2>
        <div class="skills">
          <h3>
            My Skills
          </h3>
          <ul>
              <li v-for="(skill,index) in skills" :key='index'>
                <label>{{skill.name}}</label>
                  <el-progress :text-inside="true" :stroke-width="16" :percentage="skill.value" :color="skill.color"></el-progress>
              </li>
          </ul>
        </div>
      </div>
      
      <div class="mine" :style="blogSelf">
          <blog-self></blog-self>
      </div>
  </div>
</template>

<script>
import blogSelf from './blogSelf'
export default {
  components:{
    blogSelf
  },
  props:['blogHeight'],
  data () {
    return {
      skills:[{
        name:'HTML5',
        percent:95,
        value:0,
        color:"#409EFF",
      },
      {
        name:'CSS3',
        percent:90,
        value:0,
        color:"#8e71c7",
      },
      {
        name:'JQUERY',
        percent:80,
        value:0,
        color:"#4169E1",
      },
      {
        name:'JAVASCRIPT',
        percent:70,
        value:0,
        color:"#f56c6c",
      },
      {
        name:'VUE',
        percent:60,
        value:0,
        color:"#67c23a",
      }]
    }
  },
  mounted() {
    setTimeout(() => {
        this.$nextTick(function () {
          this.progress() 
        })
    }, 1000);
  },
  methods:{
    //我的技能 动态加载
    progress:function(){
      for(let i=0;i<this.skills.length;i++){
        //console.log(this.skills[i].percent)
        for(let j = 1;j < this.skills[i].percent; j++){
          //console.log(j)
         this.skills[i].value = j
        }
      }
    }
  },
  computed:{
    blogSelf(){
      return{
          height:(this.blogHeight-100)+'px'
      }
    }
  }
}
</script>

<style lang="less">
.aboutme{
  height:100%;
  background: url(../../assets/banner.jpg) no-repeat;
  background-size:cover;
  min-height: 597px;
  position: relative;
  .pattern-overlay{
      position: absolute;
      z-index: 2;
      width: 100%;
      height: 100%;
      background-image: url(../../assets/bg-pattern.png);
      background-repeat: repeat;
  }
  .introduce{
    width: 38%;
    margin:0 10px;
    float: left;
  }
  .title{
    font-size: 30px;
    line-height: 40px;
    margin-left: 20px;
    color: #fff;
    font-weight: 600;
    text-transform: capitalize;
    position: absolute;
    z-index: 1;
    span{
      font-size: 28px;
      line-height: 60px;
      color: #fff;
      text-transform: capitalize;
      display: block;
      padding: 0;
      font-weight: normal;
    }
  }
  .skills{
    position: absolute;
    z-index: 3;
    color:#F1F1F1;
    width: 300px;
    top:160px;
    h3{
      margin-left: 20px;
      margin-top: 40px;
      font-size:40px;
    }
    ul{
      margin-left: 20px;
      margin-top: 25px;
      li{
        margin-top:20px;
        font-size: 14px;
        color:#ccc;
        label{
          margin-bottom: 5px;
          display: inline-block;
        }
      }
    }
  }
  .mine{
    float: right;
    //background: rgba(255,255,255,.3);
    width:59%;
    position: relative;
    z-index: 3;
    padding:20px 0 20px 10px;
    min-height: 557px;
  }
}
</style>
