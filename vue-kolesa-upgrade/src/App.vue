<template>
    <div class="page">
      <header class="header page__header">
        <img src="./assets/images/kolesa-vector.svg" alt="Логотип Kolesa Group" class="header__img">
        <search-bar></search-bar>
        <user-block @userChange="setUser"></user-block>
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
                <product-card :dataProduct="products" @sendModalData="openCard">
                </product-card>
            </div>
        </div>
        <div class="js__modal-container">
          <modal :data="modalData" :isOpen="isShowModal" @close="closeModal"
          @order="setScore"></modal>
        </div>
      </main>
      <footer-comp></footer-comp>
    </div>
</template>

<script>
import axios from '@/axios';

import Modal from './components/Modal.vue';
import NavMenu from './components/NavMenu.vue';
import pointsButtons from './components/pointsButtons.vue';
import tabsFilter from './components/tabsFilter.vue';
import footerComp from './components/footer.vue';
import searchBar from './components/searchBar.vue';
import userBlock from './components/userBlock.vue';
import productCard from './components/productCard.vue';

export default {
  name: 'App',
  components: {
    Modal,
    NavMenu,
    pointsButtons,
    tabsFilter,
    footerComp,
    searchBar,
    userBlock,
    productCard,
  },
  data() {
    return {
      isShowModal: false,
      modalData: {},
      clothes: [
        {
          id: 1,
          image: 'tshirt-img',
          isNew: true,
          title: 'Футболка "Эволюционируй или сдохни"',
          price: 220,
          size: 'Размеры S/M/L',
          hasSize: true,
          hasColor: true,
          details: 'Брендированная футболка от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
        },
        {
          id: 2,
          image: 'tshirt-img',
          isNew: false,
          title: 'Футболка "Эволюционируй или сдохни" Limited',
          price: 220,
          size: 'Оверсайз',
          hasColor: true,
          details: 'Брендированная футболка от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%. Переиздание',
        },
        {
          id: 3,
          image: 'sweatshirt-img',
          isNew: false,
          title: 'Толстовка "Kolesa Team post-COVID"',
          price: 290,
          size: 'Размеры S/M/L',
          hasColor: true,
          details: 'Брендированная толстовка от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%.',
        },
        {
          id: 4,
          image: 'sweatshirt-img',
          isNew: false,
          title: 'Толстовка "Kolesa Team pre-COVID"',
          price: 280,
          size: 'Размеры S/M/L',
          hasColor: true,
          details: 'Брендированная толстовка от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%.',
        },
        {
          id: 5,
          image: 'hoodie-img',
          isNew: false,
          title: 'Худи "Kolesa Minimal"',
          price: 300,
          size: 'Размеры S/M/L',
          hasColor: true,
          details: 'Минималистичная худи от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%. Минимализм во всей красе',
        },
        {
          id: 6,
          image: 'hoodie-img',
          isNew: true,
          title: 'Худи "Kolesa Minimal vol.2"',
          price: 320,
          size: 'Размеры S/M/L',
          hasColor: true,
          details: 'Минималистичная худи от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%. Переиздание.',
        },
      ],

      accessories: [
        {
          id: 7,
          image: 'bottle-img',
          isNew: false,
          title: 'Бутылка прозрачная "Kolesa Water"',
          price: 150,
          size: 'Объем 0.5/0.7/1 л.',
          hasColor: false,
          details: 'Брендированная бутылка от Qazaq Republic из прозрачного пластика.',
        },
        {
          id: 8,
          image: 'bottle-img',
          isNew: true,
          title: 'Бутылка матовая "Kolesa Water"',
          price: 160,
          size: 'Объем 0.5/0.7/1 л.',
          hasColor: false,
          details: 'Брендированная бутылка от Qazaq Republic из матового пластика.',
        },
        {
          id: 9,
          image: 'cap-img',
          isNew: true,
          title: 'Бейсболка "Kolesa Simple vol.2"',
          price: 200,
          size: 'Размеры S/M/L',
          hasColor: true,
          details: 'Брендированная бейсболка от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%. Переиздание.',
        },
        {
          id: 10,
          image: 'cap-img',
          isNew: false,
          title: 'Бейсболка "Kolesa Simple"',
          price: 200,
          size: 'Размеры S/M/L',
          hasColor: true,
          details: 'Брендированная бейсболка от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%.',
        },
        {
          id: 11,
          image: 'notebook-img',
          isNew: false,
          title: 'Блокнот "Kolesa Thoughts Out"',
          price: 220,
          size: 'Объем 100 стр.',
          hasColor: false,
          details: 'Брендированный блокнот от Qazaq Republic на 100 страниц.',
        },
        {
          id: 12,
          image: 'notebook-img',
          isNew: false,
          title: 'Блокнот "Kolesa Thoughts Out"',
          price: 180,
          size: 'Объем 50 стр.',
          hasColor: false,
          details: 'Брендированный блокнот от Qazaq Republic на 50 страниц.',
        },
      ],
      category: 1,
      user: {},
    };
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
  mounted() {
    axios.get('https://api.json-generator.com/templates/-_RLsEGjof6i/data')
      .then((response) => {
        this.clothes = response.data;
      });
    axios.get('https://api.json-generator.com/templates/q3OPxRyEcPvP/data')
      .then((response) => {
        this.accessories = response.data;
      });
  },
  methods: {
    switchCategory(catId) {
      this.category = catId;
    },
    openCard(data) {
      console.log(data);
      this.openModal();
      this.modalData = data;
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
      if (this.user.score > price || this.user.score === price) {
        this.user.score -= price;
      } else {
        // eslint-disable-next-line no-alert
        alert('Вам не хватает баллов для покупки!');
      }
    },
    setUser(userData) {
      this.user.name = userData.name;
      this.user.score = userData.score;
      console.log('user updated');
    },
  },
};
</script>

<style lang="scss">
</style>
