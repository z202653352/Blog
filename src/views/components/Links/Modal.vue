<!--友情链接申请模态-->
<script setup>
import { defineProps, ref, onBeforeMount, onBeforeUpdate, onUpdated, watch } from 'vue';
import communityTwoTonedImg from '@/assets/community/community_two_toned.png';
import logoImg from '@/assets/logo.png';

const { dialogVisible, onCancel } = defineProps({
  dialogVisible: {
    type: Boolean,
    default: false
  },

  onCancel: {
    type: Function,
    default: () => { }
  },
  onSubmit: {
    type: Function,
    default: () => { }
  }
})



const form = ref({
  webName: '',
  webAdd: '',
  webDescribe: '',
  webLogo: '',
  webEmail: '',
  applyQq: '',
})

const resetForm = () => {
  form.value = {
    webName: '',
    webAdd: '',
    webDescribe: '',
    webLogo: '',
    webEmail: '',
    applyQq: '',
  }
}
defineExpose({
  resetForm
})
</script>

<template>
  <div class="modal">
    <el-dialog :model-value="dialogVisible" width="757px" title="" :before-close="onCancel" :show-close="false">
      <div class="content">
        <el-space :size="30" alignment="start">
          <div class="case">
            <div class="header">
              <img :src="communityTwoTonedImg" alt="" srcset="">
              <span>友情链接</span>
            </div>
            <div class="case_content">
              <ul>
                <li>
                  <div class="title">网站LOGO</div>
                  <div class="text"><img :src="logoImg" alt="" srcset=""></div>
                </li>
                <li>
                  <div class="title">网站名称</div>
                  <div class="text">XXXX</div>
                </li>
                <li>
                  <div class="title">网站描述</div>
                  <div class="text">XXXXXXXXXXXXX</div>
                </li>
                <li>
                  <div class="title">网站地址</div>
                  <div class="text">XXXXX.com</div>
                </li>
                <li>
                  <div class="title">QQ</div>
                  <div class="text">10086</div>
                </li>
                <li>
                  <div class="title">联系邮箱</div>
                  <div class="text">xxxx@qq.com</div>
                </li>
              </ul>
            </div>
          </div>
          <div class="form">
            <el-form :model="form" :label-width="0" class="el_form">
              <el-form-item>
                <el-input v-model="form.webLogo" size="large" class="input" placeholder="网站Logo" />
              </el-form-item>
              <el-form-item>
                <el-input v-model="form.webName" size="large" class="input" placeholder="网站名称" />
              </el-form-item>
              <el-form-item>
                <el-input v-model="form.webDescribe" size="large" class="input" placeholder="网站描述" />
              </el-form-item>
              <el-form-item>
                <el-input v-model="form.webAdd" size="large" class="input" placeholder="网站地址" />
              </el-form-item>
              <el-form-item>
                <el-input v-model="form.applyQq" size="large" class="input" placeholder="站长QQ" />
              </el-form-item>
              <el-form-item>
                <el-input v-model="form.webEmail" size="large" class="input" placeholder="网站邮箱" />
              </el-form-item>

            </el-form>
          </div>
        </el-space>

      </div>
      <div class="btn" @click="onSubmit(form)">提交申请</div>

    </el-dialog>
  </div>
</template>

<style scoped lang="scss">
.modal {
  :deep(.el-dialog) {
    width: 1039px;
    height: 757px;
    background: url('../../../assets/link_modal_bg.png') no-repeat;
    background-size: cover;
    box-shadow: none;
  }

  :deep(.el-dialog .el-dialog__header) {
    border-bottom: none;
  }

  .content {
    margin-top: 160px;
    display: flex;
    justify-content: center;


    .case {
      flex: 1;
      background: #FFFFFF;
      border-radius: 14px 14px 14px 14px;
      height: 330px;
      width: 411px;
      padding: 24px;

      .header {
        display: flex;
        align-items: center;

        img {
          width: 48.29px;
          height: 32.53px;
          margin-right: 10px;
        }

        span {
          font-family: Microsoft YaHei, Microsoft YaHei;
          font-weight: bold;
          font-size: 18px;
          color: #404750;
        }
      }

      .case_content {
        margin-top: 38px;

        ul {
          li {
            display: flex;
            justify-content: space-between;
            margin-bottom: 24px;

            .title {
              font-family: Microsoft YaHei, Microsoft YaHei;
              font-weight: 400;
              font-size: 18px;
              color: #999999;
            }

            .text {
              font-family: Microsoft YaHei, Microsoft YaHei;
              font-weight: 400;
              font-size: 18px;
              color: #333333;

              img {
                width: 195px;
                height: 50px;
                object-fit: contain;
              }
            }
          }
        }
      }
    }

    .form {
      flex: 1;

      .el_form {
        :deep(.el-form-item) {
          margin-bottom: 16px;

          .el-input__wrapper {
            border-radius: 15px;
          }

          .el-input__inner {
            font-size: 20px;
          }
        }
      }

      .input {
        width: 425px;
        height: 50px;
        border-radius: 10px;
      }
    }
  }

  .btn {
    width: 199px;
    height: 56px;
    background: linear-gradient(91deg, #FFAB2E 0%, #FF8B6B 100%);
    border-radius: 50px 50px 50px 50px;
    border: 2px solid #FFFFFF;
    font-family: Microsoft YaHei, Microsoft YaHei;
    font-weight: bold;
    font-size: 18px;
    color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px auto;
    cursor: pointer;
  }
}
</style>