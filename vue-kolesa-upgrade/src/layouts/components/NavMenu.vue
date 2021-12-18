<template>
  <nav class="menu">
    <ul class="menu-list menu__menu-list">
      <li class="menu-list__menu-item" v-for="item in menu" :key="item.id">
        <router-link :to="item.link"
        class="menu-list__menu-link"
        :exact="item.isExact"
        active-class="menu-list__menu-link_selected">{{ item.title }}
        </router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavMenu',
  data() {
    return {
      menu: [
        {
          id: 1, title: 'Оргсхема', link: '/', isExact: true,
        },
        {
          id: 2, title: 'Kolesa Team', link: '/about', isExact: true,
        },
        {
          id: 3, title: 'Kolesa Shop', link: '/shop', isExact: false,
        },
      ],
    };
  },
};
</script>
