<template>
  <div class="login">
     <div class="loginbox">
        <div class="loginlogo"></div>
        <h3>我的博客</h3>
        <div class="username">
            <span class="u_user"></span>
            <input type="text" v-model="username" placeholder="输入用户名登陆" @focus="userfocus">
        </div>
        <div class="psdinput">
            <span class="us_uer"></span>
            <input type="password" v-model="password" placeholder="输入密码" @focus="psdfocus" v-on:keup.enter="login()">
        </div>
        <p class="warnmessage" v-show="warninfo">{{warnmessage}}</p>
        <div class="loginbtn" @click="login">登录</div>
        <div class="remember">
            <label class="picklabel" @click="stating">
                <input type="checkbox"  v-model="checked" class="checkbox"><span class="checkico"></span>
                <span>记住密码</span>
            </label>
        </div>
     </div>
     
  </div>
</template>

<script>
import qs from 'qs'

export default {
  data () {
    return {
        username:'',
        password:'',
        checked:'',
        warnmessage:'',
        warninfo:false,
    }
  },
  methods:{
      userfocus(){
        this.warninfo=false
      },
      psdfocus(){
        this.warninfo=false
      },
      stating(){
          this.checked=!this.checked
      },
      login(){
        var name = this.username;
        var password = this.password;
        // if(name == ''){
        //     this.warninfo=true
        //     this.warnmessage = "*用户名不能为空，请重新输入"
        //     return
        // }else if(password == ''||password == null){
        //     this.warninfo=true
        //     this.warnmessage = "*密码不能为空，请重新输入"
        //     return
        // }else if(name == 'fanluyan'&&password == '123456'||name == 'lijingpan'&&password == '123456'||name == 'zhaocanpeng'&&password == '123456'){
        //     console.log("账号密码全对")
        //     this.$router.push('/blog')
        // }else{
        //     this.warninfo=true
        //     this.warnmessage = "*账号或密码错误，请重新输入"
        //     return
        // }
        this.warninfo=false
        // console.log(this.username)
        // console.log(this.password)
        const self = this;

        // this.$axios.post('/apis/Api/LYLogin',{"username":this.username,"password":this.password}).then(res=>{
        //         console.log(res)
        // })
        this.$axios.post('http://www.wwtliu.com/sxtstu/blueberrypai/login.php',qs.stringify({
          user_id:this.username,
          password:this.password,
          verification_code:'crfvw'
        })).then(res=>{
            if(res.data.msg_code ==''){
                // console.log(res.data)
                // console.log("账号密码全对")
                this.$router.push('/blog')
            }else{
                //console.log("账号密码有误")
            }
        })
        .catch(error=>{
            console.log(error)
        })
        //判断复选框是否被勾选 勾选则调用配置cookie方法
        if (self.checked == true) {
            console.log("checked == true");
            //传入账号名，密码，和保存天数3个参数
            self.setCookie(name, password, 7);
        }else {
            console.log("清空Cookie");
            self.setCookie(name, '', 7);
            //清空Cookie
            self.clearCookie();
        }
      },
      //设置cookie
        setCookie(c_name, c_pwd, exdays) {
            var exdate = new Date(); //获取时间
            exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays); //保存的天数
            //字符串拼接cookie
            window.document.cookie = "username" + "=" + c_name + ";path=/;expires=" + exdate.toGMTString();
            window.document.cookie = "password" + "=" + c_pwd + ";path=/;expires=" + exdate.toGMTString();
        },
        //读取cookie
        getCookie: function() {
            if (document.cookie.length > 0) {
                this.checked = true
                var arr = document.cookie.split('; '); //这里显示的格式需要切割一下自己可输出看下
                for (var i = 0; i < arr.length; i++) {
                    var arr2 = arr[i].split('='); //再次切割
                    //判断查找相对应的值
                    if (arr2[0] == 'username') {
                        this.username = arr2[1]; //保存到保存数据的地方
                    } else if (arr2[0] == 'password') {
                        this.password = arr2[1];
                    }
                }
            }else{
                this.checked = false
                this.username =''
                this.password=''
            }
        },
        //清除cookie
        clearCookie: function() {
            this.setCookie("", "", -1); //修改2值都为空，天数为负1天就好了
        }
  },
  created(){
      this.$axios.post('http://www.wwtliu.com/sxtstu/blueberrypai/login.php',qs.stringify({
          user_id:'iwen@qq.com',
          password:'iwen123',
          verification_code:'crfvw'
      })).then(res=>{
          console.log(res.data)
      })
      .catch(error=>{
          console.log(error)
      })
  },
  watch:{
    
  },
  mounted(){
      this.getCookie();
  }
}
</script>

