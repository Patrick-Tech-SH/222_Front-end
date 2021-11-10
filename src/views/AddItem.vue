<template>
    <div>
        <div class="md:px-5 border px-5 py-3 xl:py-8 m-3 rounded-md md:mx-32 xl:mx-96 shadow-md xl:my-48 my-28">
            <h1 class="mb-10 text-4xl text-center">Add Item</h1>
            <div class="flex flex-col mb-6 gap-3 md:px-10 lg:px-48">
                <label>Game Name</label>
                <input type="text" class="border p-2" v-model="newItem.gameName">
                <label>Game Development Company</label>
                <!-- <div v-for="(item,i) in getGameDev" :key="i">
                    <select class="border p-2" v-model="newItem.gameDev">
                        <option v-for="gamedev in item" :key="gamedev.devId" :value="gamedev.devId">{{ gamedev.devName }}</option>
                    </select>
                </div> -->
                <select class="border p-2" v-model="newItem.gamedeveloper_devId">
                    <option v-for="gamedev in getGameDev.data" :key="gamedev.devId" :value="gamedev.devId">{{ gamedev.devName }}</option>
                </select>
                <label>Released on</label>
                <input type="date" class="border p-2" v-model="newItem.releaseDate">
                <label>Detail</label>
                <textarea v-model="newItem.gameDetail" placeholder="write here" cols="50" rows="5" class="border p-2" />
                <label>Price</label>
                <input v-model="newItem.price" type="number" min="1" maxlength="6" class="border p-2">
                <label>Platform</label>
                <div class="space-x-4" v-for="platform in getPlatform.data" :key="platform.pId">
                    <input type="radio" name="#" :value="platform.pId" v-model="newItem.Platform_pId">
                    <label>{{ platform.pName }}</label>
                    <!-- <input type="radio" name="#">
                    <label>2</label>
                    <input type="radio" name="#">
                    <label>3</label> -->
                </div>
                <label>Tag</label>
                <div class="space-x-4" v-for="tag in getTag.data" :key="tag.tagId">
                    <input type="checkbox" :value="{id: tag.tagId}" v-model="newItem.gametags">
                    <label>{{ tag.tagName }}</label>
                    <!-- <input type="checkbox">
                    <label>2</label>
                    <input type="checkbox">
                    <label>3</label> -->
                </div>
                <label>Image</label>
                <input type="file" id="img" name="img" accept="image/jpeg" v-on:change="handlePic">
            </div>

            <div class="text-center" @click="addItem">
                <button class="btn btn-accent mx-auto">Add Item</button>
            </div>
        </div>

        <pre>{{ newItem }}</pre>

        <pre>{{ getTag }}</pre>
    </div>
</template>

<script>
import axios from "axios";

    export default {
        name:"AddProduct",
        created(){
            this.fetchGameDev();
            this.fetchPlatform();
            this.fetchTag();
        },
        data () {
            return {
                getGameDev: [],
                getPlatform: [],
                getTag: [],
                newItem: {
                    gameName: "",
                    gamedeveloper_devId: "",
                    releaseDate: "",
                    gameDetail: "",
                    user_userId: Number(localStorage.getItem("userId")),
                    price: "",
                    Platform_pId: "",
                    gametags: [],
                },
                imageName: "",
                imageFile: null,
                newKeyId: ""
            }
        },
        methods:{
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
            handlePic(event) {
                this.imageName = event.target.files[0].name;
                //console.log(this.imageName);
                this.imageFile = event.target.files[0]
                //console.log(event.target.files[0]);
                console.log(this.imageFile);
            },
            async addItem() {
                console.log(this.newItem);
                // this.$router.push("/addimage")
                await axios.post("http://localhost:3000/keygames/add" , this.newItem)
                .then((response) => {
                    this.newKeyId = response.data.keyId
                    console.log(this.newKeyId);
                    // return response.data;
                })
                .then(this.addImage)
                // .then(() => {
                //     var formdata = new FormData();
                //     formdata.append("file", this.imageFile);
                //     axios.post("http://localhost:3000/keygames/addimage/" + this.newKeyId, this.formdata),
                //         {
                //             "Content-Type": "multipart/form-data",
                //         }
                // })
                .catch((error) => {
                    console.log(error);
                })
            },

            async addImage () {
                var formdata = new FormData();
                formdata.append("file", this.imageFile);
                axios.post("http://localhost:3000/keygames/addimage/" + this.newKeyId, formdata),
                    {
                        "Content-Type": "multipart/form-data",
                    }
            }
        },
    }
</script>

<style>

</style>