<template>
  <a class="user header__user" href="#" @click="userChange">
            <img src="../assets/images/user.png" alt="Аватар пользователя" class="user__user-photo">
            <span class="user-info user__user-info">
                <span class="txt user-info__user-name">{{ userName }}</span>
                <span class="txt user-info__user-points">{{ userScore }} баллов</span>
            </span>
        </a>
</template>

<script>
import axios from '@/axios';

export default {
  name: 'userBlock',
  props: {
    userNameUpdate: String,
    userScoreUpdate: Number,
  },
  data() {
    return {
      userName: '',
      userScore: 0,
      userData: {},
    };
  },
  mounted() {
    axios.get('https://api.json-generator.com/templates/7ZW3y5GAuIge/data')
      .then((response) => {
        console.log(response.data);
        this.userName = response.data.name;
        this.userScore = response.data.score;
        this.userData = response.data;
      });
  },
  methods: {
    userChange() {
      this.$emit('userChange', this.userData);
    },
  },
};
</script>
