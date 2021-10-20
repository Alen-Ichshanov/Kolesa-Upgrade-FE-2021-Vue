<template>
    <div class="page">
      <header class="header page__header">
        <img src="./assets/images/kolesa-vector.svg" alt="Логотип Kolesa Group" class="header__img">
        <div class="search-container header__search-container">
            <form action="/" method="GET" class="form">
                <button type="button" class="form__button"></button>
                <input type="search" placeholder="Поиск" class="search-field form__search-field">
            </form>
        </div>
        <a class="user header__user" href="#">
            <img src="./assets/images/user.png" alt="Аватар пользователя" class="user__user-photo">
            <span class="user-info user__user-info">
                <span class="txt user-info__user-name">Мортиджан</span>
                <span class="txt user-info__user-points">300 баллов</span>
            </span>
        </a>
      </header>
      <main class="main page__main">
        <nav class="menu">
            <ul class="menu-list menu__menu-list">
                <li class="menu-list__menu-item"><a href="#"
                class="menu-list__menu-link">Оргсхема</a></li>
                <li class="menu-list__menu-item"><a href="#"
                class="menu-list__menu-link">Kolesa Team</a></li>
                <li class="menu-list__menu-item"><a href="#"
                class="menu-list__menu-link menu-list__menu-link_selected">Kolesa Shop</a></li>
                <li class="menu-list__menu-item"><a href="#"
                class="menu-list__menu-link">Картина компании</a></li>
                <li class="menu-list__menu-item"><a href="#"
                class="menu-list__menu-link">Новости</a></li>
                <li class="menu-list__menu-item"><a href="#"
                class="menu-list__menu-link">Education</a></li>
                <li class="menu-list__menu-item"><a href="#"
                class="menu-list__menu-link"> Guidelines</a></li>
                <li class="menu-list__menu-item"><a href="#"
                class="menu-list__menu-link">Библиотека</a></li>
                <li class="menu-list__menu-item"><a href="#"
                class="menu-list__menu-link">FAQ</a></li>
            </ul>
        </nav>
        <div class="main-container main__main-container">
            <div class="banner-container">
                <img src="./assets/images/banner.png" alt="Баннер с акциями">
            </div>
            <div class="points-container main-container__points-container">
                <button type="button" class="points-container__button">
                    <img src="./assets/images/plus.png" alt="Иконка плюса"
                    class="points-container__img">
                    <p class="points-container__txt">Получить баллы</p>
                </button>
                <button type="button"
                class="points-container__button">
                    <img src="./assets/images/quesmark.png" alt="Иконка вопроса"
                    class="points-container__img">
                    <p class="points-container__txt">Как получить баллы</p>
                </button>
                <button type="button" class="points-container__button">
                    <img src="./assets/images/gift.png" alt="Иконка подарка"
                    class="points-container__img">
                    <p class="points-container__txt">Подарить баллы</p>
                </button>
            </div>
            <div class="shop-container main-container__shop-container">
                <div class="tabs-container shop-container__tabs-container">
                    <label for="tab1" class="label-container tabs-container__label-container"
                    @click="switchToCategory1">
                        <input class="label-container__input" type="radio"
                        id="tab1" name="tab" value="all" checked>
                        <span class="label-container__back">Все товары</span>
                    </label>
                    <label for="tab2" class="label-container tabs-container__label-container"
                    @click="switchToCategory2">
                        <input class="label-container__input" type="radio"
                        id="tab2" name="tab" value="clothes">
                        <span class="label-container__back">Одежда</span>
                    </label>
                    <label for="tab3" class="label-container tabs-container__label-container"
                    @click="switchToCategory3">
                        <input class="label-container__input" type="radio"
                        id="tab3" name="tab" value="accessories">
                        <span class="label-container__back">Аксессуары</span>
                    </label>
                </div>
                <div class="product-container js__product-container">
                  <div v-for="product in products" :key="product.id" class="product-card-wrap
                  product-container__product-card-wrap" @click="openModal">
                     <div class="product-card product-card-wrap__product-card hover-card"
                     :data-index="product.id">
                      <img :src="findImagePath(product.image)" alt="Фото товара"
                      class="product-card__photo" width="330" height="330">
                          <span class="product-card__new-label" v-if="product.isNew">NEW</span>
                      <div class="product-card__description">
                          <div class="product-card__price">{{ product.price }} баллов</div>
                          <h4 class="product-card__title">{{ product.title }}</h4>
                          <p class="product-card__size">{{ product.size }}</p>
                           <button class="button product-card__button"
                           @click="openModal">Заказать</button>
                      </div>
                  </div>
              </div>
                </div>
            </div>
        </div>
        <div class="js__modal-container">
          <div v-if="isShowModal" class="modal main-container__modal">
                <div class="modal__modal-overlay" @click="closeModal"></div>
                <div class="modal__modal-content">
                    <button class="modal__close" @click="closeModal"></button>
                    <div class="modal__content-container">
                        <div class="modal__image-container">
                            <div class="modal__main-img">
                                <img src="./assets/images/tshirt-img.png" alt="Фото товара"
                                width="330" height="330">
                            </div>
                            <div class="modal__preview-container">
                                <img src="./assets/images/preview-1.png" class="modal__preview-img"
                                alt="Фото товара">
                                <img src="./assets/images/preview-2.png"
                                class="modal__preview-img modal__preview-img-active"
                                alt="Фото товара">
                                <img src="./assets/images/preview-3.png" class="modal__preview-img"
                                alt="Фото товара">
                            </div>
                        </div>
                        <div class="modal__details-container">
                            <div class="modal__required-container">
                            <div class="modal__info-container">
                                <h2 class="modal__title">Футболка</h2>
                                <span class="modal__price">220 баллов</span>
                                <button class="button modal__button">Заказать</button>
                            </div>
                            <div class="modal__balance">
                                <div class="modal__balance-info">
                                    <span class="modal__your-txt">Твой баланс:</span><br>
                                    <span class="modal__balance-num">3945 баллов</span>
                                </div>
                                <div class="balance-icon">
                                    <img src="src/assets/balance-icon.png" alt="">
                                </div>
                            </div>
                            </div>
                            <div class="modal__addons-container">
                            <div class="color-details modal__addon">
                            <span class="txt">Цвета:</span>
                            <div class="modal__radio-container">
                                <label for="product-${id}-color1" class="modal__label-container
                                label-container">Синий
                                    <input type="radio" id="product-${id}-color1"
                                    name="color" value="blue"
                                    class="label-container__input" checked>
                                    <span class="label-container__checkmark
                                    label-container__checkmark-blue"></span>
                                    <span class="label-container__back"></span>
                                </label>
                                <label for="product-${id}-color2" class="modal__label-container
                                label-container">Бежевый
                                    <input type="radio" id="product-${id}-color2"
                                    name="color" value="beige"
                                    class="label-container__input">
                                    <span class="label-container__checkmark
                                    label-container__checkmark-beige">
                                    </span>
                                    <span class="label-container__back"></span>
                                </label>
                                <label for="product-${id}-color3" class="modal__label-container
                                label-container" >Серый
                                    <input type="radio" id="product-${id}-color3"
                                    name="color" value="grey"
                                    class="label-container__input">
                                    <span class="label-container__checkmark
                                    label-container__checkmark-grey"></span>
                                    <span class="label-container__back"></span>
                                </label>
                            </div>
                        </div>
                            <div class="size-details modal__addon">
                                <span class="txt">Размер:</span>
                                <div class="modal__radio-container">
                                    <label for="product-${id}-size1" class="modal__label-container
                                    label-container modal__label-container-size">S
                                        <input type="radio" id="product-${id}-size1" name="size"
                                        value="small" class="label-container__input" checked>
                                        <span class="label-container__checkmark
                                        label-container__checkmark-size"></span>
                                        <span class="label-container__back"></span>
                                    </label>
                                    <label for="product-${id}-size2" class="modal__label-container
                                    label-container modal__label-container-size">M
                                        <input type="radio" id="product-${id}-size2" name="size"
                                        value="medium" class="label-container__input">
                                        <span class="label-container__checkmark
                                        label-container__checkmark-size"></span>
                                        <span class="label-container__back"></span>
                                    </label>
                                    <label for="product-${id}-size3" class="modal__label-container
                                    label-container modal__label-container-size">L
                                        <input type="radio" id="product-${id}-size3"
                                        name="size" value="large" class="label-container__input">
                                        <span class="label-container__checkmark
                                        label-container__checkmark-size"></span>
                                        <span class="label-container__back"></span>
                                    </label>
                                </div>
                            </div>

                            <div class="description modal__addon" >
                                <h2 class="txt bold-txt">Детали:</h2>
                                <p class="txt">Футболка из хлопка</p>
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
        </div>
      </main>
        <footer class="footer page__footer">
            <div class="footer__footer-info">
                <p class="footer__kolesa-copy">© Kolesa Group</p>
                <div class="social footer__social">
                    <a href="#" class="social__links"><img src="./assets/images/Instagram.svg"
                    alt="Иконка Instagram" class="social__icons"></a>
                    <a href="#" class="social__links"><img src="./assets/images/YouTube.svg"
                    alt="Иконка YouTube" class="social__icons"></a>
                    <a href="#" class="social__links"><img src="./assets/images/VK.svg"
                    alt="Иконка VKontakte" class="social__icons"></a>
                </div>
            </div>
            <div class="footer__wrap">
                <div class="footer__questions">
                    <p class="footer__questions-txt">Есть идеи что улучшить?</p>
                    <p class="footer__questions-txt">Не знаешь, с кем решить проблему?</p>
                </div>
                <button type="button" class="footer__footer-button" >Написать</button>
            </div>
        </footer>
    </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      isShowModal: false,
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
      let products;
      if (this.category === 1) {
        products = this.clothes.concat(this.accessories).sort(this.compareValues('isNew', 'desc'));
      } if (this.category === 2) {
        products = this.clothes.slice(0).sort(this.compareValues('isNew', 'desc'));
      } if (this.category === 3) {
        products = this.accessories.slice(0).sort(this.compareValues('isNew', 'desc'));
      } return products;
    },
  },
  methods: {
    switchToCategory1() {
      this.category = 1;
      console.log(1);
    },
    switchToCategory2() {
      this.category = 2;
      console.log(2);
    },
    switchToCategory3() {
      this.category = 3;
      console.log(3);
    },
    openModal() {
      this.isShowModal = true;
    },
    closeModal() {
      this.isShowModal = false;
    },
    findImagePath(item) {
      // eslint-disable-next-line global-require,import/no-dynamic-require,import/extensions
      return require(`./assets/images/${item}.png`);
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
  },
};
</script>

<style lang="scss">
</style>
