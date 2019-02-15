<template>
  <div class="listInfo">
    <ul class="msginfos">
      <li v-for="(list,index) in listmsg" :key="index">
        <div class="img fl">
          <a :href="list.url"  target="_blank"><img :src="list.thumbnail_pic_s" width="180" height="135"></a>
        </div>
        <div class="info">
              <h3><a :href="list.url" target="_blank"><b>{{list.title}}</b></a></h3>
              <p class="desc">{{list.category}}</p>
              <p class="from">{{list.date}} 来源：{{list.author_name}}</p>
            </div>
      </li>
    </ul>
    
  </div>
</template>

<script>

export default {
  props:{
    listmsg:Array,
  },
  methods: {
    
  },
  components:{

  },
  mounted() {
  },
}
</script>

<style lang="less">
.listInfo{
  .fl{
    float: left;
  }
  .msginfos{
    li{
      width: 100%;
      height: 135px;
      padding-top: 15px;
      padding-bottom: 15px;
      border-bottom: 1px solid #e9e9e9;
      .info {
        margin-left: 200px;
        height: 135px;
        position: relative; 
        a{
          text-decoration: none;
          outline: none;
          color: #333;
          cursor: pointer;
        }
        .desc {
            font-size: 14px;
            line-height: 20px;
            margin-top: 10px;
            color: #666;
        }
        .from {
            position: absolute;
            left: 0;
            bottom: 0;
            font-size: 12px;
            color: #999;
        }
      }
    }
  }
}
</style>
