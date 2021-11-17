<template>
    <div>

        <pre>{{ $route.params.id }}</pre>
        <pre>{{ itemToEdit }}</pre>
        <pre>{{ getGameDev }}</pre>

        <div class="md:px-5 border px-5 py-3 xl:py-8 m-3 rounded-md md:mx-32 xl:mx-96 shadow-md xl:my-48 my-28">
            <h1 class="mb-10 text-4xl text-center">Edit Item</h1>
            <div class="flex flex-col mb-6 gap-3 md:px-10 lg:px-48">
                <label>Game Name</label>
                <input type="text" class="border p-2" v-model="itemToEdit.gameName">
                <label>Game Development Company</label>
                <!-- <div v-for="(item,i) in getGameDev" :key="i">
                    <select class="border p-2" v-model="newItem.gameDev">
                        <option v-for="gamedev in item" :key="gamedev.devId" :value="gamedev.devId">{{ gamedev.devName }}</option>
                    </select>
                </div> -->
                <select class="border p-2">
                    <option v-for="gamedev in getGameDev.data" :key="gamedev.devId" :value="gamedev.devId">
                        {{ gamedev.devName }}</option>
                </select>
                <label>Released on</label>
                <input type="date" class="border p-2">
                <label>Detail</label>
                <textarea v-model="itemToEdit.gameDetail" placeholder="write here" cols="50" rows="5" class="border p-2" />
                <label>Price</label>
                <input type="number" min="1" maxlength="6" class="border p-2">
                <label>Platform</label>
                <div class="space-x-4">
                    <input type="radio" name="#">
                    <label>{{  }}</label>
                    <!-- <input type="radio" name="#">
                    <label>2</label>
                    <input type="radio" name="#">
                    <label>3</label> -->
                </div>
                <label>Tag</label>
                <div class="space-x-4">
                    <input type="checkbox">
                    <label>{{  }}</label>
                    <!-- <input type="checkbox">
                    <label>2</label>
                    <input type="checkbox">
                    <label>3</label> -->
                </div>
                <label>Image</label>
                <input type="file" id="img" name="img" accept="image/jpeg">
            </div>

            <div class="text-center" @click="editItem">
                <button class="btn btn-accent mx-auto">Edit Item</button>
            </div>
        </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
    name: "EditItem",
    data () {
        return {
            getGameDev: [],
            getPlatform: [],
            getTag: [],
            itemToEdit:{}
        }
    },
    mounted(){
        // this.getItemToEdit(this.$route.params.id)
        this.getItemToEdit(this.$route.params.id)
        this.fetchGameDev()
        this.fetchPlatform()
        this.fetchTag()
    },
    methods:{

        async getItemToEdit(id) {
            const response = await axios.get('http://localhost:3000/keygames/getbyid/' + id)
            console.log(response.data.data[0]);
            this.itemToEdit = response.data.data[0]
            console.log(this.itemToEdit);
        },

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
            async fetchPlatform(){
                try {
                    const { data } = await axios.get('http://localhost:3000/platform/')
                    if (data) {
                        // console.log(data);
                        this.getPlatform = data
                    }
                }   catch (error) {
                        console.error(error)
                }
            },
            async fetchTag(){
                try {
                    const { data } = await axios.get('http://localhost:3000/gametags/')
                    if (data) {
                        // console.log(data);
                        this.getTag = data
                    }
                }   catch (error) {
                        console.error(error)
                }
            },
    },
    computed: {

    }
}
</script>

<style>

</style>