/**
 * 封装操作localstorage本地存储的方法
 */
 const TOKEN = "token";

 const $localStorage = {
     //存储
     set(key: string, value: any) {
         localStorage.setItem(key, JSON.stringify(value))
     },
     //取出数据
     get<T>(key: string) {
         const value = localStorage.getItem(key)
         if (value && value != "undefined" && value != "null") {
             return <T>JSON.parse(value)
         }
     },
     // 删除数据
     remove(key: string) {
         localStorage.removeItem(key)
     },
     //操作token的方法
     setToken(token: string) {   this.set(TOKEN,token)                       },
     getToken(): string      {   return this.get<string>(TOKEN) as string    },
     removeToken()           {   this.remove(TOKEN)                          }
 };
 export default $localStorage;