<template>
  <!-- ProductList -->
  <div class="mx-9 pt-10">
    <!-- <h1 class="text-2xl font-bold">All Games</h1> -->

    <!-- Product -->
    <div class="mt-10 grid sm:grid-cols-3 gap-3">
      <div class="card text-center shadow-2xl">
        <figure class="px-10 pt-10">
          <img src="https://picsum.photos/id/1005/400/250" class="rounded-xl" />
        </figure>
        <div class="card-body">
          <h1 class="card-title text-2xl">Game Name</h1>
          <p class="text-xl">Game Dev Company</p>
          <p class="text-xl text-yellow-500 font-bold">Price</p>
          <p class="text-xl">Platform</p>
          <div class="justify-center card-actions">
            <button class="btn btn-outline btn-accent">Add to cart</button>
          </div>
        </div>
      </div>

      <div class="card text-center shadow-2xl">
        <figure class="px-10 pt-10">
          <img src="https://picsum.photos/id/1005/400/250" class="rounded-xl" />
        </figure>
        <div class="card-body">
          <h1 class="card-title text-2xl">Game Name</h1>
          <p class="text-xl">Game Dev Company</p>
          <p class="text-xl text-yellow-500 font-bold">Price</p>
          <p class="text-xl">Platform</p>
          <div class="justify-center card-actions">
            <button class="btn btn-outline btn-accent">Add to cart</button>
          </div>
        </div>
      </div>

      <div class="card text-center shadow-2xl">
        <figure class="px-10 pt-10">
          <img src="https://picsum.photos/id/1005/400/250" class="rounded-xl" />
        </figure>
        <div class="card-body">
          <h1 class="card-title text-2xl">Game Name</h1>
          <p class="text-xl">Game Dev Company</p>
          <p class="text-xl text-yellow-500 font-bold">Price</p>
          <p class="text-xl">Platform</p>
          <div class="justify-center card-actions">
            <button class="btn btn-outline btn-accent">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ProductList",
  };
</script>

<style></style>