<!--时间线-->
<script setup>

</script>

<template>
  <ul class="time-line">
    <li class="item item-right">
      <div class="line"></div>
      <div class="time">2024-01-22</div>
      <div class="text">
        一、修复登录提示显示错误 <br /> 二、根据视频类型自动检测播放 <br />三、新增文章推送选项
      </div>
    </li>
    <li class="item item-left">
      <div class="line"></div>
      <div class="time">2024-01-22</div>
      <div class="text">
        一、修复登录提示显示错误 <br /> 二、根据视频类型自动检测播放 <br />三、新增文章推送选项
      </div>
    </li>

  </ul>
</template>

<style scoped lang="scss">
.time-line {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .item {
    width: 40%;
    height: 100%;
    display: flex;
    border-top: 1px solid #028AF1;
    box-sizing: content-box;
    border-collapse: collapse;
    position: relative;

    .line {
      display: flex;
      width: 2px;
      height: inherit;
      background: #028AF1;
      position: absolute;

      &:before {
        content: '';
        position: absolute;
        left: -4px;
        top: -6px;
        width: 10px;
        height: 10px;
        background: #028AF1;
        border-radius: 50%;
        z-index: 20;
      }

      &:after {
        content: '';
        position: absolute;
        left: -7px;
        top: -9px;
        width: 16px;
        height: 16px;
        background: #CBE9FF;
        border-radius: 50%;
      }
    }

    .time {
      position: absolute;

      top: -40px;
      font-family: Microsoft YaHei, Microsoft YaHei;
      font-weight: bold;
      font-size: 18px;
      color: #2978E1;
      line-height: 21px;
      text-align: left;
      font-style: normal;
      text-transform: none;
    }

    .text {
      padding: 20px 0 100px 0;
      font-family: Microsoft YaHei, Microsoft YaHei;
      font-weight: 400;
      font-size: 16px;
      color: #666666;
      line-height: 24px;
      text-align: left;
      font-style: normal;
      text-transform: none;
    }
  }

  .item-right {
    justify-content: flex-end;
    transform: translateX(50%);

    .time{
      right: 0;
    }
    .line {
      left: 0;
    }
  }

  .item-left {
    transform: translateX(-50%);
    .time{
      left: 0;
    }
    .line {
      right: -2px;
    }
  }

  @media screen and (max-width: 720px) {
      .item {
        .text {
          font-size: 14px;
        }

      }
    .item-right{
      .text{
        padding-left: 20px;
      }
    }
    .item-left{
      .text{
        padding-right: 20px;
      }
    }
  }
}
</style>