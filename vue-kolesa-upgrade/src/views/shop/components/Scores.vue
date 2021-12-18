<template>
  <div class="score-main">
    <div class="score-main__links">
      <router-link :to="{ name: 'Shop' }">Kolesa Shop</router-link>
      <span> / </span>
      <a href="#">Как получить баллы</a>
    </div>
    <h2 class="score-main__title">Как получить баллы</h2>
    <div class="score-main__score-cards">
      <div
        class="score-cards__earn-score earn-score"
        v-for="item in scoreCards"
        :key="item.id"
      >
        <div class="earn-score__wrap">
                  <img
          :src="findImagePath(item.icon)"
          alt="Иконка для карточки с баллами"
          class="earn-score__icon"
        />
        <h5 class="earn-score__title">{{ item.title }}</h5>
        <span class="earn-score__score-number" v-if="item.number">
          {{ item.number }}
        </span>
        <p class="earn-score__description">{{ item.desc }}</p>
        </div>
          <button class="button earn-score__button" type="button">
            Отправить заявку
          </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Scores',
  data() {
    return {
      scoreCards: [
        {
          id: 1,
          icon: '/score1',
          title: 'Выступление на конференциях',
          number: '90 баллов',
          desc: 'Стань спикером на международной конференции по своему направлению',
        },
        {
          id: 2,
          icon: '/score2',
          title: 'Выступление на meetup',
          number: '60 баллов',
          desc: 'Стань спикером в Колёсах и на meetup других компаний. Расскажи о наших продуктах и технологиях которые мы используем',
        },
        {
          id: 3,
          icon: '/score3',
          title: 'Статья на habr/vc.ru/rusbase',
          number: '60 баллов',
          desc: 'Подготовь качественный контент, напиши и опубликуй статью на профильную тему',
        },
        {
          id: 4,
          icon: '/score4',
          title: 'Мастер-классы, тренинги, лекции, подкасты, прямые эфиры',
          number: '60 баллов',
          desc: 'Поделись профессиональными знаниями с коллегами. Важно обучить не менее 6 человек',
        },
        {
          id: 5,
          icon: '/score5',
          title: 'Организация мероприятия',
          number: '60 баллов',
          desc: 'Организуй турнир по командным играм в офисе. ЧГК, настольный теннис и другие направления. Не менее 10 участников в турнире',
        },
        {
          id: 6,
          icon: '/score6',
          title: 'Стань ментором в проекте «Kolesa Academy»',
          number: '90 баллов ежемесячно',
          desc: 'Стань ментором академиков, поделись своими знаниями и помоги ребятам завершить Kolesa Academy успешно',
        },
        {
          id: 7,
          icon: '/score7',
          title: 'Помощь HR team',
          number: '50 баллов',
          desc: 'Помоги организовать мероприятие',
        },
        {
          id: 8,
          icon: '/score8',
          title: 'Выступление на Demoday',
          number: '30 баллов',
          desc: 'Выступи на Demoday внутри своей команды и поделись знаниями',
        },
        {
          id: 9,
          icon: '/score9',
          title: 'Другое',
          number: '',
          desc: 'Получай баллы если уже что-то сделано',
        },
      ],
    };
  },
  methods: {
    findImagePath(image) {
      // eslint-disable-next-line global-require,import/no-dynamic-require,import/extensions
      return require(`@/assets/images${image}.png`);
    },
  },
};
</script>
