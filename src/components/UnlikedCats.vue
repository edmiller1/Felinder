<template>
  <div class="pt-3 xl:h-full xl:flex xl:flex-col xl:justify-between">
    <div class="sm:overflow-x-auto xl:overflow-x-hidden xl:overflow-y-auto">
      <div class="flex xl:flex-none">
        <div v-for="cat in unlikedCats" :key="cat.id" class="px-2">
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
    unlikedCats() {
      return this.$store.getters.getUnlikedCats;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>