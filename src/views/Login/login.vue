<!--登录-->
<script setup>
import loginBgImg from '@/assets/login_bg.png';
import logoImg from '@/assets/logo.png';
import { reactive, ref, onMounted } from 'vue'
import { ElMessage } from 'element-plus';
import { loginHttp } from '@/serves';
import { useRouter } from 'vue-router'
import { setAccountInfo, setRememberInfo, getRememberInfo, removeRememberInfo } from '@/utils/authority';
import { AESEncrypt, AESDecrypt } from '@/utils/crypto';
import useUserInfoStore from '@/store/userInfo';

const userInfoStore = useUserInfoStore()
const router = useRouter()

const loginForm = reactive({
  loginName: '',
  password: '',
  remember: false,
})

const ruleFormRef = ref()

const rules = reactive({
  loginName: [
    { required: true, message: '请输入账号', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
  ],
})

onMounted(() => {
  // 密码赋值
  const info = getRememberInfo()
  if (info) {
    const obj = AESDecrypt(info)
    if (obj?.loginName && obj?.password) {
      loginForm.loginName = obj?.loginName || ''
      loginForm.password = obj?.password || ''
      loginForm.remember = true

    }
  }

})

const handleLogin = async (formEl) => {
  if (!formEl) return

  await formEl.validate(async (valid) => {

    if (valid) {
      const { remember, ...obj } = loginForm
      const res = await loginHttp(obj)
      if (res?.code === '200') {
        ElMessage.success('登录成功')
        setAccountInfo(res?.data)
        if (remember) {
          setRememberInfo(AESEncrypt(obj))
        } else {
          removeRememberInfo()
        }
        userInfoStore.getUserInfo(res?.data?.token)
        setTimeout(() => {
          router.push('/')
        }, 100)
      } else {
        ElMessage.error(res?.msg || '登录失败')
      }
    }
  })
}
</script>

<template>
  <main class="login">
    <div class="left-bg">
      <img :src="loginBgImg" alt="" srcset="">
    </div>
    <div class="right-login">
      <div class="login-main">
        <img :src="logoImg" alt="" srcset="">
        <h1>登录你的帐户</h1>
        <el-form ref="ruleFormRef" label-position="top" :model="loginForm" size="large" :rules="rules"
          :hide-required-asterisk="true">
          <el-form-item label="账号" prop="loginName">
            <el-input v-model="loginForm.loginName" placeholder="请输入账号" />
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" show-password v-model="loginForm.password" placeholder="请输入密码" />
          </el-form-item>
          <el-form-item class="password-operation">
            <el-checkbox v-model="loginForm.remember" label="记住密码" />
            <div class="forget" @click="router.push({ path: '/forgetPassword' })">
              忘记密码？
            </div>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" class="login-btn" @click="handleLogin(ruleFormRef)">登录</el-button>
            <el-button class="login-btn" @click="router.push('/register')">注册</el-button>
            <el-button class="login-btn" @click="router.go(-1)">返回</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.login {
  display: flex;
  height: 100vh;

  .left-bg {
    height: 100vh;
    width: 70%;
    background: #F1F3F6;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .right-login {
    position: relative;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    width: 30%;


    .login-main {
      position: absolute;
      width: 66%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;

      img {
        width: 100%;
        height: 100px;
        object-fit: contain;
        margin-bottom: 10px;
      }

      h1 {
        font-family: Poppins, Poppins;
        font-weight: 500;
        font-size: 20px;
        color: #666666;
        margin-bottom: 50px;
      }

      .password-operation {
        :deep(.el-form-item__content) {
          justify-content: space-between;

        }

        .forget {
          color: #028AF1;
          cursor: pointer;

          &:hover {
            text-decoration: underline;
          }
        }
      }



      .login-btn {
        margin: 30px 0 0 0;
        width: 100%;
      }
    }
  }
}
</style>