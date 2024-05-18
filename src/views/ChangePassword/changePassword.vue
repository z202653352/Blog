<!-- 修改密码 -->
<script setup>
import { useRouter } from 'vue-router'
import { reactive, ref, onMounted, watch } from 'vue'
import { validateEmail } from '@/utils/validate';
import { getAccountInfo } from '@/utils/authority'
import { changePwdHttp, editUserInfoHttp } from '@/serves';
import useUserInfoStore from '@/store/userInfo';
const userInfoStore = useUserInfoStore()
const router = useRouter()

const infoForm = reactive({
  oldPwd: '',
  newPwd: '',
  confirmPwd: '',
})
const infoRef = ref()

const handleOk = async () => {
  const { confirmPwd, ...arr } = infoForm
  const params = { token: getAccountInfo()?.token, ...arr }
  const res = await changePwdHttp(params)
  if (res?.code === '200') {
    ElMessage.success('修改成功,请重新登录')
    setTimeout(() => {
      userInfoStore.resetUserInfo()
      router.push('/')
    }, 1000)
  } else {
    ElMessage.error(res?.msg || '修改失败')
  }
}

// 二次密码校验
const validateNewPassword = (rule, value, callback) => {
  if (value != infoForm.newPwd) {
    callback(new Error('两次输入密码不一致'));
  } else {
    callback();
  }
}

const rules = reactive({
  oldPwd: [
    { required: true, message: '请输入旧密码', trigger: 'blur' },
  ],
  newPwd: [
    { required: true, message: '请输入新密码', trigger: 'blur' },
  ],
  confirmPwd: [
    { required: true, message: '请输入确认密码', trigger: 'blur' },
    { validator: validateNewPassword, trigger: 'blur' }

  ],
})



</script>

<template>
  <div class="user-info">
    <div>
      <el-form ref="infoRef" :model="infoForm" :rules="rules" size="large" label-width="auto" style="width: 600px">
        <el-form-item label="旧密码" prop="oldPwd">
          <el-input type="password" show-password v-model="infoForm.oldPwd" placeholder="请输入旧密码" />
        </el-form-item>
        <el-form-item label="新密码" prop="newPwd">
          <el-input type="password" show-password v-model="infoForm.newPwd" placeholder="请输入新密码" />
        </el-form-item>
        <el-form-item label="确认密码" prop="confirmPwd">
          <el-input type="password" show-password v-model="infoForm.confirmPwd" placeholder="请输入新密码" />
        </el-form-item>
        <el-form-item>
          <div class="btns">
            <el-button type="primary" class="register-btn" @click="handleOk(infoRef)">确定</el-button>
            <el-button class="register-btn" @click="router.push('/')">返回</el-button>
          </div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<style scoped lang="scss">
.user-info {
  display: flex;
  justify-content: center;
  margin-top: 100px;

  .avatar-uploader .avatar {
    width: 100px;
    height: 100px;
    display: block;
  }

  :deep(.avatar-uploader .el-upload) {
    border: 1px dashed var(--el-border-color);
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: var(--el-transition-duration-fast);
  }

  :deep(.avatar-uploader .el-upload:hover) {
    border-color: var(--el-color-primary);
  }

  :deep(.el-icon.avatar-uploader-icon) {
    font-size: 28px;
    color: #8c939d;
    width: 100px;
    height: 100px;
    text-align: center;
  }

  .btns {
    margin: 30px auto;
  }
}
</style>