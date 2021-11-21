<template>
    <div>
        <div class="md:px-5 border px-5 py-3 xl:py-8 m-3 rounded-md md:mx-32 xl:mx-96 shadow-md xl:my-48 my-28">
            <h1 class="mb-10 text-4xl text-center">Admin Login</h1>
            <div class="flex flex-col mb-6 gap-3 md:px-10 lg:px-48">
                <label class="">Username</label>
                <input type="text" class="border p-2" v-model="admin.username">
                <!-- <span v-if="!validateEmail" class="text-error">This field is required</span> -->
                <label>Password</label>
                <input type="password" class="border p-2" v-model="admin.password">
                <!-- <span v-if="!validatePassword" class="text-error">This field is required</span> -->
            </div>

            <!-- <div class="text-right mb-5 md:px-10 lg:px-48 text-blue-700 font-bold underline">
                <router-link to="/register">Sign Up</router-link>
            </div> -->

            <div class="text-center" @click="login">
                <button class="btn btn-active mx-auto">Login</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AdminLogin",
        data() {
            return {
                admin: {
                    username: "",
                    password: "",
                }

            }
        },
        methods:{
            login(){

            }
        }
    }
</script>

<style>

</style>