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
                <input type="text" class="border p-2">
                <label>Password</label>
                <input type="text" class="border p-2">
            </div>

            <div class="text-right mb-5 md:px-10 lg:px-48 text-blue-700 font-bold underline">
                <router-link to="/register">Sign Up</router-link>
            </div>

            <div class="text-center">
                <button class="btn btn-active mx-auto">Login</button>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Login"
    }
</script>

<style>

</style>