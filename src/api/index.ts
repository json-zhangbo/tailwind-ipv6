import request from "@/api/request";
import { ref } from 'vue';
export const menuList=ref(null);
export let foolrList=ref(null);
export const serveResult=ref(null);

export const menus=()=>{
      
}
export const deleteIp=(parm:string)=>{
    console.log('开始删除。。。。。。。。。');
    if(undefined!=parm && parm==""){
          
    }else{
        request.post('/api/smv/xkpoa2k/',parm,function(res){
            serveResult.value=res
       })
    }
    
}

export const floors=(foolrCode:string)=>{

     request.get('/dev-api/floor/level/'+foolrCode,'',function(res){
         
         foolrList.value=res
     })
    
}







