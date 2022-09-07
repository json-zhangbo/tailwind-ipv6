<template>
    <div class="errPage-container">
      <el-button icon="arrow-left" class="pan-back-btn" @click="back">返回</el-button>
      <el-row>
        <el-col :span="12">
          <h1 class="text-jumbo text-ginormous">Oops!</h1>
          <h2>没有权限访问</h2>
          <h2 id="msg401"></h2>
          <h6>请联系管理员</h6>
          <ul class="list-unstyled">
            <li>或者你可以去:</li>
            <li class="link-type">
              <a href="https://spc.ipv6plus.cn">登录</a>
            </li>
          </ul>
        </el-col>
        <el-col :span="12">
          <img :src="errGif" width="313" height="428" alt="Girl has dropped her ice cream.">
        </el-col>
      </el-row>
    </div>
  </template>
  
  <script >
  import errGif from '@/assets/images/401.png'
  import { deleteIp } from '../../api'
  export default {
   
    data() {
      return {
        errGif: errGif + '?' + +new Date()
      }
    },
    setup(){
      
    },
    mounted(){
       this.deleteWebsite()
    },
    methods: {
      deleteWebsite(){
        console.log('开始删除。。。。deleteWebsite');
        var host=window.location.hostname
        host=host.substring(1,host.length-1)
        
        var jsonParam={"ip_addr":host,"domain":"","bulk":"false"}
        
        deleteIp(jsonParam); 
        
      },
      back() {
        if (this.$route.query.noGoBack) {
          this.$router.push({ path: '/index' })
        } else {
          this.$router.go(-1)
        }
      }
    }
  }
  </script>
  
  <style lang="scss" scoped>
    .errPage-container {
      width: 800px;
      max-width: 100%;
      margin: 100px auto;
      .pan-back-btn {
        background: #008489;
        color: #fff;
        border: none!important;
      }
      .pan-gif {
        margin: 0 auto;
        display: block;
      }
      .pan-img {
        display: block;
        margin: 0 auto;
        width: 100%;
      }
      .text-jumbo {
        font-size: 60px;
        font-weight: 700;
        color: #484848;
      }
      .list-unstyled {
        font-size: 14px;
        li {
          padding-bottom: 5px;
        }
        a {
          color: #008489;
          text-decoration: none;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  </style>
  
  