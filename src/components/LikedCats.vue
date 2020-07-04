<template>
  <div class="pt-3">
    <div class="overflow-x-auto">
      <div class="inline-flex">
        <div v-for="cat in likedCats" :key="cat.id" class="px-2">
          <div class="flex items-center">
            <img class="flex-shrink-0 max-w-xs w-32 h-32 rounded-lg" :src="cat.catData[0].url" />
          </div>
          <div class="px-10">
            <span class="font-semibold text-black">{{ cat.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    likedCats() {
      return this.$store.getters.getLikedCats;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>