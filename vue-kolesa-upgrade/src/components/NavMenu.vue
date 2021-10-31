<template>
  <nav class="menu">
    <ul class="menu-list menu__menu-list">
      <li class="menu-list__menu-item" v-for="items in menu" :key="items.id"><a href="#"
      class="menu-list__menu-link">{{ items.title }}</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavMenu',
  data() {
    return {
      menu: [
        { id: 1, title: 'Оргсхема' },
        { id: 2, title: 'Kolesa Team' },
        { id: 3, title: 'Kolesa Shop' },
        { id: 4, title: 'Картина компании' },
        { id: 5, title: 'Новости' },
        { id: 6, title: 'Education' },
        { id: 7, title: 'Guidelines' },
        { id: 8, title: 'Библиотека' },
        { id: 9, title: 'FAQ' },
      ],
    };
  },
};
// class="menu-list__menu-link menu-list__menu-link_selected"
</script>
