<template>
  <div id="app" class="min-h-screen antialiased min-w-full lg:flex lg:flex-col lg:h-screen">
    <Header class="xl:flex-shrink-0" />
    <div class="lg:flex-1 lg:flex lg:overflow-y-auto">
      <PreviousCats class="lg:w-1/3" />
      <main class="bg-gray-100 md:h-full lg:flex-1">
        <CardStack />
      </main>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import CardStack from "./views/CardStack.vue";
import PreviousCats from "./components/PreviousCats.vue";
export default {
  components: {
    Header,
    CardStack,
    PreviousCats
  },
  mounted() {
    this.$store.commit("CREATE_APP");
  }
};
</script>

<style lang="scss">
@tailwind base;
@tailwind utilities;
@tailwind components;
</style>
