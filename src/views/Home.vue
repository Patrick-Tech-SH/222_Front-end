<template>
  <div>
    <introduction />
    <game-dev-list />
    <product-list />
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