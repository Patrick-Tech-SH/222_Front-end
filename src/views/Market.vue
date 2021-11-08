<template>
    <div>
        <div class="px-2 mx-8 mt-16 text-2xl font-bold mb-10">
            <p>Market</p>
        </div>

        <!-- menu bar -->
        <div>
            <div class="flex flex-row mx-8">
                <a class="my-1 text-sm md:text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 mx-1 sm:mx-4 lg:my-0"
                    href="#">All Games</a>
                <a class="my-1 text-sm md:text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 mx-1 sm:mx-4 lg:my-0"
                    href="#">Nintendo</a>
                <a class="my-1 text-sm md:text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 mx-1 sm:mx-4 lg:my-0"
                    href="#">Sony</a>
                <a class="my-1 text-sm md:text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 mx-1 sm:mx-4 lg:my-0"
                    href="#">Ubisoft</a>
                <a class="my-1 text-sm md:text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 mx-1 sm:mx-4 lg:my-0"
                    href="#">Capcom</a>
            </div>
        </div>

        <div class="mt-10 grid sm:grid-cols-3 gap-3">
            <product-list v-for="product in items.data" :key="product.keyId" :product="product" />
        </div>

        <pre>{{ items }}</pre>
    </div>
</template>

<script>
    import ProductList from "../components/ProductList.vue"
    import {
        mapActions,
        mapGetters
    } from 'vuex'

    export default {
        name: "Market",
        components: {
            ProductList
        },
        created() {
            this.loadProducts()
        },


        methods: {
            ...mapActions({
                loadProducts: "loadProducts"
            }),
        },

        computed: {
            ...mapGetters({
                items: "items"
            }),
        }
    }
</script>

<style>

</style>