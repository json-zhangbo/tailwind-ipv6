
//const sm2 = require('sm-crypto').sm2 // 获取sm2对象

import {sm2} from 'sm-crypto'

const cipherMode = 1 // 选择加密策略，1 - C1C3C2，0 - C1C2C3，默认为1
const sysPublicKey = '04070f26d694254e0095f72f449f36d7536a65ce6021d83fc1b5cae68fca4358c05996afa3addf1d8e82ea85efe5e02829178059e587b3a5b94c55454cff2e3de8' // 系统后台公钥
const uiPrivateKey = '你自己前端的私钥' // 前端UI私钥

/**
 * SM2加密string数据
 * @param {string} data 原始数据
 * @returns {string} 加密后数据
 */
export function getSm2DataHexByString(data) {
  if (data && (typeof data === 'string') && data.constructor === String) {
    return '04' + sm2.doEncrypt(data, sysPublicKey, cipherMode)
  }
  return null
}

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
    return sm2.doDecrypt(dataHex, uiPrivateKey, cipherMode)
  }
}