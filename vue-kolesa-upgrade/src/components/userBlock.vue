<template>
  <a class="user header__user" href="#">
            <img :src="userData.avatarUrl" alt="Аватар пользователя" class="user__user-photo">
            <span class="user-info user__user-info">
                <span class="txt user-info__user-name">{{ userData.name }}</span>
                <span class="txt user-info__user-points">{{ userData.score }} баллов</span>
            </span>
        </a>
</template>

<script>
import axios from '@/axios';

export default {
  name: 'userBlock',
  props: {
    userData: {
      type: Object,
    },
  },
  mounted() {
    axios.get('7ZW3y5GAuIge/data')
      .then((response) => {
        this.$emit('userChange', response.data);
      });
  },
};
</script>
