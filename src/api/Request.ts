import axios from "axios"
import qs from "qs"
import router from '@/router'
import { encryptData2String,domain } from "@/api/encrypt/Encrypt"
import navConfig from '@/api/navigatorConfig'
import md5 from 'js-md5'

//import { getUUID ,fpPromise,uuid} from "./webGl"
function randomNoce():string{
    var result="";
    const data = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
        'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    for(var i=0;i<12;i++){
        let r=Math.floor(Math.random()*16); 
        result+=data[r]; 
    }
    return result;
}
//解析ipv6地址
var dstIp=window.location.hostname;
dstIp=dstIp.substring(1,dstIp.length-1);
const TIMESTAMP=Date.now();
const NOCE=randomNoce();
const service = axios.create({
    //baseURL: '/api', // 所有的请求地址前缀部分
    timeout: 6000, // 请求超时时间毫秒 
    withCredentials: true, // 异步请求携带cookie
    headers: {
        // 设置后端需要的传参类型
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'TIMESTAMP':TIMESTAMP,
        'NOCE':NOCE,
        //'uuid':uuid.value,
        //DST:dstIp,
        //'SIGN':'AFWr2323',
    }
})

//添加请求拦截器
 service.interceptors.request.use(
     function (config) {
       
        let uuids=getCanvasUUID(domain);
        
        const localUUID=localStorage.getItem('uuid');
       
        
        let singString=TIMESTAMP+NOCE+uuids;
        let sign=encryptData2String(singString);
        // if(localStorage.getItem('uuid')!==uuid.value){
        //        console.log('客户端参数被修改!!!!!!!');
        // }
        if(config && config.headers){
            config.headers.common['UUID']=uuids;
            config.headers.common['DST']=dstIp;
            config.headers.common['SIGN']=sign;
        }
         
        //在发送请求之前做些什么
        if (config.method == "post") {
                //console.log('post 请求已经发出');
                // securityCode
        }
        return config
    },
    function (error) {
        // 对请求错误做些什么
        console.log(error)
        return Promise.reject(error)
    }
)

// 添加响应拦截器
service.interceptors.response.use(
    function (response) {
       
        // 2xx 范围内的状态码都会触发该函数。
        // 对响应数据做点什么
        // dataAxios 是 axios 返回数据中的 data
        const dataAxios = response.data
        
        // 这个状态码是和后端约定的
        const code = dataAxios.reset
        // if(dataAxios.code==500){
        //    console.log('服务器内部错误.....');
        //    router.push('/500')
        // }
        // if(dataAxios.code=='401'){
        //     console.log('401...........');
        //     router.push('/401')
        // }
        return dataAxios
    },
    function (error) {
        // 超出 2xx 范围的状态码都会触发该函数。
        // 对响应错误做点什么
        if(error.code = "ECONNABORTED"){
           
           if(error.response){
            if(error.response.status=='500' || error.response.status=='503'){
                router.push('/500')
            }
            if(error.response.status=='404' || error.response.status=='405'){
                router.push('/404')
            }else if(error.response.status=='401'){
                  
                   router.push('/401')
                  
            }else{
                    router.push('/405')
                }
           }
        }else{
         
        }
        //return Promise.reject(error)
    }
)
/**
 * 封装请求方式
 */
const request =
{
    /**
     * @name: 封装axios get方法
     * @desc: 描述
     * @author: camellia
     * @email: guanchao_gc@qq.com
     * @date: 2020-12-21 
     * @param url 请求连接
     * @param params 请求参数
     * @param callback 回调方法
     */
    get(url: string, params: any, callback: any) 
    {
        
        
        return new Promise((resolve, reject) => {
            service
                .get(url, {
                    params: params,
                   // headers:{'':uuid.value}
                })
                .then(res => {
                    
                    callback ? resolve(callback(res.data)) : resolve(res.data);
                })
                .catch(err => {
                   reject(err);
                });
        });
    },
 
    /**
     * @name: 封装axios post方法
     * @desc: 描述
     * @author: camellia
     * @email: guanchao_gc@qq.com
     * @date: 2020-12-21 
     * @param url 请求连接
     * @param params 请求参数
     * @param callback 回调方法
     */
    post(url: string, params: any, callback: any) 
    {
        return new Promise((resolve, reject) => {
            
            service
                .post(url, params)
                .then(res => {
                    if(res){
                        callback ? resolve(callback(res.data)) : resolve(res.data);
                    }else{
                        callback ? resolve(callback(res)) : resolve(res);
                    }
                   
                })
                .catch(err => { 
                    console.log('服务器响应超时');
                    
                    reject(err);
                });
        });
    },
    /**
     * @name: put请求封装
     * @author: camellia
     * @email: guanchao_gc@qq.com
     * @date: 2021-03-01 
     * @param url 请求连接
     * @param params 请求参数
     * @param callback 回调方法
     */
    put(url: string, params: any, callback: any) 
    {
        return new Promise((resolve, reject) => {
            axios
                .put(url, params)
                .then(res => {
                    callback ? resolve(callback(res.data)) : resolve(res.data);
                }, err => {
                    reject(err)
                })
        })
    },
    /**
     * @name: 请求失败后的错误统一处理
     * @author: camellia
     * @email: guanchao_gc@qq.com
     * @date: 2021-03-08 
     * @param {Number} status 请求失败的状态码
     */
    errorHandle(status:any, other:any)
    {
        // 状态码判断
        switch (status) {
            // 401: 未登录状态，跳转登录页
            case 401:
                // toLogin();
                break;
            // 403 token过期
            // 清除token并跳转登录页
            case 403:
                // tip('登录过期，请重新登录');
                // localStorage.removeItem('token');
                // store.commit('loginSuccess', null);
                setTimeout(() => {
                    // toLogin();
                }, 1000);
                break;
            // 404请求不存在
            case 404:
                // tip('请求的资源不存在');
                break;
            default:
                console.log(other);
        }
    }
    
}




 export function getCanvasUUID(domain):string{
    // let browser =''
    // for(var proname in navigator){//利用for循环，声明变量proname获取并存储navigator对象的所有属性值
    //     browser +=""+ proname +":"+ navigator[proname]+"\n";//利用‘+=’运算符实现连续输出
    //     }
   
    let data=navConfig.appVersion+navConfig.platform
    +navConfig.cookieEnabled
    +navConfig.position.latitude+navConfig.position.longitude
    +navConfig.userAgent
    +navConfig.screen.availHeight
    +navConfig.screen.availWidth
    +navConfig.screen.height
    +navConfig.screen.width
    +navConfig.screen.orientation
    +navConfig.screen.pixelDepth
    +navConfig.plugins
    +navConfig.screenRatio
    +navConfig.appName
    +navConfig.vendor 
    +navConfig.language
    +navConfig.imageBase64;
   
    //let uuid=encryptData2String(data);
    
    // let md5 = crypto.createHash("md5");
    let uuid=md5(data);
   
    //let uuid=singNature(data);
    //let uuid=sm4SingNature(data);
    if(localStorage.getItem('uuid')==null || localStorage.getItem('uuid')=='' ||localStorage.getItem('uuid')==undefined){
       
        localStorage.setItem('uuid',uuid);
    }
   
    return uuid;
}

export default request;
