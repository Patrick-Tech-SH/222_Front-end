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

        <div>
            <product-list />
        </div>
    </div>
</template>

<script>
import ProductList from "../components/ProductList.vue"

    export default {
        name: "Market",
        components:{
            ProductList
        }
    }
</script>

<style>

</style>