<template>
  <div>
    <div class="md:px-5 border px-5 py-3 xl:py-8 m-3 rounded-md md:mx-32 xl:mx-96 shadow-md xl:my-48 my-28">
      <h1 class="mb-10 text-4xl text-center">Register</h1>
      <div class="flex flex-col mb-6 gap-3 md:px-10 lg:px-48">
        <label class="">Username</label>
        <input type="text" class="border p-2" placeholder="Username">
        <label>Password</label>
        <input type="text" class="border p-2" placeholder="Password">
        <label>Email</label>
        <input type="text" class="border p-2" placeholder="Email">
        <label>First name</label>
        <input type="text" class="border p-2" placeholder="First name">
        <label>Last name</label>
        <input type="text" class="border p-2" placeholder="Lastname">
      </div>

      <div class="text-center">
        <button class="btn btn-active mx-auto">Sign Up</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Register"
  }
</script>

<style>

</style>