
//const sm2 = require('sm-crypto').sm2 // 获取sm2对象

import {sm2,sm4} from 'sm-crypto'
export const domain='json.ipv6plus.cn';
const cipherMode = 1 // 选择加密策略，1 - C1C3C2，0 - C1C2C3，默认为1
//服务端公钥
const sysPublicKey = '04070f26d694254e0095f72f449f36d7536a65ce6021d83fc1b5cae68fca4358c05996afa3addf1d8e82ea85efe5e02829178059e587b3a5b94c55454cff2e3de8' // 系统后台公钥
//自己私钥
const privateKey_my = '5d5faf94626ff2f368052ddf0d30b4be94d365d7ed704bc2d8aff57e9d42ebe8' 
//自己的公钥
const publicKey_my = '048843c22056c07a6556219e781a21a1b830684bd4266e41f008951e0c51821ed36ed2b4e53f4710f52740b2262777aee42eba2606f0f883b0e5653d7995dee4b0' 
/**
 * SM2加密string数据
 * @param {string} data 原始数据
 * @returns {string} 加密后数据
 */
export function encryptData2String(data) {
  if (data && (typeof data === 'string') && data.constructor === String) {
    return  '04' +sm2.doEncrypt(data, sysPublicKey, cipherMode)
  }
  return null
}
/**
 * SM2加密object数据
 * @param {Object} data 原始数据
 * @returns {string} 加密后数据
 */
export function getSm2DataHexByObject(data) {
  if (data) {
    return '04' + sm2.doEncrypt(JSON.stringify(data), sysPublicKey, cipherMode)
  }
  return null
}

/**
 * SM2解密数据
 * @param {string} dataHex 原始加密数据
 * @returns {string} 解密后数据
 */
export function getSm2DataByString(dataHex) {
  if (dataHex && (typeof dataHex === 'string') && dataHex.constructor === String) {
    dataHex = dataHex.substring(2).toLocaleLowerCase()
    return sm2.doDecrypt(dataHex, privateKey_my, cipherMode)
  }

}
// // 纯签名 + 生成椭圆曲线点
// export  function doSignature(msg):string{
  
//   let sigValueHex =sm2.doSignature(msg, privateKey_my); // 签名

//   return sigValueHex;
  
// }
// // 纯签名
// export function singNature(msg:string ){
//   let sigValueHex2 = sm2.doSignature(msg, privateKey_my, {
//     pointPool: [sm2.getPoint(), sm2.getPoint(), sm2.getPoint(), sm2.getPoint()], // 传入事先已生成好的椭圆曲线点，可加快签名速度
//   }); // 签名
//   return sigValueHex2;
// }
// export function sm4SingNature(msg:string){

//     const key = [0x01, 0x23, 0x45, 0x67, 0x89, 0xab, 0xcd, 0xef, 0xfe, 0xdc, 0xba, 0x98, 0x76, 0x54, 0x32, 0x10];
//     let encryptData  = sm4.encrypt([0x01, 0x23, 0x45, 0x67, 0x89, 0xab, 0xcd, 0xef, 0xfe, 0xdc, 0xba, 0x98, 0x76, 0x54, 0x32, 0x10], key);
//     return encryptData ;
// }