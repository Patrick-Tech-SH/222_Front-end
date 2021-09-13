<template>
  <!-- Navbar -->
  <div class="navbar bg-neutral-focus text-neutral-content w-full">
    <div class="flex-none px-2 md:mx-8">
      <span class="text-lg font-bold"> G-KEY Market </span>
    </div>

    <div class="flex-1 px-2 mx-8">
      <div class="items-stretch hidden md:flex">
        <router-link to="/" class="btn btn-ghost btn-sm rounded-btn"> Home </router-link>
        <router-link to="/about" class="btn btn-ghost btn-sm rounded-btn"> About </router-link>
        <router-link to="/market" class="btn btn-ghost btn-sm rounded-btn"> Market </router-link>
        <router-link to="/myitems" class="btn btn-ghost btn-sm rounded-btn"> My Items </router-link>
        <a class="btn btn-ghost btn-sm rounded-btn"> Cart </a>
      </div>
    </div>

    <div class="flex-none md:mr-8 mx:8">
      <div class="items-stretch hidden md:flex">
        <div class="avatar">
          <div class="rounded-full w-8 h-8 m-1">
            <img src="https://i.pravatar.cc/500?img=32" />
          </div>
        </div>
        <router-link to="/login" class="btn btn-ghost btn-sm rounded-btn m-1"> Login </router-link>
        <!-- <a class="btn btn-ghost btn-sm rounded-btn m-1"> Logout </a> -->
      </div>
    </div>

    <!-- Mobile Hamberger -->
    <div class="dropdown dropdown-left flex-none md:hidden">
      <button tabindex="0" class="btn-square btn-ghost">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
          class="inline-block w-6 h-6 stroke-current">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
      <ul tabindex="0" class="p-2 shadow menu dropdown-content bg-neutral rounded-box w-52 text-white">
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>About</a>
        </li>
        <li>
          <a>Market</a>
        </li>
        <li>
          <a>My Items</a>
        </li>
        <li>
          <a>Cart</a>
        </li>
        <li>
          <a>Login</a>
        </li>
        <li>
          <a>Logout</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Navbar",
  };
</script>

<style></style>