import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import { store } from "@/store";
import request from '../api/Request';
import {getCanvasUUID} from '../api/Request';
export const domain='json.ipv6plus.cn';
//import {getUUID} from '@/api/webGl'
export const Layout = () => import('@/layout/index.vue');


// 参数说明: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
// 静态路由
 const routes: Array<RouteRecordRaw> = [
    { 
        path: '/redirect',
        component: Layout,
        meta: { requireAuth: true },
        children: [
            {
                path: '/redirect/:path(.*)',
                component: () => import('@/views/redirect/index.vue')
            }
        ]
    },
    {
        path: '/',
        name:'/',
        meta: { requireAuth: true },
        component: () => import('@/views/index/index.vue'),
    },
    {
        path: '/index',
        name:'index',
        meta: { requireAuth: true },
        component: () => import('@/views/index/index.vue'),
    },
    {
        path: '/person',
        name:'person',
        // redirect: '/person/index',
        meta: { requireAuth: true },
        component: () => import('@/views/person/index.vue'),
    },
    {
        path: '/login',
        name:'login',
        component: () => import('@/views/login/index.vue'),
    },
    {
        path: '/logOut',
        component: () => import('@/views/login/loginOut.vue'),
    },
    {
        path: '/404', // 会匹配所有路径
        name: '404',
        meta: { requireAuth: true },
        component: () => import('@/views/error-page/404.vue'),
    },
    {
        path: '/401',
        name:'/401',
        meta: { requireAuth: true },
        component: () => import('@/views/error-page/401.vue'),
        
    }
]

// 创建路由
const router  = createRouter({
    history: createWebHistory(),
    routes,
    // 刷新时，滚动条位置还原
    scrollBehavior: () => ({ left: 0, top: 0 })
})

router.beforeEach((to, from, next) => {
    // 1. 每个条件执行后都要跟上 next() 或 使用路由跳转 api 否则页面就会停留一动不动
    // 2. 要合理的搭配条件语句，避免出现路由死循环。
    let uuid = localStorage.getItem("uuid");
    
    if(to.meta.requireAuth){
   
          if(Object.is(to.path,'/401') || Object.is(to.path,'/404' ||Object.is(to.path,'/405'))){
            
            next();
          }else{
            var jsonParam={"ip_addr":uuid,"domain":"","bulk":"false"}
            request.post('/api/smv/',jsonParam, function(res){
                if(res){
                   if(res.checkUUID=='Y'){
                       next() 
                   }else{//如果校验没通过
                      console.log('验证没通过');
                       next('/401') 
                   }
                }
          })
          if(!uuid){
            uuid=getCanvasUUID(domain);
            localStorage.setItem("uuid",uuid);
            next();
        }else{
            var localUUID=getCanvasUUID(domain);
            if(localUUID && localUUID!=uuid){
                //router.next('/401');x
                if(document.getElementById('app')){
                    
                    document.getElementById('msg401')?.append('客户端发生了变化');

                }
                next('/401');
                
            }
        }
          } 

    }
})
// 重置路由
// export function resetRouter() {
    
// }
// router.beforeEach((to, from) => {
    
// })
// 防止路由无限循环
let routeFlag = false;

export default router 