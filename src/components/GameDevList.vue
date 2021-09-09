<template>
  <!-- GameDevList -->
  <div class="mx-9 pt-10">
    <h1 class="text-2xl font-bold">Game Development Company</h1>
    <!-- Company -->
    <div class="grid sm:grid-cols-4 grid-cols-2 mt-10 gap-2">
      <div class="item shadow-xl">
        <div class="
            content
            bg-red-600
            text-white text-center
            box-border
            p-6
            rounded-md
            hover:bg-red-700
            duration-300
          ">
          <h1 class="font-bold sm:text-xl">Nintendo</h1>
        </div>
      </div>
      <div class="item shadow-xl">
        <div class="
            content
            bg-gray-800
            text-white text-center
            box-border
            p-6
            rounded-md
            hover:bg-black
            duration-300
          ">
          <h1 class="font-bold sm:text-xl">Sony</h1>
        </div>
      </div>
      <div class="item shadow-xl">
        <div class="
            content
            bg-gray-400
            text-black text-center
            box-border
            p-6
            rounded-md
            hover:bg-gray-500
            duration-300
          ">
          <h1 class="font-bold sm:text-xl">Ubisoft</h1>
        </div>
      </div>
      <div class="item shadow-xl">
        <div class="
            content
            bg-blue-800
            text-yellow-500 text-center
            box-border
            p-6
            rounded-md
            hover:bg-blue-900
            duration-300
          ">
          <h1 class="font-bold sm:text-xl">Capcom</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GameDevList",
  };
</script>

<style></style>