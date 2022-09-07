
import { ref, } from 'vue';
import router from '@/router'
import request  from './Request';
//import FingerprintJS from '@fingerprintjs/fingerprintjs'

export const uuid=ref('');
//export const fpPromise = FingerprintJS.load({monitoring: false,debug:false});
 
// (async () => {
//     console.log('开始获取uuid');
//     const fp = await fpPromise
//     const result = await fp.get()
//     uuid.value=result.visitorId;
//     console.log('获取客户端uuid完毕');
//     localStorage.setItem('uuid',uuid.value);
    
//   })().catch(
//     error => console.error(error)
//   )
  

  // export   function getUUID():string{
  
  //   (async () => {
  //     console.log('getUUID开始获取uuid');
  //     const fp = await fpPromise
  //     const result = await fp.get()
  //     uuid.value=result.visitorId;
  //     console.log('获取客户端uuid完毕');
  //     localStorage.setItem('uuid',uuid.value);
  //     return uuid.value;
  //   })().catch(
  //     error => console.error(error)
  //   )
  //   return uuid.value;
  // }

  
  export default uuid;