<template>
  <div>
    <button class="w-6 h-6 cursor-pointer focus:outline-none" @click="isModalOpen = true">
      <svg
        aria-hidden="true"
        data-prefix="fas"
        data-icon="ellipsis-v"
        class="svg-inline--fa fa-ellipsis-v fa-w-6 fill-current text-gray-400 lg:w-5 lg:h-5 lg:ml-32 hover:text-gray-600 cursor-pointer focus:outline-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 192 512"
      >
        <path
          fill="currentColor"
          d="M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z"
        />
      </svg>
    </button>

    <b-modal
      :active.sync="isModalOpen"
      has-modal-card
      trap-focus
      :destroy-on-hide="false"
      ari-role="dialog"
      aria-modal
    >
      <div class="modal-card bg-white rounded-lg p-6" style="width: auto">
        <div class="flex border-b">
          <img
            class="h-32 w-32 rounded-full mx-auto md:mx-0 md:mr-6 my-3"
            :src="cat.catData[0].url"
          />
          <div class="text-center md:text-left">
            <h2 class="text-2xl font-bold text-gray-900">{{ cat.name }}</h2>
            <div class="text-gray-700 text-lg">{{ cat.age }}</div>
            <!--             <span class="font-bold text-black">Fun Fact:</span>
            <div>
              <span>{{ randomFact }}</span>
            </div>-->
          </div>
          <svg
            v-if="cat.status === 'unliked'"
            aria-hidden="true"
            data-prefix="fas"
            data-icon="times"
            class="svg-inline--fa fa-times fa-w-11 fill-current text-red-500 w-8 h-8 ml-12 mt-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 352 512"
          >
            <path
              fill="currentColor"
              d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
            />
          </svg>
          <svg
            v-else-if="cat.status === 'liked'"
            class="fill-current text-green-500 w-8 h-8 ml-12 mt-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M21.95,3.051C20.627,1.729,18.87,1,17,1s-3.627,0.729-4.949,2.05C12.034,3.067,12.017,3.084,12,3.102 c-0.017-0.018-0.033-0.034-0.05-0.051C10.627,1.729,8.87,1,7,1S3.373,1.729,2.05,3.051S0,6.13,0,8s0.728,3.627,2.05,4.949l9.95,9.95 l9.95-9.95C23.272,11.627,24,9.87,24,8C24,6.131,23.272,4.373,21.95,3.051z"
            />
          </svg>
          <svg
            v-else-if="cat.status === 'superLiked'"
            class="svg-inline--fa fa-star fa-w-18 fill-current text-blue-500 w-8 h-8 ml-12 mt-2"
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
        </div>
        <button
          class="banner w-auto py-4 px-3 text-white mt-2 rounded-md"
          @click="removeCat(cat)"
        >Remove {{ cat.name }}</button>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  props: {
    cat: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isModalOpen: false
    };
  },
  computed: {
    randomFact() {
      return this.$store.getters.getRandomFact;
    }
  },
  methods: {
    removeCat(cat) {
      this.$store.commit("REMOVE_FROM_ALLCATS", cat);
      this.isModalOpen = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.pink {
  color: #ff5864;
}
.banner {
  background: linear-gradient(270deg, #ff655b, #ff5864, #fd297b);
  opacity: 0.85;
}
.banner:hover {
  background: #ff5864;
}
</style>