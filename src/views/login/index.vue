
<template>

  <div class="flex items-center justify-center min-h-full px-4 py-12 sm:px-6 lg:px-8">
  
    <div class="w-full max-w-md space-y-8">
      <div>
        <img class="w-auto h-12 mx-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
        <h2 class="mt-6 text-3xl font-extrabold text-center text-gray-900">Sign in to your account</h2>
        <p class="mt-2 text-sm text-center text-gray-600">
          Or
          {{ ' ' }}
          <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500"> start your 14-day free trial </a>
        </p>
      </div>
      <!-- <form class="mt-8 space-y-6" action="#/" method="POST"> -->
      <el-form :model="ruleForm" :ref="ruleForm">
        <input type="hidden" name="remember" value="true" />
        <div class="-space-y-px rounded-md shadow-sm">
          <div>
            <label for="email-address" class="sr-only">Email address</label>
            <input id="email-address" name="email" type="email" autocomplete="email" required="" class="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input id="password" name="password" type="password" autocomplete="current-password" required="" class="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
          </div>
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input id="remember-me" name="remember-me" type="checkbox" class="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" />
            <label for="remember-me" class="block ml-2 text-sm text-gray-900"> Remember me </label>
          </div>

          <div class="text-sm">
            <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500"> Forgot your password? </a>
          </div>
        </div>

        <div>
          <button type="button" @click="submitForm('ruleForm')" class="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
              <LockClosedIcon class="w-5 h-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
            </span>
            登录
          </button>
        </div>
        </el-form>
      <!-- </form> -->
    </div>
    <div class="w-full max-w-md space-x-8">
<!-- 拖拽元素 -->
<ul 
    @dragstart="dragStart"
    @dragend="dragEnd"
    
>
    <li 
        v-for="(val, key, index) in typeList"
        draggable
        :data-type="key"
        :key="index + 1"
    >
        <span :class="val.icon" >
        <component
          :is="val.com"
        ></component>
        </span>
        <p>---{{val.name}}----</p>
    </li>
</ul>
 
    </div>
  </div>
</template>

<script>
import { defineComponent  } from 'vue';
import Draggable from 'vuedraggable'
import Banner from '@/components/view/Banner.vue'
import Product from '@/components/view/Banner.vue'
import Images from '@/components/view/Banner.vue'
export default{
    data(){
        return {
           ruleForm:{
                 username:'admin',
                 password:'admin'
           },
           rules:{


           },
           typeList: {
        banner: {
            name: '轮播图',
            icon:'el-icon-picture',
            com: Banner
        },
        product: {
            name: '商品',
            icon: 'el-icon-s-goods',
            com: Product
        },
        images: {
            name: '图片',
            icon: 'el-icon-picture',
            com: Images
        },
    }
    }
    },
    components:{
      Banner,
      Product,
      Images
    },
    setup(){
       
    },
    method: {
         submitForm(formName){
             Vue.axios.get('http://36.137.212.103:9900/api-uaa/oauth/token').then((response) => {
                console.log(response.data)
              })

         },
         onDragstop(){
           console.log('操作结束....')
         },
      dragStart(e) {
        console.log('*******dragStart******')
        this.type = e.target.dataset.type
      },
      // 结束拖拽
      dragEnd(e) {
            this.$delete(this.view[this.index], 'status')
            this.isPush = false
            this.type = null
        },
      dragOver() {
    let className = e.target.className
    let name = className !== 'view-content' ? 'item' : 'view-content'
 
    // 组件的默认数据
    const defaultData = {
        type: this.type,    // 组件类型
        status: 2,          // 默认状态
        data: [],           // 基本数据
        options: {}         // 其他操作
    }
 
    if (name == 'view-content') {
        //...
    } else if (name == 'item') {
        //...
    }}
    }

}
</script>