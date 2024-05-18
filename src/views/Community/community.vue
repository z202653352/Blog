<!--互动社区-->
<script setup>
import community_two_toned from '@/assets/community/community_two_toned.png'
import community_user_name from '@/assets/community/community_user_name.png'
import community_mail from '@/assets/community/community_mail.png'
import community_profession from '@/assets/community/community_profession.png'
import community_qq from '@/assets/community/community_qq.png'
import community_about_img from '@/assets/community/community_about_img.png'
import community_time from '@/assets/community/community_time.png'
import community_domain from '@/assets/community/community_domain.png'
import community_code from '@/assets/community/community_code.png'
import community_backstage from '@/assets/community/community_backstage.png'
import community_introduce from '@/assets/community/community_introduce.png'
import { ref } from 'vue'
import { addCommunityCommentHttp, gelCommunityCommentListHttp, } from '@/serves'
import Comment from '@/views/components/Article/comment.vue';

const infoRef = ref({
  username: '池鱼思故渊', //网名
  profession: '新时代农民工', //职业
  qq: '202653352', //联系QQ
  mail: '202653352@qq.com', //联系邮箱
  http: 'www.loong777.com', // 网站域名
  onlineTime: '2024-2-25' // 上线时间
})


</script>

<template>
  <div>
    <div class="banner">
      <div class="title">互动社区</div>
      <div class="bottom">
        <div>关于我</div>
        <div>关于博客</div>
      </div>
    </div>
    <div class="About">
      <div class="left">
        <div class="title">
          <img :src="community_two_toned" alt="">
          关于我
        </div>
        <div class="business-card">
          <div class="item">
            <div class="title">网名 <img :src="community_user_name" alt=""></div>
            <div class="text">{{ infoRef.username }}</div>
          </div>
          <div class="item">
            <div class="title">职业 <img :src="community_profession" alt=""></div>
            <div class="text">{{ infoRef.profession }}</div>
          </div>
          <div class="item">
            <div class="title">联系QQ <img :src="community_qq" alt=""></div>
            <div class="text">{{ infoRef.qq }}</div>
          </div>
          <div class="item">
            <div class="title">联系邮箱 <img :src="community_mail" alt=""></div>
            <div class="text">{{ infoRef.mail }}</div>
          </div>
        </div>
      </div>
      <img class="right-img" :src="community_about_img" alt="">
    </div>
    <div class="blog">
      <div class="blog-card">
        <div class="title">
          <img :src="community_two_toned" alt="">
          关于我
        </div>
        <div class="a1">
          <div class="a1-item">
            <img :src="community_domain" alt="">
            <div class="title">网站域名</div>
            <div class="text">{{ infoRef.http }}</div>
          </div>
          <div class="a1-item">
            <img :src="community_time" alt="">
            <div class="title">上线时间</div>
            <div class="text">{{ infoRef.onlineTime }}</div>
          </div>

        </div>
        <div class="a2">
          <div class="a2-item">
            <img :src="community_code" alt="">
            <div class="a2-item-right">
              <div class="title">静态页面</div>
              <div class="text">Vite4 + Vue3 + Element-Plus</div>
            </div>
          </div>
          <div class="a2-item">
            <img :src="community_backstage" alt="">
            <div class="a2-item-right">
              <div class="title">后台系统</div>
              <div class="text">RuiYi+Springboot+Mybatis+Mybatis-plus+Shiro+Thymeleaf+Redis</div>
            </div>
          </div>
          <div class="a2-item">
            <img :src="community_introduce" alt="">
            <div class="a2-item-right">
              <div class="title">网站介绍</div>
              <div class="text">本站搭建主要目的于IT技术交流，日常生活记录。
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    <Comment :listHttp="gelCommunityCommentListHttp" :addHttp="addCommunityCommentHttp" />
  </div>
</template>

