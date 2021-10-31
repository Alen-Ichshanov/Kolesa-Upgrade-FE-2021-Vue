<template>
  <div v-if="isOpen" class="modal main-container__modal">
    <div class="modal__modal-overlay" @click="closeModal"></div>
    <div class="modal__modal-content">
      <button class="modal__close" @click="closeModal"></button>
      <div class="modal__content-container">
        <div class="modal__image-container">
          <div class="modal__main-img">
            <img :src="data.mainImage" alt="Фото товара" width="330" height="330">
          </div>
          <div class="modal__preview-container">
            <img src="../assets/images/preview-1.png" class="modal__preview-img" alt="Фото товара">
            <img src="../assets/images/preview-2.png"
            class="modal__preview-img modal__preview-img-active"
            alt="Фото товара">
            <img src="../assets/images/preview-3.png" class="modal__preview-img"
            alt="Фото товара">
          </div>
        </div>
        <div class="modal__details-container">
          <div class="modal__required-container">
            <div class="modal__info-container">
              <h2 class="modal__title">{{ data.title }}</h2>
              <span class="modal__price">{{ data.price }} баллов</span>
              <button class="button modal__button"
              @click="order">Заказать</button>
            </div>
            <div class="modal__balance">
              <div class="modal__balance-info">
                <span class="modal__your-txt">Твой баланс:</span><br>
                <span class="modal__balance-num">3945 баллов</span>
              </div>
              <div class="balance-icon">
                <img src="@/assets/images/balance-icon.png" alt="">
              </div>
            </div>
          </div>
          <div class="modal__addons-container">
            <div class="color-details modal__addon">
              <span class="txt">Цвета:</span>
              <div class="modal__radio-container">
                <label :for="color.id" class="modal__label-container
                label-container" v-for="color in data.colors" :key="color.id">{{ color.label }}
                  <input type="radio" :id="color.id"
                  name="color" :value="color"
                  class="label-container__input" checked>
                  <span class="label-container__checkmark
                  label-container__checkmark-blue"></span>
                  <span class="label-container__back"></span>
                </label>
              </div>
            </div>
            <div class="size-details modal__addon">
              <span class="txt">Размер:</span>
              <div class="modal__radio-container">
                <label :for="size.id" class="modal__label-container
                label-container modal__label-container-size"
                v-for="size in data.sizes" :key="size.id">{{ size }}
                  <input type="radio" :id="size.id" name="size"
                  :value="size" class="label-container__input" checked>
                  <span class="label-container__checkmark
                  label-container__checkmark-size"></span>
                  <span class="label-container__back"></span>
                </label>
              </div>
            </div>
            <div class="description modal__addon" >
              <h2 class="txt bold-txt">Детали:</h2>
              <p class="txt">{{ data.description }}</p>
            </div>
            <div class="hints addon">
              <h2 class="txt bold-txt">Как выбрать размер:</h2>
              <p class="txt">Написать дяде Рику для уточнения.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    isOpen: {
      type: Boolean,
      required: true,
      default: false,
    },
    data: {
      type: Object,
      required: true,
    },
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
    order() {
      this.$emit('order', this.data.price);
    },
  },
};
</script>
