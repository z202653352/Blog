<!--导航栏-->
<script setup>
import logo from '@/assets/logo.png'
import MobileMenu from '@/components/Hander/mobileMenu.vue'
import PcMenu from '@/components/Hander/pcMenu.vue'

</script>

<template>
  <div class="header">
    <div class="logo">
      <img :src="logo" alt="">
    </div>
    <div class="right">
      <!--PC显示的菜单-->
      <pc-menu class="pcMenu" />
      <!--手机显示的菜单-->
      <mobile-menu class="mobileMenu" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.header {

  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    img {
      width: 130px;
      height: 70px;
      object-fit: contain;
    }
  }

  .right {
    @media screen and (max-width: 720px) {
      .pcMenu {
        display: none;
      }

      .mobileMenu {}
    }

    @media screen and (min-width: 720px) {
      .pcMenu {}

      .mobileMenu {
        display: none;
      }
    }
  }
}
</style>