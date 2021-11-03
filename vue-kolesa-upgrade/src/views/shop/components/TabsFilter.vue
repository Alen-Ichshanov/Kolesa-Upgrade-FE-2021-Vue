<template>
                  <div class="tabs-container shop-container__tabs-container">
                    <label for="tab1" class="label-container tabs-container__label-container"
                    >
                        <input class="label-container__input" type="radio"
                        id="tab1" name="tab" value="1" checked v-model="picked">
                        <span class="label-container__back">Все товары</span>
                    </label>
                    <label for="tab2" class="label-container tabs-container__label-container"
                   >
                        <input class="label-container__input" type="radio"
                        id="tab2" name="tab" value="2" v-model="picked">
                        <span class="label-container__back">Одежда</span>
                    </label>
                    <label for="tab3" class="label-container tabs-container__label-container"
                   >
                        <input class="label-container__input" type="radio"
                        id="tab3" name="tab" value="3" v-model="picked">
                        <span class="label-container__back">Аксессуары</span>
                    </label>
                </div>
</template>

<script>
export default {
  name: 'tabsFilter',
  data() {
    return {
      picked: 1,
    };
  },
  watch: {
    picked() {
      this.$emit('switchCategory', Number(this.picked));
    },
  },
  methods: {
  },
};
</script>
