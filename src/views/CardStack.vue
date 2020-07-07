<template>
  <main class="lg:mt-24 flex">
    <div class="py-6 mx-auto">
      <CatCard v-for="cat in getCats" :key="cat.id" :cat="cat" />
      <div class="flex items-center pt-6 justify-center">
        <div class="mx-4 mt-10">
          <button
            id="unlike"
            type="button"
            @click="unlikeCat"
            class="px-6 py-5 rounded-full text-red-500 shadow-lg cursor-pointer focus:outline-none hover:bg-gray-200"
          >
            <svg
              aria-hidden="true"
              data-prefix="fas"
              data-icon="times"
              class="svg-inline--fa fa-times fa-w-11 fill-current text-red-500 w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 352 512"
            >
              <path
                fill="currentColor"
                d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
              />
            </svg>
          </button>
          <button
            id="superLike"
            type="button"
            @click="superLikeCat"
            class="mx-8 px-6 py-5 rounded-full text-red-500 shadow-lg cursor-pointer focus:outline-none hover:bg-gray-200"
          >
            <svg
              class="svg-inline--fa fa-star fa-w-18 fill-current w-6 h-6 text-blue-500"
              aria-hidden="true"
              data-prefix="fas"
              data-icon="star"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path
                fill="currentColor"
                d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
              />
            </svg>
          </button>
          <button
            id="like"
            type="button"
            @click="likeCat"
            class="px-6 py-5 rounded-full text-red-500 shadow-lg cursor-pointer focus:outline-none hover:bg-gray-200"
          >
            <svg
              class="fill-current w-10 h-10 text-green-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M21.95,3.051C20.627,1.729,18.87,1,17,1s-3.627,0.729-4.949,2.05C12.034,3.067,12.017,3.084,12,3.102 c-0.017-0.018-0.033-0.034-0.05-0.051C10.627,1.729,8.87,1,7,1S3.373,1.729,2.05,3.051S0,6.13,0,8s0.728,3.627,2.05,4.949l9.95,9.95 l9.95-9.95C23.272,11.627,24,9.87,24,8C24,6.131,23.272,4.373,21.95,3.051z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";
import CatCard from "../components/CatCard";
//import { Vue2InteractDraggable } from "vue2-interact";
//import api from "../services/api.js";
export default {
  components: {
    CatCard
  },
  computed: {
    getCats() {
      return this.$store.getters.getLoadedCats;
    }
  },
  methods: {
    right() {
      setTimeout(() => this.getCats.shift(), 300);
    },
    likeCat() {
      this.$store.commit("ADD_LIKED_CAT");
      this.$store.commit("GET_CAT_STATUS");
      this.$store.commit("ADD_CAT");
      this.$store.commit("REMOVE_CAT");
      this.$store.dispatch("getCatImages");
    },
    unlikeCat() {
      this.$store.commit("ADD_UNLIKED_CAT");
      this.$store.commit("GET_CAT_STATUS");
      this.$store.commit("ADD_CAT");
      this.$store.commit("REMOVE_CAT");
      this.$store.dispatch("getCatImages");
    },
    superLikeCat() {
      this.$store.commit("ADD_SUPERLIKED_CAT");
      this.$store.commit("GET_CAT_STATUS");
      this.$store.commit("ADD_CAT");
      this.$store.commit("REMOVE_CAT");
      this.$store.dispatch("getCatImages");
    }
  },
  created() {
    this.$store.dispatch("getCatFacts");
    axios.defaults.headers.common["x-api-key"] =
      "b926c0ea-0aca-4499-b6e9-fbf136c9cab9";
    this.$store.dispatch("getCatImages");
  }
};
</script> 

<style scoped>
</style>