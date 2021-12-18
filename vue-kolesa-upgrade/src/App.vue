<template>
    <div class="page">
      <header class="header page__header">
        <img src="./assets/images/kolesa-vector.svg" alt="Логотип Kolesa Group" class="header__img">
        <search-bar></search-bar>
        <user-block  :userData="user"></user-block>
      </header>
      <main class="main page__main">
        <nav-menu></nav-menu>
        <div class="main-container main__main-container">
          <router-view  :userData="user"></router-view>
        </div>
      </main>
      <footer-comp></footer-comp>
    </div>
</template>

<script>

import NavMenu from '@/layouts/components/NavMenu.vue';
import FooterComp from '@/layouts/components/Footer.vue';
import SearchBar from '@/layouts/components/SearchBar.vue';
import UserBlock from '@/layouts/components/UserBlock.vue';

export default {
  name: 'App',
  components: {
    NavMenu,
    FooterComp,
    SearchBar,
    UserBlock,
  },
  data() {
    return {
      user: {},
    };
  },
};
</script>

<style lang="scss">
</style>
