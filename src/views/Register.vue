<template>
  <div>
    <div class="md:px-5 border px-5 py-3 xl:py-8 m-3 rounded-md md:mx-32 xl:mx-96 shadow-md xl:my-48 my-28">
      <h1 class="mb-10 text-4xl text-center">Register</h1>
      <div class="flex flex-col mb-6 gap-3 md:px-10 lg:px-48">
        <label class="">Username</label>
        <input type="text" class="border p-2" placeholder="Username" v-model="newUser.userName" @blur="this.checkForm()">
        <span v-if="validateName" class="text-error">This field is required</span>
        <label>Password</label>
        <input type="password" class="border p-2" placeholder="Password" v-model="newUser.password" @blur="this.checkForm()">
        <span v-if="validatePassword" class="text-error">This field is required</span>
        <label>Email</label>
        <input type="email" class="border p-2" placeholder="Email" v-model="newUser.email" @blur="this.checkForm()">
        <span v-if="validateEmail" class="text-error">This field is required</span>
        <label>First name</label>
        <input type="text" class="border p-2" placeholder="First name" v-model="newUser.fName" @blur="this.checkForm()">
        <span v-if="validateFirstName" class="text-error">This field is required</span>
        <label>Last name</label>
        <input type="text" class="border p-2" placeholder="Lastname" v-model="newUser.lName" @blur="this.checkForm()">
        <span v-if="validateLastName" class="text-error">This field is required</span>
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
        },
        validateName: false,
        validatePassword: false,
        validateEmail: false,
        validateFirstName: false,
        validateLastName: false,
      }
    },
    methods:{
      async addNewUser (){
        this.checkForm()
        if (this.validateName || this.validatePassword || this.validateEmail || this.validateFirstName || this.validateLastName) {
          return
        }
        await axios.post("http://localhost:3000/user/register" , this.newUser)
          .then(response => {
            alert(response.data)
            this.$router.push('/')
            return response.data;
          })
          .catch((error) => {
            console.log(error);
          })
        console.log("Add new user success!!");
        // console.log(this.newUser);
      },

      checkForm () {
        this.validateName = (this.newUser.userName == "") ? true:false
        this.validatePassword = (this.newUser.password == "") ? true:false
        this.validatePassword = (!(this.newUser.password.length > 6 && this.newUser.password.length < 12)) ? true:false
        this.validateEmail = (this.newUser.email == "") ? true:false
        this.validateFirstName = (this.newUser.fName == "") ? true:false
        this.validateLastName = (this.newUser.lName == "") ? true:false
        console.log(this.newUser.password.length);
      }
    }
  }
</script>

<style>

</style>