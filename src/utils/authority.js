import { ElMessage } from "element-plus";


//localStorage存储和删除用户的key.多处使用，统一配置
const ACCOUNT_INFO = 'blog-authority-account-info';
const WEB_AUTHORITY = 'new-blog-authority-account-info';
const REMEMBER_INFO = 'remember_info';

//获取用户权限
export function getAuthority (str) {
  const authorityString =
    typeof str === 'undefined' && localStorage
      ? localStorage.getItem(WEB_AUTHORITY)
      : str;
  let authority;
  try {
    if (authorityString) {
      authority = JSON.parse(authorityString);
    }
  } catch (e) {
    authority = authorityString;
  }

  if (typeof authority === 'string') {
    return [authority];
  }

  return authority || ['admin'];
}

export function setAuthority (authority) {
  const proAuthority = typeof authority === 'string' ? [authority] : authority;
  localStorage.setItem(WEB_AUTHORITY, JSON.stringify(proAuthority));
}



//localStorage存储用户信息
export function setAccountInfo (accountInfo) {
  localStorage.setItem(ACCOUNT_INFO, JSON.stringify(accountInfo));
}

//获取账号信息
export function getAccountInfo () {
  let accountInfo = null;
  try {
    const item = localStorage.getItem(ACCOUNT_INFO);
    accountInfo = JSON.parse(item);
  } catch (error) {
    ElMessage.error('未在 localStorage 中获取到已登录用户信息');
  }
  return accountInfo;
}

//localStorage存储用户账号信息
export function setRememberInfo (accountInfo) {
  localStorage.setItem(REMEMBER_INFO, accountInfo);
}

//localStorage获取用户账号信息
export function getRememberInfo () {
  let accountInfo = null;
  try {
    const item = localStorage.getItem(REMEMBER_INFO);
    accountInfo = item;

  } catch (error) {
    ElMessage.error('未在 localStorage 中获取到已登录用户信息');
  }
  console.log('accountInfo', accountInfo);
  return accountInfo;
}

//删除用户账号信息
export function removeRememberInfo () {

  localStorage.removeItem(REMEMBER_INFO);
  // localStorage.clear();
}

//删除用户权限
export function removeAcountInfoAndAuthority () {
  localStorage.removeItem(ACCOUNT_INFO);
  localStorage.removeItem(WEB_AUTHORITY);
  // localStorage.removeItem(REMEMBER_INFO);
  // localStorage.clear();
}

function getQueryString (name) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
  var r = window.location.search.substr(1).match(reg);
  if (r != null) {
    return unescape(r[2]);
  }
  return null;
}