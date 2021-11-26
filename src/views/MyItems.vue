<template>
    <div>
        <div class="flex flex-row px-2 mx-8 mt-16 justify-between">
            <div class="text-2xl font-bold mb-10">
                <p>My Items</p>
            </div>

            <div>
                <router-link to="/additem" class="btn btn-outline btn-accent">Add Item</router-link>
            </div>
        </div>

        <!-- ItemList -->

        <div class="mx-9 pt-10 grid sm:grid-cols-3 gap-3">
            <div v-for="item in keyGameByUserId" :key="item.keyId">
                <div class="card bordered">
                    <figure @click="this.$router.push(`/edititem/${ item.keyId }`)">
                        <img :src="`http://localhost:3000/keygames/getimage/${ item.keyId }`" class="h-full object-cover md:h-60 lg:h-96">
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title">{{ item.gameName }}</h2>
                        <p class="">{{ item.gamedeveloper.devName }}</p>
                        <p class="text-yellow-600">$ {{ item.price }}</p>
                        <p class="">{{ item.platform.pName }}</p>
                        <div class="justify-end card-actions">
                            <button class="btn btn-info" @click="this.$router.push(`/edititem/${ item.keyId }`)">Edit</button>
                            <button class="btn btn-error" @click="deleteKeyGame(item.keyId)">Delete</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <!-- <pre>{{ keyGameByUserId }}</pre> -->

    </div>
</template>

<script>
    import axios from "axios";
    const userid = localStorage.getItem("userId")
    export default {
        name: "MyItems",
        mounted() {
            if (this.$store.state.token == null) {
                this.$router.push("/")
            }
            this.fetchKeyGameByUserId(userid)
        },
        data() {
            return {
                keyGameByUserId: []
            }
        },
        methods: {
            async fetchKeyGameByUserId(userid) {
                const response = await axios.get("http://localhost:3000/keygames/getkeybyuserid/" + userid, {headers:{Authorization: 'Bearer ' + localStorage.getItem("token")}})
                console.log(response.data.data);
                this.keyGameByUserId = response.data.data
                console.log(this.keyGameByUserId);
                // console.log(this.keyGameByUserId[this.keyGameByUserId.length -1]);
            },


            async deleteKeyGame(id) {
                var r = confirm("Are you sure to delete " + id + " ?");
                if (r == true) {
                    await axios.delete("http://localhost:3000/keygames/deleteimage/" + id , {headers:{Authorization: 'Bearer ' + localStorage.getItem("token")}})
                    .then(()=> {
                        axios.delete("http://localhost:3000/keygames/del/"+id)
                    })
                    .catch((error) => {
                        console.log(error);
                    })
                    alert("Delete Success!!");

                } else {
                    return
                }

                this.$router.push("/myitems")
            }

        }
    }
</script>

<style>

</style>