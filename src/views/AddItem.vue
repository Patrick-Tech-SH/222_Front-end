<template>
    <div>
        <div class="md:px-5 border px-5 py-3 xl:py-8 m-3 rounded-md md:mx-32 xl:mx-96 shadow-md xl:my-48 my-28">
            <h1 class="mb-10 text-4xl text-center">Add Item</h1>
            <div class="flex flex-col mb-6 gap-3 md:px-10 lg:px-48">
                <label>Game Name</label>
                <input type="text" class="border p-2" v-model="newItem.gameName" @blur="checkForm">
                <span v-if="!validateName" class="text-error">This field is required</span>
                <label>Game Development Company</label>
                <!-- <div v-for="(item,i) in getGameDev" :key="i">
                    <select class="border p-2" v-model="newItem.gameDev">
                        <option v-for="gamedev in item" :key="gamedev.devId" :value="gamedev.devId">{{ gamedev.devName }}</option>
                    </select>
                </div> -->
                <select class="border p-2" v-model="newItem.gamedeveloper_devId" @blur="checkForm">
                    <option v-for="gamedev in getGameDev.data" :key="gamedev.devId" :value="gamedev.devId">{{ gamedev.devName }}</option>
                </select>
                <span v-if="!validateGameDev" class="text-error">This field is required</span>
                <label>Released on</label>
                <input type="date" class="border p-2" v-model="newItem.releaseDate" @blur="checkForm">
                <span v-if="!validateDate" class="text-error">This field is required</span>
                <label>Detail</label>
                <textarea v-model="newItem.gameDetail" placeholder="write here" cols="50" rows="5" class="border p-2" @blur="checkForm"/>
                <span v-if="!validateGameDetail" class="text-error">This field is required</span>
                <label>Price</label>
                <input v-model="newItem.price" type="number" min="1" maxlength="6" class="border p-2" @blur="checkForm">
                <span v-if="!validatePrice" class="text-error">This field is required</span>
                <label>Platform</label>
                <div class="space-x-4" v-for="platform in getPlatform.data" :key="platform.pId">
                    <input type="radio" name="#" :value="platform.pId" v-model="newItem.Platform_pId" @blur="checkForm">
                    <label>{{ platform.pName }}</label>
                    <!-- <input type="radio" name="#">
                    <label>2</label>
                    <input type="radio" name="#">
                    <label>3</label> -->
                </div>
                <span v-if="!validatePlatform" class="text-error">This field is required</span>
                <label>Tag</label>
                <div class="space-x-4" v-for="tag in getTag.data" :key="tag.tagId">
                    <input type="checkbox" :value="{id: tag.tagId}" v-model="newItem.gametags" @blur="checkForm">
                    <label>{{ tag.tagName }}</label>
                    <!-- <input type="checkbox">
                    <label>2</label>
                    <input type="checkbox">
                    <label>3</label> -->
                </div>
                <span v-if="!validateGameTag" class="text-error">This field is required</span>
                <label>Image</label>
                <input type="file" id="img" name="img" accept="image/jpeg" v-on:change="handlePic" @blur="checkForm">
                <span v-if="!validateFile" class="text-error">This field is required</span>
            </div>

            <div class="text-center" @click="addItem">
                <button class="btn btn-accent mx-auto">Add Item</button>
            </div>
        </div>

        <!-- <pre>{{ newItem }}</pre> -->

        <!-- <pre>{{ getTag }}</pre> -->
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
                newKeyId: "",
                validateName: true,
                validateGameDev: true,
                validateDate: true,
                validateGameDetail: true,
                validatePrice: true,
                validatePlatform: true,
                validateGameTag: true,
                validateFile: true,
            }
        },
        methods:{
            async fetchGameDev(){
                try {
                    const { data } = await axios.get(process.env.VUE_APP_MY_ENV_VARIABLE+'/gamedeveloper/')
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
                    const { data } = await axios.get(process.env.VUE_APP_MY_ENV_VARIABLE+'/platform/')
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
                    const { data } = await axios.get(process.env.VUE_APP_MY_ENV_VARIABLE+'/gametags/')
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
                this.checkForm()
                await axios.post(process.env.VUE_APP_MY_ENV_VARIABLE+"/keygames/add" , this.newItem)
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
                alert("Add Success!!");
                this.$router.push("/myitems")
            },

            async addImage () {
                var formdata = new FormData();
                formdata.append("file", this.imageFile);
                axios.post(process.env.VUE_APP_MY_ENV_VARIABLE+"/keygames/addimage/" + this.newKeyId, formdata),
                    {
                        "Content-Type": "multipart/form-data",
                    }
            },

            checkForm() {
                this.validateName = (this.newItem.gameName != "") ? true:false
                this.validateGameDev = (this.newItem.gamedeveloper_devId != "") ? true:false
                this.validateDate = (this.newItem.releaseDate != "") ? true:false
                this.validateGameDetail = (this.newItem.gameDetail != "") ? true:false
                this.validatePrice = (this.newItem.price > 0) ? true:false
                this.validatePlatform = (this.newItem.Platform_pId != "") ? true:false
                this.validateGameTag = (this.newItem.gametags.length > 0) ? true:false
                this.validateFile = (this.imageFile != null) ? true:false
            }
        },
    }
</script>

<style>

</style>