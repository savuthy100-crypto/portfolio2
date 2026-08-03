<template>
    <div class="sticky top-4 cn md:mx-10">
        <div class="mx-2 bg backdrop-blur-lg p-3 border-white border-1 md:rounded-xl rounded-xl">
            <nav class="md:px-10 flex justify-between items-center">
                <div class="text-amber-700 text-2xl font-bold"><img class="h-8 m-0 p-0" src="../assets/e76caadb-8ed0-4166-baf6-9fb1db66388e-removebg-preview.png" alt="on_vuthy"></div>
                <ul class="hidden md:flex items-center gap-10">
                    <li class="font-bold text-white">
                        <a class="hover:text-fuchsia-500 relative pb-1 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full" href="#home">Home</a>
                    </li>
                    <li class="font-bold text-white">
                        <a class="hover:text-fuchsia-500 relative pb-1 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full" href="#about">About</a>
                    </li>
                    <li class="font-bold text-white">
                        <a class="hover:text-fuchsia-500 relative pb-1 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full" href="">Skill</a>
                    </li>
                    <li class="font-bold text-white">
                        <a class="hover:text-fuchsia-500 relative pb-1 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full" href="">Contact Me</a>
                    </li>
                </ul>
                <button @click="sidebar.toggleSidebar()" class="md:hidden text-white text-xl" >
                    ☰
                </button>
            </nav>
        </div>
    </div>
</template>
<script setup>
import { useOpenStore } from '../store/OpenSidebar';
const sidebar = useOpenStore();

</script>
<style>
.cn{
    animation: slideDrop 2s ease 1 alternate;
}
.bg{ 
    box-shadow: 0px 0px 5px rgb(135, 207, 235);
    background-color: rgba(0, 0, 20,0.5);
    animation: scale 4s 1 alternat;
}
@keyframes slideDrop{
    from{
        transform: translateY(-80px);
    }
}
@keyframes scale{
    from{
        transform: scale(0,1);
    }
}
@keyframes updown{
    from{
        transform: translateY(-5px);
    }
}
</style>