<template>
  <section class>
    <div class="flex justify-end px-4 py-3 lg:py-0">
      <button @click="toggleMenu" type="button" class="focus:outline-none cursor-pointer">
        <svg
          v-if="!isOpen"
          class="w-8 h-8 fill-current text-gray-900 lg:w-20 lg:h-20 lg:hidden"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
        >
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
        <svg
          v-else
          class="w-10 h-10 fill-current text-gray-900 lg:w-20 lg:h-20 lg:hidden"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
          />
        </svg>
      </button>
    </div>
    <nav class="lg:h-full lg:border-r lg:overflow-y-auto" v-show="isOpen">
      <div class="sm:hidden lg:flex lg:w-full lg:px-5 lg:py-3">
        <span class="xs:hidden lg:block pink lg:font-bold lg:border-b lg:border-gray-500">Recents</span>
      </div>
      <div>
        <CatList
          class="xs:hidden lg:block"
          v-for="(cat, index) in allCats"
          :key="index"
          :cat="cat"
        />
      </div>

      <!-- UNLIKED CATS -->
      <div class="flex items-center border-b mx-2 pt-3 lg:hidden" @click="toggleUnlikedCats">
        <svg
          aria-hidden="true"
          data-prefix="fas"
          data-icon="times"
          class="svg-inline--fa fa-times fa-w-11 fill-current text-red-500 w-6 h-6 lg:w-6 lg:h-6"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 352 512"
        >
          <path
            fill="currentColor"
            d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
          />
        </svg>
        <span class="text-gray-900 font-bold text-lg px-2 lg:text-4xl lg:text-2xl lg:px-1">Unliked</span>
      </div>
      <div
        class="flex overflow-x-auto"
        :class="{ 'hidden' : !isUnlikedCatsOpen, 'block' : isUnlikedCatsOpen }"
      >
        <UnlikedCats class="sm:hidden" />
      </div>

      <!-- LIKED CATS -->
      <div class="flex items-center border-b mx-2 pt-3 lg:hidden" @click="toggleLikedCats">
        <svg
          class="fill-current w-6 h-6 text-green-500 lg:w-6 lg:h-6"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            d="M21.95,3.051C20.627,1.729,18.87,1,17,1s-3.627,0.729-4.949,2.05C12.034,3.067,12.017,3.084,12,3.102 c-0.017-0.018-0.033-0.034-0.05-0.051C10.627,1.729,8.87,1,7,1S3.373,1.729,2.05,3.051S0,6.13,0,8s0.728,3.627,2.05,4.949l9.95,9.95 l9.95-9.95C23.272,11.627,24,9.87,24,8C24,6.131,23.272,4.373,21.95,3.051z"
          />
        </svg>
        <span class="text-gray-900 font-bold text-lg px-2 lg:text-2xl lg:px-1">Liked</span>
      </div>
      <div
        class="flex overflow-x-auto"
        :class="{ 'hidden' : !isLikedCatsOpen, 'block' : isLikedCatsOpen }"
      >
        <LikedCats class="sm:hidden" />
      </div>
      <!-- SUPER-LIKED CATS -->
      <div class="flex items-center border-b mx-2 pt-3 lg:hidden" @click="toggleSuperLikedCats">
        <svg
          class="svg-inline--fa fa-star fa-w-18 fill-current w-6 h-6 text-blue-500 lg:h-6 lg:w-6"
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
        <span class="text-gray-900 font-bold text-lg px-2 lg:text-2xl lg:px-1">Super-liked</span>
      </div>
      <div
        class="flex overflow-x-auto"
        :class="{ 'hidden' : !isSuperLikedCatsOpen, 'block' : isSuperLikedCatsOpen }"
      >
        <SuperLikedCats />
      </div>
    </nav>
  </section>
</template>

<script>
import UnlikedCats from "./UnlikedCats.vue";
import LikedCats from "./LikedCats.vue";
import SuperLikedCats from "./SuperLikedCats.vue";
import CatList from "./CatList.vue";
export default {
  components: {
    UnlikedCats,
    LikedCats,
    SuperLikedCats,
    CatList
  },
  data() {
    return {
      isOpen: true,
      isLikedCatsOpen: false,
      isUnlikedCatsOpen: false,
      isSuperLikedCatsOpen: false
    };
  },
  computed: {
    allCats() {
      return this.$store.getters.getAllCats;
    }
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
    toggleLikedCats() {
      this.isLikedCatsOpen = !this.isLikedCatsOpen;
    },
    toggleUnlikedCats() {
      this.isUnlikedCatsOpen = !this.isUnlikedCatsOpen;
    },
    toggleSuperLikedCats() {
      this.isSuperLikedCatsOpen = !this.isSuperLikedCatsOpen;
    }
  }
};
</script>

<style lang="scss" scoped>
.pink {
  color: #fd297b;
}
</style>