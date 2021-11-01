<template>
    <div>
        <div class="flex flex-col md:flex-row md:justify-around	md:mb-32 md:mt-16 ">
            <!-- image -->
            <div class="mt-6 p-6 md:w-6/12 md:h-2/4">
                <img src="../assets/few.jpg" alt="product image" class="object-cover md:object-center">
            </div>

            <!-- detail -->
            <div class="mt-10 p-8 md:w-6/12">
                <div>
                    <p class="md:text-3xl md:mb-4">Game Name</p>
                    <p class="md:text-xl md:mb-2">Game Dev Company Name</p>
                    <p class="md:text-xl md:mb-2">Released on</p>
                    <p class="md:text-xl md:mb-2">Detail</p>
                    <textarea name="" id="" cols="30" rows="7" class=" w-full md:w-11/12">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, cumque incidunt sint labore explicabo iure sapiente quo voluptates provident doloribus assumenda reprehenderit nesciunt ratione est tenetur magni minus ea quam.
                    </textarea>
                    <p class="md:text-xl md:mb-2">Price</p>
                    <p class="md:text-xl md:mb-2">Platform</p>
                    <p class="md:text-xl md:mb-2">Tag</p>
                </div>

                <!-- button -->
                <div class="justify-center card-actions">
                    <button class="btn btn-accent">Add to cart</button>
                </div>
            </div>
        </div>

        <pre>{{ $route.params.id }}</pre>
    </div>
</template>

<script>
    export default {
        name: "ProductDetail",
        props: {
            id:String
        }
    }
</script>

<style>

</style>