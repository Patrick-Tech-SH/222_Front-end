<template>
    <div>

        <pre>{{ $route.params.id }}</pre>
        <pre>{{ itemToEdit }}</pre>
        <pre>{{ editItem }}</pre>
        <!-- <pre>{{ getGameDev }}</pre> -->

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
                <select class="border p-2" name="gamedev" v-model="itemToEdit.gamedeveloper.devId">
                    <option v-for="gamedev in getGameDev.data" :key="gamedev.devId" :value="gamedev.devId">
                        {{ gamedev.devName }}</option>
                </select>
                <label>Released on</label>
                <input type="date" class="border p-2" v-model="itemToEdit.releaseDate">
                <!-- <pre>{{ typeof itemToEdit.releaseDate }}</pre> -->
                <!-- <label>Old Date {{ itemToEdit.releaseDate }}</label> -->
                <label>Detail</label>
                <textarea v-model="itemToEdit.gameDetail" placeholder="write here" cols="50" rows="5"
                    class="border p-2" />
                <label>Price</label>
                <input type="number" min="1" maxlength="6" class="border p-2" v-model="itemToEdit.price">
                <label>Platform</label>
                <div class="space-x-4" v-for="platform in getPlatform.data" :key="platform.pId">
                    <input type="radio" name="#" :value="platform.pId" v-model="itemToEdit.platform.pId">
                    <label>{{ platform.pName }}</label>
                    <!-- <input type="radio" name="#">
                    <label>2</label>
                    <input type="radio" name="#">
                    <label>3</label> -->
                </div>
                <button class="btn" @click="isEditTag =! isEditTag">ต้องการเปลี่ยน tag</button>
                <div v-if="isEditTag">
                    <label>Tag <i><b>***กรุณาเลือกใหม่อีกครั้ง</b></i></label>
                    <div class="space-x-4" v-for="tag in getTag.data" :key="tag.tagId">
                    <input type="checkbox" v-model="itemToEdit.gametags" :value="{id: tag.tagId}">
                    <label>{{ tag.tagName }}</label>
                    <!-- <input type="checkbox">
                    <label>2</label>
                    <input type="checkbox">
                    <label>3</label> -->
                    <!-- <pre>{{ itemToEdit.keycategory }}</pre> -->
                    </div>
                </div>

                <!-- <pre>{{ itemToEdit.keycategory[0].gametags_tagId }}</pre> -->
                <label>Image <i><b>***ถ้าไม่เปลี่ยนรูป ไม่ต้อง input มานะครับ</b></i></label>
                <input type="file" id="img" name="img" accept="image/jpeg" v-on:change="handlePic">
            </div>

            <div class="text-center" @click="sendEditItem">
                <button class="btn btn-accent mx-auto">Edit Item</button>
            </div>
        </div>
  </div>
</template>

<script>
import axios from "axios";
import dayjs from "dayjs";
export default {
    name: "EditItem",
    data () {
        return {
            getGameDev: [],
            getPlatform: [],
            getTag: [],
            itemToEdit:{
                gameName: "",
                gamedeveloper: {
                    devId: null
                },
                platform: {
                    pId: ""
                },
                releaseDate: ""
            },
            editItem: {
                gameName: "",
                gamedeveloper_devId: "",
                releaseDate: "",
                gameDetail: "",
                user_userId: Number(localStorage.getItem("userId")),
                price: "",
                Platform_pId: "",
                gametags: [],
            },
            isEditTag: false,
            imageName: "",
            imageFile: null,
        }
    },
    mounted(){
        // this.getItemToEdit(this.$route.params.id)
        // this.getItemToEdit(this.$route.params.id)
        this.getItemToEdit(this.$route.params.id)
        this.fetchGameDev()
        this.fetchPlatform()
        this.fetchTag()
        console.log(this.getTag);
    },
    methods:{

        async getItemToEdit(id) {
            const response = await axios.get('http://localhost:3000/keygames/getbyid/' + id)
            console.log(response.data.data[0]);
            this.itemToEdit = response.data.data[0]
            let newDate = new Date (this.itemToEdit.releaseDate)
            this.itemToEdit.releaseDate = newDate.toISOString().split('T')[0]
            console.log(this.itemToEdit);
            console.log(this.itemToEdit.keycategory[0]);
            this.itemToEdit.gametags = []
            for (let i of this.itemToEdit.keycategory){
                this.itemToEdit.gametags.push({"id": i.gametags_tagId})
            }

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

            // formatDate (date){
            //     let newDate = new Date (date)
            //     this.itemToEdit.releaseDate = newDate.toLocaleDateString('en-CA')
            //     // return newDate.toISOString().slice(0,10)
            //     console.log(newDate.toLocaleDateString('en-CA'));
            //     return newDate.toLocaleDateString('en-CA')
            // }

            async sendEditItem (){
                const content = {
                    gameName: this.itemToEdit.gameName,
                    gameDetail: this.itemToEdit.gameDetail,
                    price: this.itemToEdit.price,
                    releaseDate: dayjs(this.itemToEdit.releaseDate).format("YYYY-MM-DD"),
                    gamedeveloper_devId: this.itemToEdit.gamedeveloper.devId,
                    Platform_pId: this.itemToEdit.platform.pId,
                    user_userId: Number(localStorage.getItem("userId")),
                    gametags:this.itemToEdit.gametags
                }
                console.log(content);
                await axios.put(`http://localhost:3000/keygames/update/${this.$route.params.id}`, content ,{headers:{'Content-Type':'application/json', Authorization: 'Bearer ' + localStorage.getItem("token")}})
                if (this.imageFile != null) {
                    var formdata = new FormData();
                    formdata.append("file", this.imageFile);
                    axios.put(`http://localhost:3000/keygames/updateimage/${this.$route.params.id}`, formdata ,{headers:{"Content-Type": "multipart/form-data", Authorization: 'Bearer ' + localStorage.getItem("token")}})
                }
                alert("Edit Success")
                this.$router.push("/myitems")
                // this.$router.push('/myitems')
            },

            handlePic(event) {
                this.imageName = event.target.files[0].name;
                //console.log(this.imageName);
                this.imageFile = event.target.files[0]
                //console.log(event.target.files[0]);
                console.log(this.imageFile);
            },
    },
    computed: {

    }
}
</script>

<style>

</style>