<template>
  <div class="lg:flex xl:justify-center">
    <div>
      <img :src="cat.catData[0].url" class="h-96 rounded-lg w-72 ml-3 cursor-pointer" />
      <div class="absolute bg-white ml-3 -mt-16 w-72 h-24 border-2">
        <div class="flex items-center">
          <span class="text-gray-900 text-3xl font-bold px-3">{{ cat.name }}</span>
          <span class="text-gray-700 text-2xl pt-1">{{ cat.age }}</span>
        </div>
        <div class="px-3 py-3 flex items-center">
          <svg
            aria-hidden="true"
            data-prefix="fas"
            data-icon="map-marker-alt"
            class="svg-inline--fa fa-map-marker-alt fa-w-12 fill-current h-5 w-5 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            <path
              fill="currentColor"
              d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
            />
          </svg>
          <span
            v-if="cat.distance === 1"
            class="text-gray-500 text-lg px-2"
          >{{ cat.distance }} kilometre away</span>
          <span v-else class="text-gray-500 text-lg px-2">{{ cat.distance }} kilometres away</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cat: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
</style>