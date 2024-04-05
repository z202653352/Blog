<!--注册-->
<script setup>
import registerBgImg from '@/assets/register_bg.png';
import logoImg from '@/assets/logo.png';
import { reactive, ref, onMounted } from 'vue'
import { ElMessage } from 'element-plus';
import { registerHttp, sendCoedHttp } from '@/serves';
import { useRouter } from 'vue-router'
// import { validateEmail } from '@/utils/validate';

const router = useRouter()

const registerForm = reactive({
  loginName: '',
  qq: '',
  sendCode: '',
  password: '',
  newPassword: '',
})

const ruleFormRef = ref()
const sendFlag = ref(false)

// 邮箱校验
const validateEmail = (rule, value, callback) => {
  var emailRegExp = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;
  var emailRegExp1 = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
  if (!value) {
    sendFlag.value = false
    callback(new Error('请输入邮箱'));
    return
  }
  if ((!emailRegExp.test(value) && value != '') || (!emailRegExp1.test(value) && value != '')) {
    sendFlag.value = false
    callback(new Error('请输入有效邮箱格式'));

  } else {
    sendFlag.value = true
    callback();

  }
};

// 二次密码校验
const validateNewPassword = (rule, value, callback) => {
  console.log('value', value, registerForm.newPassword);
  if (value != registerForm.password) {
    callback(new Error('两次输入密码不一致'));
  } else {
    callback();
  }
}

const rules = reactive({
  loginName: [
    { required: true, message: '请输入账号', trigger: 'blur' },
  ],
  qq: [
    { required: true, validator: validateEmail, trigger: 'blur' }
  ],
  sendCode: [
    { required: true, message: '请输入验证码', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
  ],
  newPassword: [
    { required: true, message: '请输入确定密码', trigger: 'blur' },
    { validator: validateNewPassword, trigger: 'blur' }

  ],
})

// 注册
const handleRegister = async (formEl) => {
  if (!formEl) return

  await formEl.validate(async (valid) => {

    if (valid) {
      const { newPassword, ...obj } = registerForm
      console.log('obj', obj);
      const res = await registerHttp(obj)
      if (res?.code === '200') {
        ElMessage.success('注册成功')
        router.push({ path: '/login' })
      } else {
        ElMessage.error(res?.msg || '注册失败')
      }
    }
  })
}

// 发送验证码
const handleSendEmail = async (email) => {
  if (!email) {
    ElMessage.error('请输入邮箱')
    return
  }
  const res = await sendCoedHttp({ qq: email, scene: 1 })
  if (res?.code === '200') {
    ElMessage.success('发送成功')
  } else {
    ElMessage.error(res?.msg || '发送失败')
  }
}
</script>

<template>
  <main class="register">
    <div class="left-bg">
      <img :src="registerBgImg" alt="" srcset="">
    </div>
    <div class="right-register">
      <div class="register-main">
        <img :src="logoImg" alt="" srcset="">
        <h1>注册你的帐户</h1>
        <el-form ref="ruleFormRef" :model="registerForm" size="large" :rules="rules" label-width="auto">
          <el-form-item label="账号" prop="loginName">
            <el-input v-model="registerForm.loginName" placeholder="请输入账号" />
          </el-form-item>
          <el-form-item label="邮箱" prop="qq">
            <el-input v-model="registerForm.qq" placeholder="请输入邮箱" />
          </el-form-item>
          <el-form-item label="验证码" prop="sendCode">
            <el-input v-model="registerForm.sendCode" placeholder="请输入验证码">
              <template #append>
                <el-button type="primary"
                  :style="{ 'background-color': sendFlag ? '#409EFF' : '#f5f7fa', 'color': sendFlag ? '#fff' : '#909399' }"
                  @click="handleSendEmail(registerForm.qq)">发送</el-button>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" show-password v-model="registerForm.password" placeholder="请输入密码" />
          </el-form-item>
          <el-form-item label="二次密码" prop="newPassword">
            <el-input type="password" show-password v-model="registerForm.newPassword" placeholder="请输入密码" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" class="register-btn" @click="handleRegister(ruleFormRef)">注册</el-button>
            <el-button class="register-btn" @click="router.go(-1)">返回</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.register {
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

  .right-register {
    position: relative;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    width: 30%;


    .register-main {
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



      .register-btn {
        margin: 30px 0 0 0;
        width: 100%;
      }
    }
  }
}
</style>