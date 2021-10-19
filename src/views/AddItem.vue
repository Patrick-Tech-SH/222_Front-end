<template>
    <div>
        <div class="md:px-5 border px-5 py-3 xl:py-8 m-3 rounded-md md:mx-32 xl:mx-96 shadow-md xl:my-48 my-28">
            <h1 class="mb-10 text-4xl text-center">Add Item</h1>
            <div class="flex flex-col mb-6 gap-3 md:px-10 lg:px-48">
                <label class="">Game Name</label>
                <input type="text" class="border p-2">
                <label>Game Development Company</label>
                <select class="border p-2">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
                <label>Released on</label>
                <input type="date" class="border p-2">
                <label>Detail</label>
                <textarea placeholder="write here" cols="50" rows="5" class="border p-2" />
                <label>Price</label>
                <input type="text" class="border p-2">
                <label>Platform</label>
                <div class="space-x-4">
                    <input type="radio" name="#">
                    <label>1</label>
                    <input type="radio" name="#">
                    <label>2</label>
                    <input type="radio" name="#">
                    <label>3</label>
                </div>
                <label>Tag</label>
                <div class="space-x-4">
                    <input type="checkbox">
                    <label>1</label>
                    <input type="checkbox">
                    <label>2</label>
                    <input type="checkbox">
                    <label>3</label>
                </div>
                <label>Image</label>
                <input type="file" id="img" name="img" accept="image/*">
            </div>

            <div class="text-center">
                <button class="btn btn-accent mx-auto">Add Item</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:"AddProduct"
    }
</script>

<style>

</style>