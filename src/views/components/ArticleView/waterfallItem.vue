<!--瀑布流文章-->
<script setup>
import view_img from '@/assets/view.png'
import commentaries_img from '@/assets/commentaries.png'
</script>

<template>
  <div class="waterfall-item">
    <img class="img" src="https://www.logosc.cn/uploads/resources/2024/01/09/1704783215_thumb.png" alt="">
    <div class="main">
      <div class="left">
        <span class="month">12</span>
        <div class="line"></div>
        <div class="day">18</div>
      </div>
      <div class="right">
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
  </div>
</template>

<style scoped lang="scss">
.waterfall-item {
  width: 100%;

  .img {
    width:100%;
    border-radius: 20px 20px 0px 0px;
  }

  .main {
    width: 100%;
    background: #F9FAFB;
    border-radius: 0 0 20px 20px;
    padding: 24px;
    display: flex;
    box-sizing: border-box;

    .left {
      text-align: center;
      margin-right: 16px;

      .month {
        font-family: Arial, Arial;
        font-weight: bold;
        font-size: 16px;
        color: #212B36;
        line-height: 26px;
        text-align: center;
        font-style: normal;
        text-transform: none;
      }

      .day {
        font-family: Arial, Arial;
        font-weight: bold;
        font-size: 40px;
        color: #212B36;
        line-height: 54px;
        text-align: center;
        font-style: normal;
        text-transform: none;
      }

      .line {
        width: 62px;
        height: 1px;
        background: rgba(153, 153, 153, 0.24);
        border-radius: 0px 0px 0px 0px;
        margin: 5px 0;
      }
    }

    .right {
      width: 100%;
      .title {
        font-family: Microsoft YaHei, Microsoft YaHei;
        font-weight: bold;
        font-size: 20px;
        color: $text-color;
        line-height: 30px;
        text-align: justify;
        font-style: normal;
        text-transform: none;
      }

      .label {
        display: flex;
        align-items: center;
        margin-bottom: 16px;

        .type {
          padding: 1px 6px;
          border-radius: 6px 6px 6px 6px;
          border: 2px solid #FFAB2E;
          font-family: Microsoft YaHei, Microsoft YaHei;
          font-weight: 400;
          font-size: 14px;
          color: #FFAB2E;
          line-height: 24px;
          font-style: normal;
          text-transform: none;
        }

        .time {
          margin-left: 16px;
          font-family: Microsoft YaHei, Microsoft YaHei;
          font-weight: 400;
          font-size: 14px;
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
        font-size: 16px;
        color: #666666;
        line-height: 26px;
        text-align: justify;
        font-style: normal;
        text-transform: none;
        margin-bottom: 46px;
      }

      .user {
        width: 100%;
        display: flex;
        align-items: center;

        justify-content: space-between;

        .admin {
          display: flex;
          align-items: center;

          .avatar {
            width: 32px;
            height: 32px;
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
    padding: 0 10px;
    box-sizing: border-box;
  }
}
</style>