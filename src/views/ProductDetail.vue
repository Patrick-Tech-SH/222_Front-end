<template>
    <div>
        <!-- <pre>{{ itemById }}</pre> -->
        <div class="flex flex-col md:flex-row md:justify-around	md:mb-32 md:mt-16 ">
            <!-- image -->
            <div class="mt-6 p-6 md:w-6/12 md:h-2/4">
                <img :src="`${ url }/keygames/getimage/${ itemById.keyId }`" alt="product image" class="object-cover md:object-center mx-auto justify-items-center items-center">
            </div>

            <!-- detail -->
            <div class="mt-10 p-8 md:w-6/12">
                <div>
                    <p class="md:text-3xl md:mb-4">{{ this.itemById.gameName }}</p>
                    <p class="md:text-xl md:mb-2" >{{ this.itemById.gamedeveloper.devName }}</p>
                    <p class="md:text-xl md:mb-2">Released on: {{ this.itemById.releaseDate }}</p>
                    <p class="md:text-xl md:mb-2">Detail</p>
                    <p class=" w-full md:w-11/12 md:mb-4">{{ this.itemById.gameDetail }}</p>
                    <p class="md:text-xl md:mb-2">Price: {{ this.itemById.price }}</p>
                    <p class="md:text-xl md:mb-2">Platform: {{ this.itemById.platform.pName }}</p>
                    <p class="md:text-xl md:mb-2" v-for="tag in this.itemById.keycategory" :key="tag.kcId">Tag: {{ tag.gametags.tagName }} ,</p>
                </div>

                <!-- button -->
                <div class="justify-center card-actions">
                    <button class="btn btn-accent">Add to cart</button>
                </div>
            </div>
        </div>


        <!-- <pre>{{ $route.params.id }}</pre> -->

    </div>
</template>

<script>
import dayjs from "dayjs";
    import {
        mapActions,
        // mapGetters
    } from 'vuex'
    export default {
        name: "ProductDetail",
        props: {
            id:String
        },
        async mounted () {
            await this.getItemById(this.$route.params.id)
        },
        data () {
            return {
                // itemById:[]
                url: process.env.VUE_APP_MY_ENV_VARIABLE
            }
        },
        methods: {
            ...mapActions({
                getItemById: "getItemById"
            })
        },
        computed: {
            // ...mapGetters({
            //     itemById: "itemById",
            // }),

            itemById (){
                let item = this.$store.state.itemById
                item.releaseDate = dayjs(item.releaseDate).format("YYYY-MM-DD")
                return item
            }

        }

    }
</script>

<style>

</style>