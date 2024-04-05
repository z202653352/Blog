import { defineStore } from 'pinia'
import { removeAcountInfoAndAuthority, getAccountInfo } from '@/utils/authority';
import { userInfoHttp } from '@/serves';

export default defineStore('userInfo', {
  state: () => ({ userInfo: {}, }),
  persist: true,
  actions: {

    setUserInfo (info) {
      this.userInfo = info
    },
    async getUserInfo (tokens) {
      const token = tokens || getAccountInfo()?.token
      if (token) {
        const res = await userInfoHttp({ token })
        console.log('getUserInfo', res.data);
        if (res.code === '200') {
          this.userInfo = { ...res.data }
        } else {
          this.resetUserInfo()
        }
      }
    },
    resetUserInfo () {
      this.userInfo = {}
      removeAcountInfoAndAuthority()
    }
  },
})