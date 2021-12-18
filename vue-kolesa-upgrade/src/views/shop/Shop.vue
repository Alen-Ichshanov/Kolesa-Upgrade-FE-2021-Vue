<template>
  <div>
    <div class="banner-container">
      <img src="@/assets/images/banner.png" alt="Баннер с акциями" />
    </div>
    <points-buttons></points-buttons>
    <tabs-filter @switchCategory="switchCategory"></tabs-filter>
    <div class="shop-container main-container__shop-container">
      <product-cards :dataProduct="products" @sendModalData="openCard">
      </product-cards>
    </div>
    <modal :data="modalData" :isOpen="isShowModal" @close="closeModal"></modal>
  </div>
</template>

<script>
import Modal from '@/views/shop/components/Modal.vue';
import PointsButtons from '@/views/shop/components/PointsButtons.vue';
import TabsFilter from '@/views/shop/components/TabsFilter.vue';
import ProductCards from '@/views/shop/components/ProductCards.vue';

export default {
  name: 'Shop',
  props: {
    userData: Object,
  },
  components: {
    Modal,
    PointsButtons,
    TabsFilter,
    ProductCards,
  },
  data() {
    return {
      isShowModal: false,
      modalData: {},
      category: 1,
      user: {},
      clothes: [],
      accessories: [],
    };
  },
  mounted() {
    this.updateClothesData();
    this.updateAccessoriesData();
  },
  computed: {
    clothesSorted() {
      return this.clothes.slice(0).sort(this.compareValues('isNew', 'desc'));
    },
    accessoriesSorted() {
      return this.accessories
        .slice(0)
        .sort(this.compareValues('isNew', 'desc'));
    },
    productsAll() {
      return this.clothes
        .concat(this.accessories)
        .sort(this.compareValues('isNew', 'desc'));
    },
    products() {
      if (this.category === 1) {
        return this.productsAll;
      }
      if (this.category === 2) {
        return this.clothesSorted;
      }
      if (this.category === 3) {
        return this.accessoriesSorted;
      }
      return this.productsAll;
    },
  },
  methods: {
    switchCategory(catId) {
      this.category = catId;
    },
    openCard(data) {
      this.modalData = data;
      this.openModal();
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

        return order === 'desc' ? comparison * -1 : comparison;
      };
    },
    updateClothesData() {
      this.$store
        .dispatch('getClothesData')
        .then((response) => {
          this.clothes = response.data;
        })
        .catch(() => {
          // eslint-disable-next-line
          alert("Произошла ошибка при получении данных");
        });
    },
    updateAccessoriesData() {
      this.$store
        .dispatch('getAccessoriesData')
        .then((response) => {
          this.accessories = response.data;
        })
        .catch(() => {
          // eslint-disable-next-line
          alert("Произошла ошибка при получении данных");
        });
    },
  },
};
</script>