<style lang="less">
.login{
    position: fixed;
    top: 0;
    left: 0;
    width:100%;
    height:100%;
    // min-width: 1000px;
    // min-height: 500px;
    z-index:-10;
    zoom: 1;
    background-color: #fff;
    background-repeat: no-repeat;
    background-size: cover;
    -webkit-background-size: cover;
    -o-background-size: cover;
    background-position: center 0;
    background: url(../../assets/login.jpg) no-repeat center;
    .loginbox{
        position: absolute;
        top:50%;
        left:50%;
        transform: translate(-50%, -50%); 
        //background: #fcc;
        .loginlogo{
            // width: 100px;
            // height: 100px;
            background: url(../../assets/logo.png) no-repeat center;
            background-size: 100px;
            margin:0 auto;
        }
        h3{
            text-align: center;
            height: 20px;
            font: 20px "microsoft yahei",Helvetica,Tahoma,Arial,"Microsoft jhengHei",sans-serif;
            color: #FFFFFF;
            height: 20px;
            line-height: 20px;
            margin-bottom: 30px;
        }
        .username,.psdinput{
            height: 46px;
            padding: 0 5px;
            margin-bottom: 20px;
            border-radius: 50px;
            position: relative;
            border: rgba(255,255,255,0.2) 2px solid !important;
        }
        input{
            width: 220px;
            height: 46px;
            outline: none;
            display: inline-block;
            font: 14px "microsoft yahei",Helvetica,Tahoma,Arial,"Microsoft jhengHei";
            margin-left: 50px;
            border: none;
            background: none;
            line-height: 46px;
            color: #FFFFFF !important;  
        }
        input::-webkit-input-placeholder {
            color: #FFFFFF;
        }
        .u_user {
            width: 25px;
            height: 25px;
            background: url(../../assets/login_ico.png);
            background-position: -125px 0;
            position: absolute;
            margin: 12px 13px;
        }
        .us_uer {
            width: 25px;
            height: 25px;
            background-image: url(../../assets/login_ico.png);
            background-position: -125px -34px;
            position: absolute;
            margin: 12px 13px;
        }
        .warnmessage{
            position: absolute;
            color: #f00;
            top: 185px;
            left: 20px;
            font-size: 12px;
        }
        .loginbtn{
            height: 20px;
            line-height: 20px;
            text-align: center;
            font-size: 20px;
            border-radius: 50px;
            background: #0096e6;
            padding: 15px;
            margin-top: 40px;
            display: block;
            color:#fff;
            cursor: pointer;
        }
        
        .remember{
            margin-left: 20px;
            margin-top: 20px;
            font-size:14px;
            color: #ccc;
            .checkbox{
                outline: none;
                width: 16px;
                height: 16px;
                display: inline-block;
                vertical-align: middle;
                margin-right: 6px;
                margin-left: 0;
            }
        }
        .word-quake{
            animation:wordQuake 0.75s linear;
            animation-duration: infinity;
        }
        @keyframes wordQuake {
            10%{
                transform: translate(3px);
            }
            20%{
                transform: translate(-3px);
            }
            30%{
                transform: translate(3px);
            }
            40%{
                transform: translate(-3px);
            }
            50%{
                transform: translate(2px);
            }
            60%{
                transform: translate(-2px);
            }
            70%{
                transform: translate(1px);
            }
            80%{
                transform: translate(-1px);
            }
            90%{
                transform: translate(0px);
            }
            100%{
                transform: translate(0px);
            }
        }
    }
}
</style>
