<template>
    <div>
        <div class="px-2 mx-8 mt-16 text-2xl font-bold mb-10">
            <p>Market</p>
        </div>

        <!-- <pre>{{ getGameDev.data }}</pre> -->

        <!-- menu bar -->
        <div>
            <div class="flex flex-row mx-8">
                <a @click="setDevId(null)" class="my-1 text-sm md:text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 mx-1 sm:mx-4 lg:my-0"
                    >All games</a>
                <a v-for="gamedev in getGameDev.data" :key="gamedev.devId" @click="setDevId(gamedev.devId)" class="my-1 text-sm md:text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 mx-1 sm:mx-4 lg:my-0"
                    >{{ gamedev.devName }}</a>
                <!-- <a class="my-1 text-sm md:text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 mx-1 sm:mx-4 lg:my-0"
                    href="#">Sony</a>
                <a class="my-1 text-sm md:text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 mx-1 sm:mx-4 lg:my-0"
                    href="#">Ubisoft</a>
                <a class="my-1 text-sm md:text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 mx-1 sm:mx-4 lg:my-0"
                    href="#">Capcom</a> -->
            </div>
        </div>

        <div class="mt-10 grid sm:grid-cols-3 gap-3">
            <product-list v-for="product in filterItem" :key="product.keyId" :product="product" />
        </div>

        <pre>{{ items }}</pre>
    </div>
</template>

<script>
import axios from "axios";
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
            this.fetchGameDev()
        },
        data(){
            return {
                // imageURL: "http://localhost:3000/keygames/"
                getGameDev:[],
                devId: null
            }
        },


        methods: {
            ...mapActions({
                loadProducts: "loadProducts"
            }),
            async fetchGameDev(){
                try {
                    const { data } = await axios.get('http://localhost:3000/gamedeveloper/')
                    if (data) {
                        // console.log(data);
                        this.getGameDev = data
                    }
                }   catch (error) {
                        console.error(error)
                }
            },
            setDevId(id){
                this.devId = id
                console.log(this.devId);
            }

        },

        computed: {
            ...mapGetters({
                items: "items"
            }),
            filterItem(){
                if (this.devId != null) {
                    return this.$store.state.items.data.filter(list => {
                        return list.gamedeveloper_devId == this.devId
                    })
                }
                // return this.$store.state.items.data.filter(list => {
                //     return list.gamedeveloper_devId == this.devId
                // })
                return this.$store.state.items.data
            }
        }
    }
</script>

<style>

</style>