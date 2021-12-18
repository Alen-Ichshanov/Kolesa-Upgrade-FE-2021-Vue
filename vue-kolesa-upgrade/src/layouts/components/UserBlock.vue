<template>
  <a class="user header__user" href="#">
    <img
      :src="userData.avatarUrl"
      alt="Аватар пользователя"
      class="user__user-photo"
    />
    <span class="user-info user__user-info">
      <span class="txt user-info__user-name">{{userData.name}}</span>
      <span class="txt user-info__user-points"
        >{{ userData.score }} баллов
      </span>
    </span>
  </a>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'userBlock',
  computed: {
    ...mapState({
      userData: 'userData',
    }),
  },
  mounted() {
    this.setUser();
  },
  methods: {
    setUser() {
      this.$store.dispatch('updateUserData');
    },
  },
};
</script>
