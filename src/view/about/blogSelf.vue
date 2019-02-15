<template>
  <div class="introduceList">
      <ul class="listTab">
        <li v-for="(item,index) in introduceList" :key="index" @click="showTab(index)" v-bind:class="{ libg: index==current}"><span :class="'bg'+index"><i>{{item.name}}</i></span></li>
      </ul>
      <div class="tabList">
          <div class="tabCon tabedu" v-if="current==0">
              <div class="timeLine"></div>
              <div class="timeData">
                <p>2007.9 - 2011.6</p>
                <p>2011.9 - 2014.6</p>
              </div>
              <div class="school">
                <div class="gzschool">
                  <h3>汤阴一中</h3>
                  <h5>汤阴县第一中学是一所独具特色的绿色校园、书香校园。</h5>
                  <span>校训：先成人，后成才。</span>
                  <span>校风：严、勤、细、实、和。</span>
                  <span>教风：精雕细刻。学风：钻深钻透。</span>
                </div>
                <div class="dxschool">
                  <h3>中州大学</h3>
                  <h5>中州大学后改名郑州工程技术学院</h5>
                  <span>校训：修德、敏学、笃行、拓新。</span>
                  <span>校风：团结、勤奋、求实、创新。</span>
                  <span>教风：博学、善教、爱生、敬业。</span>
                </div>
              </div>
          </div>
          <div class="tabCon tabedu tabwork" v-if="current==1">
              <div class="timeLine"></div>
              <div class="timeData">
                <p>2014.9 - 2016.4</p>
                <p>2016.6 - 今</p>
              </div>
              <div class="school">
                <div class="gzschool">
                  <h3>上海复大医疗集团</h3>
                  <h5>汤阴县第一中学是一所独具特色的绿色校园、书香校园。</h5>
                  <span>校训：先成人，后成才。</span>
                  <span>校风：严、勤、细、实、和。</span>
                  <span>教风：精雕细刻。学风：钻深钻透。</span>
                </div>
                <div class="dxschool">
                  <h3>平安科技</h3>
                  <h5>中州大学后改名郑州工程技术学院</h5>
                  <span>校训：修德、敏学、笃行、拓新。</span>
                  <span>校风：团结、勤奋、求实、创新。</span>
                  <span>教风：博学、善教、爱生、敬业。</span>
                </div>
              </div>
          </div>
          <div class="tabCon tabself" v-if="current==2">
              <div class="selfmine">
                  <h3>自我评价</h3>
                  <ul>
                    <li>
                      <h4>人生巅峰</h4>
                      <p>抬头不见八阿哥</p>
                      <p>低头迎娶白富美</p>
                    </li>
                    <li>
                      <h4>瞬息万变</h4>
                      <p>微博知乎占头条谁与争锋</p>
                      <p>桌面移动待前端一统江湖</p>
                    </li>
                    <li>
                      <h4>员媛猿</h4>
                      <p>格子衣，牛仔裤，眼戴八百度</p>
                      <p>文化衫，运动鞋，背跨双肩包</p>
                    </li>
                    <li>
                      <h4>生不如死</h4>
                      <p>一年三百六十五天天天打代码</p>
                      <p>十兆九千八百七行行行见bug</p>
                    </li>
                  </ul>
              </div>
          </div>
          <div class="tabCon tabphone" v-if="current==3">
            <div class="contact">
                <h3>联系我</h3>
                <ul>
                  <li>
                    <label>姓名：</label>范璐岩
                  </li>
                  <li>
                    <label>性别：</label>男
                  </li>
                  <li>
                    <label>邮箱：</label>xxxxxxxxx@163.com
                  </li>
                  <li>
                    <label>座右铭：</label>如果你做某件事，那就把它做好；如果你不会或不愿做好它，那最好不要去做。
                  </li>
                </ul>
                <div class="beautifulPic">
                  <span><img src="../../assets/jc.jpg"></span>
                  <span><img src="../../assets/zl.jpg"></span>
                  <span><img src="../../assets/qd.png"></span>
                  <span><img src="../../assets/rz.jpg"></span>
                </div>
            </div>
          </div>
      </div>
      <div class="cl"></div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      current:0,
      introduceList:[{
        name:'教育经历',
      },
      {
        name:'工作经历',
      },
      {
        name:'自我评价',
      },
      {
        name:'来撩我吧',
      }]
    }
  },
  methods:{
    showTab(index){
      console.log(index)
      this.current = index
    }
  }
  
}
</script>
<style lang="less">
.introduceList{
  .listTab{
    float: left;
    li{
      width: 100px;
      height:100px;
      border-radius: 50px;
      margin:35px 0;
      position: relative;
      cursor: pointer;
      span{
        width: 90px;
        height:90px;
        background: #3A8CE4;
        border-radius: 45px;
        display: inline-block;
        position: absolute;
        left: 5px;
        top: 5px;
        text-align: center;
        i{
          font-style: normal;
          font-size: 22px;
          color: #fff;
          width: 65px;
          display: inline-block;
          margin-top: 14px;
          text-shadow: -2px 3px 5px rgba(0,0,0,.6);
        }
      }
      &.libg{
        background:rgba(255,255,225,.2);
      }
      .bg0{
          background: rgba(58,144,234,1);
        }
      .bg1{
          background: rgba(122,100,177,1);
        }
      .bg2{
          background:rgba(75,138,143,1);
        }
      .bg3{
          background:rgba(195,89,91);;
        }
    }
  }
  .tabList{
    float: left;
    .tabCon{
      //width: 530px;
      margin-left: 10px;
      height: 525px;
      position: relative;
    }
    .tabedu{
      .timeLine{
        position: absolute;
        width:2px;
        height: 460px;
        background: rgba(255,255,255,.4);
        top:40px;
        left:160px;
        border-radius: 2px;
      }
      p{
        width: 120px;
        height: 40px;
        text-align: center;
        line-height: 40px;
        font-size: 14px;
        color:rgba(255,255,255,.8);
        border-radius: 20px 0 0 20px;
        position: absolute;
        &:first-child{
          background: #3A8FE9;
          top:80px;
          left:30px;
        }
        &:last-child{
          background: #30C1BE;
          top:280px;
          left:30px;
        }
      }
      .school{
        position: absolute;
        width: 480px;
        h3{
        font-size:20px;
        font-weight: normal;
        color:#fff;
        }
        h5{
          font-size:14px;
          font-weight: normal;
          margin-bottom: 20px;
          color:#fff;
        }
        span{
          font-size:14px;
          line-height: 20px;
          display: block;
          color:rgba(255,255,255,.8);
          margin-bottom: 5px;
        }
        .gzschool{
          position: absolute;
          left: 180px;
          top: 90px;
          h3{
            margin-bottom: 20px;
          }
        }
        .dxschool{
          position: absolute;
          left: 180px;
          top: 290px;
          h3{
            margin-bottom: 20px;
          }
        }
      }
    }
    .selfmine{
      text-align: center;
      color:#fff;
      margin-top: 50px;
      h3{
        font-weight: normal;
        font-size: 24px;
      }
      ul{
        margin-left: 40px;
        li{
          text-align: left;
          margin-bottom: 20px;
          margin-top: 20px;
          
          h4{
            font-size:18px;
            font-weight: normal;
            margin-bottom: 10px;
          }
          p{
            line-height: 26px;
            letter-spacing: 4px;
          }
        }
      }
    }
    .tabphone{
      width: 480px;;
    }
    .contact{
      text-align: center;
      color:#fff;
      margin-top: 50px;
      h3{
        font-weight: normal;
        font-size: 24px;
        margin-bottom: 20px;
      }
      ul{
        width: 460px;
        margin-left: 40px;
        li{
          text-align: left;
          margin-bottom: 10px;
          margin-top: 10px;
          line-height: 26px;
        }
      }
      .beautifulPic{
        span{
          img{
            width: 230px;
            height: 130px;
          }
        }
      }
    }
  }
}
</style>