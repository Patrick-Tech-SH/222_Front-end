<template>
  <div>
    <introduction />
    <game-dev-list />
    <div class="mx-9 pt-10">
      <h1 class="text-2xl font-bold">Example Game</h1>
    </div>
    <product-list />
    <div class="text-center pt-8">
        <router-link to="/market" class="btn btn-outline">View All Products</router-link>
    </div>
  </div>
</template>

<script>
  import Introduction from "@/components/Introduction.vue";
  import GameDevList from "@/components/GameDevList.vue";
  import ProductList from "@/components/ProductList.vue";

  export default {
    name: "Home",
    components: {
      Introduction,
      GameDevList,
      ProductList,
    },
  }
</script>