<template>
  <div class="search-container header__search-container">
            <form action="/" method="GET" class="form">
                <button type="button" class="form__button"></button>
                <input type="search" placeholder="Поиск" class="search-field form__search-field"
                v-model="search">
            </form>
        </div>
</template>

<script>
export default {
  name: 'searchBar',
  data() {
    return {
      search: '',
    };
  },
};
</script>
