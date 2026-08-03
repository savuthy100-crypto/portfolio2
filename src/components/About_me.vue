<template>
    <div class="md:pt-30 pt-210 mx-5 h-screen">
        <div class="lg:mx-40 flex items-center justify-center">
            <div class="w-fit p-8 rounded-3xl bg1 backdrop-blur-xl  border border-white/20 shadow-2xl relative overflow-hidden">
                <!-- Light Reflection -->
                <div class="md:flex justiffy-center items-center gap-10">
                    <div class="md:w-280">
                        <img src="../assets/photo_2026-07-03_21-00-41.jpg" alt="img" class=" border-5 border-white mb-5 md:mb-0">
                    </div>
                    <div class="flex-col justify-center">
                        <h1 class="font-bold text-2xl text-white mb-5 mx-auto">ON VUTHY</h1>
                        <p class="text-gray-200 text-lg">
                            I'm a Front-End Developer based in Cambodia with a passion for crafting clean, responsive, and user-friendly web experiences. My core toolkit includes Vue.js, JavaScript, HTML, CSS, and Tailwind CSS — technologies I use daily to bring designs to life with precision and performance.</p>
                        <p class="hidden md:flex text-gray-200 text-lg">I believe great frontend work sits at the intersection of visual design and technical execution. Whether I'm building a complex single-page application or optimizing a landing page for Core Web Vitals, I focus on writing maintainable code that scales.
                            Currently,
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style>
.bg1{
    background: linear-gradient(30deg, rgba(255, 255, 255, 0.2),rgba(255, 255, 255, 0.11) ,rgba(255, 254, 254, 0.2));
    animation: sc 3s infinite alternate,sh 3s infinite alternate;
}
@keyframes sh{
    from{
        box-shadow: 0px 0px 30px skyblue;
    }
}
</style>