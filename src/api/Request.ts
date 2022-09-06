import axios from "axios"
import qs from "qs"
import router from '@/router'
import { encryptData2String } from "@/api/encrypt/Encrypt"
import { getUUID ,fpPromise,uuid} from "./webGl"

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
    async function (config) {
       
        //let uuids=getUUID();
        const fp =await fpPromise;
        const result = await fp.get()
        uuid.value=result.visitorId;
        const localUUID=localStorage.getItem('uuid');
       
        //console.log('ajax 请求之前检验客户端是否有变化...uuid...'+uuid.value)
        //console.log('ajax 请求之前检验客户端是否有变化...'+localStorage.getItem('uuid'))
        if(uuid.value!=localUUID){
            console.log('客户端参数被修改!!!!!!!');
           
        }
        let singString=TIMESTAMP+NOCE+uuid.value;
        let sign=encryptData2String(singString);
        // if(localStorage.getItem('uuid')!==uuid.value){
        //        console.log('客户端参数被修改!!!!!!!');
        // }
        if(config && config.headers){
            config.headers.common['UUID']=localStorage.getItem('uuid');
            config.headers.common['DST']=dstIp;
            config.headers.common['SIGN']=sign;
        }
         
        //在发送请求之前做些什么
        if (config.method == "post") {
                
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
        return Promise.reject(error)
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
                    callback ? resolve(callback(res.data)) : resolve(res.data);
                })
                .catch(err => { 
                    console.log('服务器响应超时');
                    
                    //reject(err);
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
export function getCanvasUUID(domain){
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext("2d");
    var txt = domain;
    if(ctx){
        ctx.textBaseline = "top";
        ctx.font = "14px 'Arial'";
        ctx.textBaseline = "bottom";
        ctx.fillStyle = "#f60";
        ctx.fillRect(125,1,62,20);
        ctx.fillStyle = "#069";
        ctx.fillText(txt, 2, 15);
        ctx.fillStyle = "rgba(102, 204, 0, 0.7)";
        ctx.fillText(txt, 4, 17);
    }
    var b64 = canvas.toDataURL().replace("data:image/png;base64,","");
    var bin = atob(b64);
    var crc = bin2hex(bin.slice(-16,-12));
    return crc;
  
}
function bin2hex(s) {
    var i, l, o = '',
      n;
  
    s += '';
  
    for (i = 0, l = s.length; i < l; i++) {
      n = s.charCodeAt(i)
        .toString(16);
      o += n.length < 2 ? '0' + n : n;
    }
  
    return o;
  }
export default request;
