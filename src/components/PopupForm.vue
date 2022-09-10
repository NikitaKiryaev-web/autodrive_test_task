<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <h2 class="font-inter font-medium text-2xl mb-9 sm:mb-7">Заказать звонок</h2>
  <form
    class="sm:grid sm:grid-rows-2 sm:grid-cols-3 xl:grid-cols-4 sm:items-end xl:items-start sm:gap-x-7 sm:gap-y-5 xl:gap-y-4 xl:gap-x-5"
    @submit="handleSubmit"
  >
    <label for="phone" class="flex flex-col mb-5 sm:mb-0 xl:col-start-2">
      <span class="mb-1 font-inter font-medium text-gray-700">Телефон*</span>
      <input
        class="w-full border border-gray-300 border-solid shadow-sm rounded-md pl-3 py-2 font-inter font-normal h-9"
        type="text"
        id="phone"
        required
        v-phone
        :value="store.state.popupForm.inputPhone"
        @input="handlePhoneChange"
        placeholder="+7 (___) ___-__-__"
      />
    </label>
    <label for="name" class="flex flex-col mb-5 sm:mb-0 xl:col-start-1 xl:row-start-1">
      <span class="mb-1 font-inter font-medium text-gray-700">Имя*</span>
      <input
        class="w-full border border-gray-300 border-solid shadow-sm rounded-md pl-3 py-2 font-inter font-normal h-9"
        type="text"
        id="name"
        required
        placeholder="Иван Иванов"
        :value="store.state.popupForm.inputName"
        @input="handleNameChange"
      />
    </label>
    <label for="email" class="flex flex-col mb-5 sm:mb-0 xl:col-start-3">
      <span class="mb-1 font-inter font-medium text-gray-700">Email*</span>
      <input
        class="w-full border border-gray-300 border-solid shadow-sm rounded-md pl-3 py-2 font-inter font-normal h-9"
        type="email"
        id="email"
        required
        placeholder="you@example.com"
        :value="store.state.popupForm.inputEmail"
        @input="handleEmailChange"
      />
    </label>
    <label
      for="city"
      class="flex flex-col mb-5 sm:mb-0 sm:col-span-2 xl:col-span-1 xl:col-start-4 xl:row-span-1"
    >
      <span class="mb-1 font-inter font-medium text-gray-700">Город*</span>
      <select
        class="w-full border border-gray-300 border-solid shadow-sm rounded-md pl-3 py-2 pr-4 font-inter font-normal h-9 sm:flex sm:items-center sm:py-0"
        id="city"
        required
        :value="store.state.popupForm.inputCity"
        @change="handleCityChange"
      >
        <option v-for="city in cities" :key="city.id" :value="city.id">{{ city.name }}</option>
      </select>
    </label>
    <button
      class="w-full shadow-sm rounded-md bg-green-600 h-9 font-inter font-medium text-white xl:col-start-4 hover:opacity-80 transition-opacity"
      type="submit"
    >
      Отправить
    </button>
  </form>
</template>

<script setup>
import store from "@/store";
import { vPhone } from "@/directives/vPhone";
import cities from "@/api/cityData";

function handlePhoneChange(e) {
  store.commit("setInputPhone", e.target.value);
}
function handleNameChange(e) {
  store.commit("setInputName", e.target.value);
}
function handleEmailChange(e) {
  store.commit("setInputEmail", e.target.value);
}
function handleCityChange(e) {
  store.commit("setInputCity", e.target.value);
}
function handleSubmit(e) {
  e.preventDefault();
  store.dispatch("fetchServerData", {
    name: store.state.popupForm.inputName,
    phone: store.state.popupForm.inputPhone,
    email: store.state.popupForm.inputEmail,
    city_id: store.state.popupForm.inputCity,
  });
  store.commit("closePopup");
  store.commit("resetForm");
  store.commit("openResultPopup");
}
</script>

<style lang="scss" scoped></style>
