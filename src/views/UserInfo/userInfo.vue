<script setup>
import { useRouter } from 'vue-router'
import { reactive, ref, onMounted, watch } from 'vue'
import { validateEmail } from '@/utils/validate';
import { getAccountInfo } from '@/utils/authority'
import { userInfoHttp, editUserInfoHttp } from '@/serves';
import useUserInfoStore from '@/store/userInfo';

const userInfoStore = useUserInfoStore()
const router = useRouter()

const userInfoForm = reactive({
  profile: '',
  loginName: '',
  qq: '',
  username: '',
  pwd: '',
})
const userInfoRef = ref()
const fileData = ref({
  token: getAccountInfo()?.token
})

onMounted(async () => {

  getUserInfo()
})
watch(() => userInfoStore.userInfo, (newInfo) => {
  getUserInfo()
})
const getUserInfo = async () => {
  const userInfo = userInfoStore.userInfo
  userInfoForm.loginName = userInfo?.loginName
  userInfoForm.qq = userInfo?.email
  userInfoForm.username = userInfo?.username
  userInfoForm.profile = userInfo?.profile
  userInfoForm.pwd = userInfo?.password
}

const handleAvatarSuccess = (response) => {
  userInfoForm.profile = response.data
}

const beforeAvatarUpload = (rawFile) => {
  if (rawFile.type !== 'image/jpeg') {
    return false
  } else if (rawFile.size / 1024 / 1024 > 10) {
    ElMessage.error('上传头像图片大小不能超过 10MB!')
    return false
  }
  return true
}

const handleOk = async () => {
  const params = {
    username: userInfoForm.username,
    profile: userInfoForm.profile,
    token: getAccountInfo()?.token,
    pwd: userInfoForm?.pwd || ''
  }
  const res = await editUserInfoHttp(params)
  if (res?.code === '200') {
    ElMessage.success('修改成功')
    userInfoStore.getUserInfo()
  } else {
    ElMessage.error(res?.msg || '获取用户信息失败')
  }
}


</script>

<template>
  <div class="user-info">
    <div>
      <el-form ref="userInfoRef" :model="userInfoForm" size="large" label-width="auto" style="width: 600px">
        <el-form-item label="头像" prop="profile">
          <el-upload class="avatar-uploader" action="/api/other/file/upload" :show-file-list="false"
            :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload" :data="fileData">
            <img v-if="userInfoForm.profile" :src="userInfoForm.profile" class="avatar" />
            <el-icon v-else class="avatar-uploader-icon">
              <Plus />
            </el-icon>
          </el-upload>
        </el-form-item>
        <el-form-item label="账号" prop="loginName">
          <el-input disabled v-model="userInfoForm.loginName" placeholder="请输入账号" />
        </el-form-item>
        <el-form-item label="邮箱" prop="qq">
          <el-input disabled v-model="userInfoForm.qq" placeholder="请输入邮箱" />
        </el-form-item>
        <el-form-item label="用户名" prop="username">
          <el-input v-model="userInfoForm.username" placeholder="请输入用户名" />
        </el-form-item>
        <el-form-item label="新密码" prop="pwd">
          <el-input type="password" show-password v-model="userInfoForm.pwd" placeholder="请输入新密码" />
        </el-form-item>
        <el-form-item>
          <div class="btns">
            <el-button type="primary" class="register-btn" @click="handleOk(userInfoRef)">确定</el-button>
            <el-button class="register-btn" @click="router.go(-1)">返回</el-button>
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