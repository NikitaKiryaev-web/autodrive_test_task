<template>
  <div class="mx-2.5 mt-2.5 sm:ml-10 sm:mr-0 sm:mt-5 xl:ml-20">
    <button
      class="w-full sm:w-48 h-9 bg-btn-blue font-inter text-base font-medium text-white rounded-md mb-2.5 sm:mb-0 sm:mr-4 xl:mr-5 shadow-sm"
      @click="() => handleBtnClick(1)"
    >
      Заказать в Москву
    </button>
    <button
      class="w-full sm:w-64 h-9 bg-btn-green font-inter text-base font-medium text-white rounded-md shadow-sm"
      @click="() => handleBtnClick(2)"
    >
      Заказать в Санкт-Петербург
    </button>
  </div>
  <PopupComponent :isVisible="store.state.popupFormVisible" :handleClose="handleClosePopup">
    <PopupForm />
  </PopupComponent>
  <PopupComponent :isVisible="store.state.popupResultVisible" :handleClose="handleCloseResultPopup">
    <div class="pb-6" v-html="store.state.serverData"></div>
  </PopupComponent>
</template>

<script setup>
import PopupComponent from "./components/PopupComponent.vue";
import PopupForm from "./components/PopupForm.vue";
import store from "./store";

function handleBtnClick(defaultCity) {
  store.commit("setInputCity", defaultCity);
  store.commit("openPopup");
}
function handleClosePopup() {
  store.commit("closePopup");
}
function handleCloseResultPopup() {
  store.commit("closeResultPopup");
}
</script>

<style></style>
