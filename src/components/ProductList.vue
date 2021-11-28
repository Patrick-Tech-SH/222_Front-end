<template>
  <!-- ProductList -->
  <div class="mx-5 pt-10">
    <!-- <h1 class="text-2xl font-bold">All Games</h1> -->

    <!-- Product -->
    <div>
      <div>
        <div class="card bordered cursor-pointer">
          <figure @click="this.$router.push(`/productdetail/${ product.keyId }`)">
            <img :src="`${ url }/keygames/getimage/${ product.keyId }`" class="h-full object-cover md:h-60 lg:h-96"/>
          </figure>
          <div class="card-body">
            <h2 class="card-title">{{ product.gameName }}</h2>
            <p class="">{{ product.gamedeveloper.devName}}</p>
            <p class="text-yellow-600">$ {{ product.price }}</p>
            <p class="">{{ product.platform.pName }}</p>
            <div class="justify-end card-actions">
              <button class="btn btn-accent">Add to cart</button>
            </div>
          </div>
        </div>
      </div>


      <!-- <div class="card text-center shadow-2xl">
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
      </div> -->



    </div>
  </div>
</template>

<script>
// import { mapActions , mapGetters } from 'vuex'


  export default {
    name: "ProductList",
    props:{
      product:Object
    },
    data (){
      return{
        url: process.env.VUE_APP_MY_ENV_VARIABLE
      }
    }

    // created() {
    //   this.loadProducts()
    // },


    // methods: {
    //   ...mapActions({
    //     loadProducts: "loadProducts"
    //   }),
    // },

    // computed: {
    //   ...mapGetters({
    //     items: "items"
    //   }),
    // }
  };
</script>

<style></style>