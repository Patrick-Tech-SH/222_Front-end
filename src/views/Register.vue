<template>
  <div>
    <div class="md:px-5 border px-5 py-3 xl:py-8 m-3 rounded-md md:mx-32 xl:mx-96 shadow-md xl:my-48 my-28">
      <h1 class="mb-10 text-4xl text-center">Register</h1>
      <div class="flex flex-col mb-6 gap-3 md:px-10 lg:px-48">
        <label class="">Username</label>
        <input type="text" class="border p-2" placeholder="Username" v-model="newUser.userName">
        <label>Password</label>
        <input type="password" class="border p-2" placeholder="Password" v-model="newUser.password">
        <label>Email</label>
        <input type="email" class="border p-2" placeholder="Email" v-model="newUser.email">
        <label>First name</label>
        <input type="text" class="border p-2" placeholder="First name" v-model="newUser.fName">
        <label>Last name</label>
        <input type="text" class="border p-2" placeholder="Lastname" v-model="newUser.lName">
      </div>

      <pre>{{ newUser }}</pre>

      <div class="text-center" @click="addNewUser">
        <button class="btn btn-active mx-auto">Sign Up</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

  export default {
    name: "Register",
    data () {
      return {
        newUser:{
          userName: "",
          password: "",
          email: "",
          fName: "",
          lName: ""
        }
      }
    },
    methods:{
      async addNewUser (){
        await axios.post("http://localhost:3000/user/register" , this.newUser)
          .then((response) => {
            return response.data;
          })
          .catch((error) => {
            console.log(error);
          })
        console.log("Add new user success!!");
        // console.log(this.newUser);
      }
    }
  }
</script>

<style>

</style>