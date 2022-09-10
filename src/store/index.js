/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import { createStore } from "vuex";
import axios from "axios";
import baseUrl from "@/api";

export default createStore({
  state: {
    popupFormVisible: false,
    popupResultVisible: false,
    popupForm: {
      inputName: "",
      inputPhone: "",
      inputEmail: "",
      inputCity: "",
    },
    serverData: {
      id: 1,
    },
  },
  mutations: {
    openPopup(state) {
      state.popupFormVisible = true;
    },
    closePopup(state) {
      state.popupFormVisible = false;
    },
    openResultPopup(state) {
      state.popupResultVisible = true;
    },
    closeResultPopup(state) {
      state.popupResultVisible = false;
    },
    setInputName(state, payload) {
      state.popupForm.inputName = payload;
    },
    setInputPhone(state, payload) {
      if (state.popupForm.inputPhone.split("").length < 12) {
        state.popupForm.inputPhone = payload;
      }
    },
    setInputEmail(state, payload) {
      state.popupForm.inputEmail = payload;
    },
    setInputCity(state, payload) {
      state.popupForm.inputCity = payload;
    },
    setServerData(state, payload) {
      state.serverData = payload;
    },
    resetForm(state) {
      for (const key in state.popupForm) {
        state.popupForm[key] = "";
      }
    },
  },
  actions: {
    async fetchServerData({ commit }, payload) {
      try {
        const res = await axios.post(baseUrl, payload);
        commit("setServerData", res.data);
      } catch (e) {
        commit("setServerData", e.response.data);
      }
    },
  },
});
