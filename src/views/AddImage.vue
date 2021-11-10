<template>
  <div>
      <div class="md:px-5 border px-5 py-3 xl:py-8 m-3 rounded-md md:mx-32 xl:mx-96 shadow-md xl:my-48 my-28">
          <h1 class="mb-10 text-4xl text-center">Add Image</h1>
          <div class="flex flex-col mb-6 gap-3 md:px-10 lg:px-48">
                <label>Image</label>
                <input type="file" id="img" name="img" accept="image/jpeg" v-on:change="handlePic">
          </div>
      </div>

      <!-- <pre>{{ keyGameByUserId }}</pre> -->
    <pre>{{ lastKeyGame }}</pre>
  </div>
</template>

<script>
import axios from "axios";
export default {
    name: "AddImage",
    created() {
        this.fetchKeyGameByUserId(localStorage.getItem("userId"))
    },
    data () {
        return {
            keyGameByUserId: [],
            lastKeyGame: {},
            imageName: "",
            imageFile: null
        }
    },
    methods: {
        async fetchKeyGameByUserId(userid) {
            const response = await axios.get("http://localhost:3000/keygames/getkeybyuserid/" + userid)
            // console.log(response.data.data);
            this.keyGameByUserId = response.data.data
            this.lastKeyGame = this.keyGameByUserId[this.keyGameByUserId.length -1]
            // console.log(this.keyGameByUserId[this.keyGameByUserId.length -1]);
            console.log(this.lastKeyGame);
        },

        handlePic(event) {
            this.imageName = event.target.files[0].name;
            //console.log(this.imageName);
            this.imageFile = event.target.files[0]
            //console.log(event.target.files[0]);
            console.log(this.imageFile);
        },
    }
}
</script>

<style>

</style>