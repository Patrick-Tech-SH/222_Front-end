<template>
    <div>
        <div class="flex flex-row px-2 mx-8 mt-16 justify-between">
            <div class="text-2xl font-bold mb-10">
                <p>My Items</p>
            </div>

            <div>
                <button class="btn btn-outline btn-accent">Add Item</button>
            </div>
        </div>

        <!-- ItemList -->

        <div class="mx-9 pt-10 grid sm:grid-cols-3 gap-3">
            <div>
                <div class="card bordered">
                    <figure>
                        <img src="https://picsum.photos/id/1005/400/250">
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title">Game Name</h2>
                        <p class="">Game Dev Company Name</p>
                        <p class="text-yellow-600">Price</p>
                        <p class="">Platform</p>
                        <div class="justify-end card-actions">
                            <button class="btn btn-info">Edit</button>
                            <button class="btn btn-error">Delete</button>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div class="card bordered">
                    <figure>
                        <img src="https://picsum.photos/id/1005/400/250">
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title">Game Name</h2>
                        <p class="">Game Dev Company Name</p>
                        <p class="text-yellow-600">Price</p>
                        <p class="">Platform</p>
                        <div class="justify-end card-actions">
                            <button class="btn btn-info">Edit</button>
                            <button class="btn btn-error">Delete</button>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div class="card bordered">
                    <figure>
                        <img src="https://picsum.photos/id/1005/400/250">
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title">Game Name</h2>
                        <p class="">Game Dev Company Name</p>
                        <p class="text-yellow-600">Price</p>
                        <p class="">Platform</p>
                        <div class="justify-end card-actions">
                            <button class="btn btn-info">Edit</button>
                            <button class="btn btn-error">Delete</button>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div class="card bordered">
                    <figure>
                        <img src="https://picsum.photos/id/1005/400/250">
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title">Game Name</h2>
                        <p class="">Game Dev Company Name</p>
                        <p class="text-yellow-600">Price</p>
                        <p class="">Platform</p>
                        <div class="justify-end card-actions">
                            <button class="btn btn-info">Edit</button>
                            <button class="btn btn-error">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "MyItems"
    }
</script>

<style>

</style>