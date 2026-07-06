<template>
    <div class="sticky top-0 z-50 container m-auto">
        <div class="mx-2 bg p-3 border-white border-1 md:rounded-3xl rounded-xl">
            <nav class="md:px-10 flex justify-between items-center">
                <div class="text-amber-700 text-2xl font-bold"><img class="h-8 m-0 p-0" src="../assets/e76caadb-8ed0-4166-baf6-9fb1db66388e-removebg-preview.png" alt="on_vuthy"></div>
                <ul class="hidden md:flex items-center gap-10">
                    <li class="font-bold text-white">Home</li>
                    <li class="font-bold text-white">About Me</li>
                    <li class="font-bold text-white">Skill</li>
                    <li class="font-bold text-white">Project</li>
                    <li class="font-bold text-white">Contact Me</li>
                </ul>
                <button class="md:hidden text-white text-xl">
                    ☰
                </button>
            </nav>
        </div>
    </div>

</template>
<script>
</script>

<style>
.container{
    animation: slideDrop 2s ease 1 alternate;
}
.bg{ 
    box-shadow: 0px 0px 5px skyblue;
    background-color: rgba(0, 0, 20,0.9);
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