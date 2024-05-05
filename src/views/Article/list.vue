<!--文章列表页面即首页-->
<script setup>
import { ref } from 'vue'
import ArticleBanner from '@/views/components/Article/articleBanner.vue'
import ArticleViewItem from '@/views/components/ArticleView/articleViewItem.vue'
import ArticleMain from '@/views/components/Article/articleMain.vue'


</script>

<template>
  <main>
    <article-banner />
    <article-view-item />
    <!--瀑布流-->
    <article-main />
  </main>
</template>

<style scoped></style>