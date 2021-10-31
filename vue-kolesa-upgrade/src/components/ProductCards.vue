<template>
                <div class="product-container">
                    <div v-for="product in dataProduct" :key="product.id" class="product-card-wrap
                  product-container__product-card-wrap"  @click="openCard(product)">
                     <div class="product-card product-card-wrap__product-card hover-card"
                     :data-index="product.id">
                      <img :src="product.mainImage" alt="Фото товара"
                      class="product-card__photo" width="330" height="330">
                          <span class="product-card__new-label" v-if="product.isNew">NEW</span>
                      <div class="product-card__description">
                          <div class="product-card__price">{{ product.price }} баллов</div>
                          <h4 class="product-card__title">{{ product.title }}</h4>
                          <p class="product-card__size">{{ product.size }}</p>
                           <button class="button product-card__button"
                           @click="openCard(product)">Заказать</button>
                      </div>
                  </div>
                  </div>
                </div>
</template>

<script>
export default {
  name: 'productCard',
  props: {
    dataProduct: {
      type: Array,
      required: true,
    },
  },
  methods: {
    findImagePath(item) {
      // eslint-disable-next-line global-require,import/no-dynamic-require,import/extensions
      return require(`../assets/images/${item}.png`);
    },
    openCard(product) {
      this.$emit('sendModalData', product);
    },
  },
};
</script>
