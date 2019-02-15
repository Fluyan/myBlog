<template>
  <div class="tableinfo">
      <ul class="newtitlenav">
        <li v-for="(tabNav,index) in tableList" :key="index" @click="addstyle(index,tabNav)" ><span v-bind:class="{ all:index==current}">{{tabNav.name}}</span></li>
      </ul>
      <loading v-show="loading"></loading>
      <list-info :listmsg='listmsg.slice((currentPage-1)*pageSize,currentPage*pageSize)'></list-info>
      <el-pagination
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :page-sizes="[3,5,10]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="currentTotal">
      </el-pagination>
  </div>
  
</template>

<script>
import {mapState,mapMutations} from 'vuex'
import loading from '../../public/components/loading'
import listInfo from './listInfo'
import axios from 'axios'
export default {
  components:{
    loading,
    listInfo
  },
  data () {
    return {
      current:0,
      listmsg:[],
      currentPage: 1,
      pageSize: 3,
      currentTotal: 0,
      tableList:[{
        name:'头条',
        typename:'top'
      },
      {
        name:'社会',
        typename:'shehui'
      },
      {
        name:'国内',
        typename:'guonei'
      },
      {
        name:'国际',
        typename:'guoji'
      },
      {
        name:'娱乐',
        typename:'yule'
      },
      {
        name:'体育',
        typename:'tiyu'
      },
      {
        name:'军事',
        typename:'junshi'
      },
      {
        name:'科技',
        typename:'keji'
      },
      {
        name:'财经',
        typename:'caijing'
      },
      {
        name:'时尚',
        typename:'shishang'
      },]
    }
  },
  computed:{
    ...mapState([
      'loading'
    ]),
  },
  created: function(){
      let self = this  
      // get 请求
    this.$axios.get('/api' + '?type=top&key=4a2a18ca10530d3ae5ff01a731251e96')  // url格式,如:?type=xxx&key=value
      .then(res => {
        this.listmsg=res.data.result.data;
        this.currentTotal = (res.data.result.data.length);
        //console.log(res.data.result.data.length); 
      }) 
      .catch(err => { 
        console.log(err); 
      })

  },
  methods:{
    addstyle(index,tabNav){
      this.current=index;
      this.$store.commit('show')
      this.infoname = tabNav.typename
      console.log(tabNav.typename)   
      let self =this 
      this.$axios.get('/api'+ '?type='+ (this.infoname)+'&key=4a2a18ca10530d3ae5ff01a731251e96').then((res)=>{
          this.listmsg=res.data.result.data;
      }).catch((response)=>{
        //console.log(response);
      })
    },
    handleSizeChange(val) {
        this.pageSize = val;
        //console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        this.currentPage = val;
        //console.log(`当前页: ${val}`);
      }
  },
}
</script>
<style lang="less">
.tableinfo{
  .newtitlenav{
    li{
      margin-bottom: 20px;
      margin-right: 10px;
      display: inline-block;
      span{
        padding: 2px 20px;
        background-color: #f2f5f8;
        color: #849aa4;
        margin-right: 14px;
        cursor: pointer;
        user-select: none;
        border-radius: 4px;
        font-size: 14px;
        display: inline-block;
        height: 30px;
        line-height: 30px;
      }
    }
    .all{
      background:rgb(53, 147, 242);
      color:#fff;
    }
  }
  .el-pagination{
    margin-top:20px;
  }
}
</style>
