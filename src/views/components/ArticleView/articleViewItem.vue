<!--首页置顶文章-->
<script setup>
import view_img from '@/assets/view.png'
import commentaries_img from '@/assets/commentaries.png'
</script>

<template>
  <div class="article-view-item">
    <div class="left">
      <img src="https://www.logosc.cn/uploads/resources/2024/01/09/1704783215_thumb.png" alt="">
    </div>
    <div class="right">
      <div class="top">置顶</div>
      <div class="title">川流SaaS – Coupang免费轻量ERP上线，Coupang卖家可以免费用啦！</div>
      <div class="label">
        <div class="type">实验探索</div>
        <div class="time">2024-01-03 03:23</div>
      </div>
      <div class="text">Coupang是韩国第一大跨境电商平台，目前入驻的中国卖家很少，因此，竞争不激烈，相对利润也比较高！同时，由于韩国很近，
        并不需要像亚马逊一样提前把产品备货到韩国。而是出单之后从中国发货，两天就能到达韩国了！这就极大的降低了中国卖家的风险！
      </div>
      <div class="user">
        <div class="admin">
          <img class="avatar" src="https://www.logosc.cn/uploads/resources/2024/01/09/1704783215_thumb.png" alt="">
          <span class="name">Andy Liu</span>
        </div>
        <div class="view">
          <img :src="view_img" alt=""><span>1W+</span>
          <img :src="commentaries_img" alt=""><span>1542</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.article-view-item {
  width: 100%;
  display: flex;
  margin-top: 80px;
  justify-content: space-between;

  .left {
    width: 39%;
    height: 503px;

    img {
      border-radius: 20px 20px 20px 20px;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .right {
    width: 59%;
    position: relative;

    .top {
      font-family: Microsoft YaHei, Microsoft YaHei;
      font-weight: 400;
      font-size: 18px;
      color: #999999;
      text-align: justify;
      font-style: normal;
      text-transform: none;
      margin-bottom: 16px;
    }

    .title {
      font-family: Microsoft YaHei, Microsoft YaHei;
      font-weight: bold;
      font-size: 32px;
      color: $text-color;
      line-height: 48px;
      text-align: justify;
      font-style: normal;
      text-transform: none;
      margin-bottom: 16px;
    }

    .label {
      display: flex;
      align-items: center;
      margin-bottom: 16px;

      .type {
        padding: 3px 8px;
        border-radius: 6px 6px 6px 6px;
        border: 2px solid #FFAB2E;
        font-family: Microsoft YaHei, Microsoft YaHei;
        font-weight: 400;
        font-size: 16px;
        color: #FFAB2E;
        line-height: 24px;
        font-style: normal;
        text-transform: none;
      }

      .time {
        margin-left: 16px;
        font-family: Microsoft YaHei, Microsoft YaHei;
        font-weight: 400;
        font-size: 16px;
        color: #999999;
        line-height: 24px;
        text-align: left;
        font-style: normal;
        text-transform: none;
      }
    }

    .text {
      font-family: Microsoft YaHei, Microsoft YaHei;
      font-weight: 400;
      font-size: 20px;
      color: #666666;
      line-height: 30px;
      font-style: normal;
      text-transform: none;
    }

    .user {
      width: 100%;
      display: flex;
      align-items: center;
      position: absolute;
      bottom: 0;
      justify-content: space-between;

      .admin {
        display: flex;
        align-items: center;

        .avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
        }

        .name {
          margin-left: 10px;
        }
      }

      .view {
        display: flex;
        align-items: center;
        justify-content: space-between;

        img {
          width: 20px;
          height: 20px;

        }

        span {
          margin-right: 10px;
        }
      }


    }
  }


}

@media screen and (max-width: 720px) {
  .article-view-item {
    display: inline-block;
    padding: 10px;
    box-sizing: border-box;

    .left {
      width: 100%;
      height: 203px;
    }

    .right {
      width: 100%;

      .top {
        display: none;
      }

      .title {

        font-size: 20px;
        color: $text-color;

        margin-bottom: 8px;
      }

      .label {
        display: flex;
        align-items: center;
        margin-bottom: 8px;

        .type {
          padding: 3px 8px;
          border-radius: 6px 6px 6px 6px;
          border: 2px solid #FFAB2E;

          font-size: 12px;
          color: #FFAB2E;

        }

        .time {
          margin-left: 16px;

          font-size: 12px;

        }
      }

      .text {

        font-size: 12px;
        padding-bottom: 60px;
      }

      .user {

        .admin {


          .avatar {
            width: 40px;
            height: 40px;
            border-radius: 50%;
          }
        }

        .view {
          display: flex;
          align-items: center;
          justify-content: space-between;


        }


      }
    }
  }
}
</style>