<template>
              <div class="points-container main-container__points-container">
                <button type="button" class="points-container__button">
                    <img src="../assets/images/plus.png" alt="Иконка плюса"
                    class="points-container__img">
                    <p class="points-container__txt">Получить баллы</p>
                </button>
                <button type="button"
                class="points-container__button">
                    <img src="../assets/images/quesmark.png" alt="Иконка вопроса"
                    class="points-container__img">
                    <p class="points-container__txt">Как получить баллы</p>
                </button>
                <button type="button" class="points-container__button">
                    <img src="../assets/images/gift.png" alt="Иконка подарка"
                    class="points-container__img">
                    <p class="points-container__txt">Подарить баллы</p>
                </button>
            </div>
</template>

<script>
export default {
  name: 'pointsButtons',
};
</script>
