<template>
    <div>
        <!-- <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto my-52">
            <div class="card-body">
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Email</span>
                    </label>
                    <input type="text" placeholder="email" class="input input-bordered">
                </div>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Password</span>
                    </label>
                    <input type="text" placeholder="password" class="input input-bordered">
                    <label class="label">
                        <a href="#" class="label-text-alt">Forgot password?</a>
                    </label>
                </div>
                <div class="form-control mt-6">
                    <input type="button" value="Login" class="btn btn-primary">
                </div>
            </div>
        </div> -->

        <div class="md:px-5 border px-5 py-3 xl:py-8 m-3 rounded-md md:mx-32 xl:mx-96 shadow-md xl:my-48 my-28">
            <h1 class="mb-10 text-4xl text-center">Login</h1>
            <div class="flex flex-col mb-6 gap-3 md:px-10 lg:px-48">
                <label class="">Email</label>
                <input type="email" class="border p-2" v-model="user.email" @blur="checkLogin()">
                <span v-if="validateEmail" class="text-error">This field is required</span>
                <label>Password</label>
                <input type="password" class="border p-2" v-model="user.password" @blur="checkLogin()">
                <span v-if="validatePassword" class="text-error">This field is required</span>
            </div>

            <div class="text-right mb-5 md:px-10 lg:px-48 text-blue-700 font-bold underline">
                <router-link to="/register">Sign Up</router-link>
            </div>

            <div class="text-right mb-5 md:px-10 lg:px-48 text-blue-700 font-bold underline">
                <router-link to="/adminlogin">Admin</router-link>
            </div>

            <div class="text-center" @click="login">
                <button class="btn btn-active mx-auto">Login</button>
            </div>

            <!-- <pre>{{ user }}</pre> -->
        </div>

    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "Login",
        data() {
            return {
                user: {
                    email: "",
                    password: ""
                },
                validateEmail: false,
                validatePassword: false,
            }
        },
        methods: {
            login() {
                this.checkLogin()
                if (this.validateEmail || this.validatePassword) {
                    return
                }
                axios.post(process.env.VUE_APP_MY_ENV_VARIABLE+"/user/login", this.user)
                    .then((response) => {
                        // return response.data;
                        // console.log(response.data.token);

                        localStorage.setItem("token" ,response.data.token)
                        localStorage.setItem("userId" ,response.data.userId)
                        this.$store.state.token = response.data.token
                        this.$store.state.userId = response.data.userId
                        console.log(localStorage.getItem("token"));
                        console.log(localStorage.getItem("userId"));
                        console.log(this.$store.state.token);
                        console.log(this.$store.state.userId);
                        console.log("Login success!!");
                        this.$store.dispatch('refresh')
                        this.$router.push("/")
                    })
                    .catch((error) => {
                        alert(error.response.data)
                        // console.log(error);
                    })
            },

            checkLogin () {
                if (this.user.email == "") {
                    this.validateEmail = true
                }else{
                    this.validateEmail = false
                }
                if (this.user.password == "") {
                    this.validatePassword = true
                }else{
                    this.validatePassword = false
                }
            }
        }
    }
</script>

<style>

</style>