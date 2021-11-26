<template>
    <div>
        <div class="px-2 mx-8 mt-16 text-2xl font-bold mb-10">
            Welcome Admin
        </div>
        <table class="border-collapse w-full">
            <thead>
                <tr>
                    <th
                        class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                        User</th>
                    <th
                        class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                        Status</th>
                    <th
                        class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                        Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in getAllUsers" :key="user.userId"
                    class="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                    <td
                        class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                        <span
                            class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">User</span>
                        {{ user.userName }}
                    </td>
                    <td
                        class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                        <span
                            class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Status</span>
                        <span class="rounded py-1 px-3 text-xs font-bold">{{ user.status }}</span>
                    </td>
                    <td
                        class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                        <span
                            class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Actions</span>
                        <a href="#" class="text-blue-400 hover:text-blue-600 underline" @click="changeStatus(user.userId)">Change Status</a>
                    </td>
                </tr>
            </tbody>
        </table>
        <pre>{{ getAllUsers }}</pre>
    </div>
</template>

<script>
import axios from "axios";
    export default {
        name:"AdminPage",
        mounted(){
            this.fetchAllUsers()
        },
        data(){
            return {
                getAllUsers:[],

            }
        },
        methods:{
            async fetchAllUsers(){
                const response = await axios.get("http://localhost:3000/admin/getuser", {headers:{Authorization: 'Bearer ' + localStorage.getItem("adminToken")}})
                console.log(response.data.data)
                this.getAllUsers = response.data.data
                // console.log(response.data);
            },

            async changeStatus(userId){
                // let header = 'Bearer ' + localStorage.getItem("adminToken")
                console.log('Bearer ' + localStorage.getItem("adminToken"));
                await axios.put(`http://localhost:3000/admin/manage/${userId}`, null,{headers:{Authorization: `Bearer ${localStorage.getItem("adminToken")}`}})
                .then(response => {
                    alert(response.data)
                    // this.$router.push("/adminpage")
                })
                this.$store.dispatch('refresh')
            },


        }
    }
</script>

<style>

</style>