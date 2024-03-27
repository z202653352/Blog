<!--列表头部-->
<script setup>

</script>

<template>
  <div class="article-banner">
    <div class="title">最新 <span class="symbol">“</span><span class="blog">博客</span><span class="symbol">”</span>即时获取
    </div>
    <div class="subheading">实时掌握各行业最新资讯！</div>

  </div>
</template>

<style scoped lang="scss">
.article-banner {
  text-align: center;

  .title {
    font-size: 56px;
    color: $text-color;
    font-weight: bold;
    font-style: normal;
    text-transform: none;

    .symbol {
      font-family: Pontano Sans, Pontano Sans;
      font-weight: 400;
      font-size: 104px;
      color: rgba(2, 138, 241, 0.4);
      line-height: 130px;
      text-align: left;
      font-style: normal;
      text-transform: none;
    }

    .blog {
      font-family: Microsoft YaHei, Microsoft YaHei;
      font-weight: bold;
      font-size: 72px;
      color: #028AF1;
      line-height: 130px;
      text-align: left;
      font-style: normal;
      text-transform: none;
    }
  }

  .subheading {
    font-family: Microsoft YaHei, Microsoft YaHei;
    font-weight: 400;
    font-size: 24px;
    color: #666666;
    text-align: center;
    font-style: normal;
    text-transform: none;
  }

  @media screen and (max-width: 720px) {
    margin-top: 0px;

    .title {
      font-size: 20px;

      .symbol {
        font-size: 44px;
      }

      .blog {
        font-size: 28px;
      }
    }

    .subheading {
      font-size: 12px;
    }
  }
}
</style>