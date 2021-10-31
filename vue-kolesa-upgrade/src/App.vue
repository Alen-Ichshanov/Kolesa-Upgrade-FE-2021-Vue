<template>
    <div class="page">
      <header class="header page__header">
        <img src="./assets/images/kolesa-vector.svg" alt="Логотип Kolesa Group" class="header__img">
        <search-bar></search-bar>
        <user-block @userChange="setUser" :userData="user"></user-block>
      </header>
      <main class="main page__main">
        <nav-menu></nav-menu>
        <div class="main-container main__main-container">
            <div class="banner-container">
                <img src="./assets/images/banner.png" alt="Баннер с акциями">
            </div>
            <points-buttons></points-buttons>
            <tabs-filter @switchCategory="switchCategory"></tabs-filter>
            <div class="shop-container main-container__shop-container">
                <product-cards :dataProduct="products" @sendModalData="openCard">
                </product-cards>
            </div>
        </div>
        <modal :data="modalData" :isOpen="isShowModal" @close="closeModal"
        @order="setScore"></modal>
      </main>
      <footer-comp></footer-comp>
    </div>
</template>

<script>
import axios from '@/axios';

import Modal from './components/Modal.vue';
import NavMenu from './components/NavMenu.vue';
import PointsButtons from './components/PointsButtons.vue';
import TabsFilter from './components/TabsFilter.vue';
import FooterComp from './components/Footer.vue';
import SearchBar from './components/SearchBar.vue';
import UserBlock from './components/UserBlock.vue';
import ProductCards from './components/ProductCards.vue';

export default {
  name: 'App',
  components: {
    Modal,
    NavMenu,
    PointsButtons,
    TabsFilter,
    FooterComp,
    SearchBar,
    UserBlock,
    ProductCards,
  },
  data() {
    return {
      isShowModal: false,
      modalData: {},
      category: 1,
      clothes: [],
      accessories: [],
      user: {},
    };
  },
  mounted() {
    axios.get('-_RLsEGjof6i/data')
      .then((response) => {
        this.clothes = response.data;
      })
      .catch((response) => {
        // eslint-disable-next-line
        alert(response);
      });
    axios.get('q3OPxRyEcPvP/data')
      .then((response) => {
        this.accessories = response.data;
      })
      .catch((response) => {
        // eslint-disable-next-line
        alert(response);
      });
  },
  computed: {
    clothesSorted() {
      return this.clothes.slice(0).sort(this.compareValues('isNew', 'desc'));
    },
    accessoriesSorted() {
      return this.accessories.slice(0).sort(this.compareValues('isNew', 'desc'));
    },
    productsAll() {
      return this.clothes.concat(this.accessories).sort(this.compareValues('isNew', 'desc'));
    },
    products() {
      if (this.category === 1) {
        return this.productsAll;
      } if (this.category === 2) {
        return this.clothesSorted;
      } if (this.category === 3) {
        return this.accessoriesSorted;
      } return this.productsAll;
    },
  },
  methods: {
    switchCategory(catId) {
      this.category = catId;
    },
    openCard(data) {
      this.modalData = data;
      this.openModal();
      console.log(this.modalData);
    },
    openModal() {
      this.isShowModal = true;
    },
    closeModal() {
      this.isShowModal = false;
    },
    compareValues(key, order = 'asc') {
      return function compareInside(a, b) {
        const key1 = a[key];
        const key2 = b[key];

        let comparison = 0;

        if (key1 > key2) {
          comparison = 1;
        } else if (key1 < key2) {
          comparison = -1;
        }

        return (
          (order === 'desc') ? (comparison * -1) : comparison
        );
      };
    },
    setScore(price) {
      console.log(price);
      if (this.user.score >= price) {
        this.user.score -= price;
      } else {
        // eslint-disable-next-line no-alert
        alert('Вам не хватает баллов для покупки!');
      }
    },
    setUser(userData) {
      this.user = userData;
    },
  },
};
</script>

<style lang="scss">
</style>
