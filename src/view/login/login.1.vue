<template>
  <div class="login">
     <div class="loginbox">
        <div class="loginlogo"></div>
        <h3>我的博客</h3>
        <div class="username">
            <span class="u_user"></span>
            <input type="text" placeholder="输入用户名登陆">
        </div>
        <div class="psdinput">
            <span class="us_uer"></span>
            <input type="password" placeholder="输入密码">
        </div>
        <div class="loginbtn">登录</div>
        <div class="remember">
            <label class="picklabel">
                <input type="checkbox" class="checkbox"><span class="checkico"></span>
                <span>记住密码</span>
            </label>
        </div>
     </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
     
    }
  },
  watch:{
    
  },
  mounted(){
    
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
            margin-bottom: 30px;
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
        .loginbtn{
            height: 20px;
            line-height: 20px;
            text-align: center;
            font-size: 20px;
            border-radius: 50px;
            background: #0096e6;
            padding: 15px;
            margin-top: 20px;
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
    }
}
</style>