<style scoped lang="scss">
.banner {
  width: 100%;
  height: 663px;
  background: url("../../assets/community/community_bg.png") no-repeat;
  background-size: cover;
  position: relative;

  .title {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-family: Microsoft YaHei, Microsoft YaHei;
    font-weight: bold;
    font-size: 56px;
    color: #FFFFFF;
    line-height: 66px;
    text-align: left;
    font-style: normal;
    text-transform: none;
  }

  .bottom {
    position: absolute;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    height: 107px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%);
    border-radius: 0px 0px 0px 0px;

    div {
      font-family: Microsoft YaHei, Microsoft YaHei;
      font-weight: bold;
      font-size: 20px;
      color: #FFFFFF;
      line-height: 24px;
      text-align: left;
      font-style: normal;
      text-transform: none;
    }
  }
}

.About {
  margin: 100px 0;
  display: flex;
  justify-content: space-between;

  .left {
    width: 100%;
    margin-right: 40px;

    .title {

      display: flex;
      align-items: center;
      font-family: Microsoft YaHei, Microsoft YaHei;
      font-weight: bold;
      font-size: 32px;
      color: #404750;
      line-height: 38px;
      text-align: center;
      font-style: normal;
      text-transform: none;

      img {

        width: 48.29px;
        height: 32.53px;
        margin-right: 10px;
      }
    }

    .business-card {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      grid-gap: 40px 40px;
      margin-top: 45px;

      .item {
        padding: 32px;
        background: linear-gradient(180deg, #E7F4FF 0%, rgba(255, 255, 255, 0) 100%);
        border-radius: 14px 14px 14px 14px;
        border: 1px solid #EEEEEE;

        .title {
          display: flex;
          justify-content: space-between;
          font-family: Microsoft YaHei, Microsoft YaHei;
          font-weight: bold;
          font-size: 24px;
          color: #666666;
          line-height: 28px;
          text-align: center;
          font-style: normal;
          text-transform: none;

          img {
            width: 56px;
            height: 56px;
          }
        }

        .text {
          font-family: Microsoft YaHei, Microsoft YaHei;
          font-weight: 400;
          font-size: 24px;
          color: #333333;
          line-height: 28px;
          text-align: left;
          font-style: normal;
          text-transform: none;
          margin-top: 80px;
        }
      }
    }
  }

  .right-img {
    width: 550px;
    height: 739px;
  }
}

.blog {
  position: relative;
  width: 100%;
  height: 770px;
  background: url("../../assets/community/community_blog.png") no-repeat;
  background-size: cover;
  margin-bottom: 100px;

  .blog-card {
    position: absolute;
    right: 45px;
    top: 45px;
    bottom: 45px;
    width: 50%;
    background: #FFFFFF;
    border-radius: 14px 14px 14px 14px;
    padding: 32px;

    .title {

      display: flex;
      align-items: center;
      font-family: Microsoft YaHei, Microsoft YaHei;
      font-weight: bold;
      font-size: 32px;
      color: #404750;
      line-height: 38px;
      text-align: center;
      font-style: normal;
      text-transform: none;

      img {

        width: 48.29px;
        height: 32.53px;
        margin-right: 10px;
      }
    }

    .a1,
    .a2 {
      img {
        width: 56px;
        height: 56px;
      }

      .title {
        font-family: Microsoft YaHei, Microsoft YaHei;
        font-weight: bold;
        font-size: 24px;
        color: #333333;
        line-height: 28px;
        text-align: center;
        font-style: normal;
        text-transform: none;
      }

      .text {
        font-family: Microsoft YaHei, Microsoft YaHei;
        font-weight: 400;
        font-size: 24px;
        color: #999999;
        line-height: 28px;
        text-align: left;
        font-style: normal;
        text-transform: none;
        line-break: anywhere;
      }
    }

    .a1 {
      display: flex;
      justify-content: space-around;
      margin-top: 50px;

      .a1-item {
        display: flex;
        flex-direction: column;
        align-items: center;


        .title {

          margin: 10px 0;
        }


      }
    }

    .a2 {

      .a2-item {
        margin-top: 45px;
        display: flex;

        .a2-item-right {
          margin-left: 20px;

          .title {
            margin-bottom: 5px;
          }

        }
      }
    }

  }

}
</style>