<template>
    <div class="md:mx-10 lg:mx-20">
        <div class="relative md:static">
            <div class="w-full md:flex justify-between items-center lg:gap-20">
                <div class="px-5 m-auto mt-20 absolute md:static left-0 top-80">
                    <h1 class="text-white md:text-3xl text-xl">Welcome 👋</h1>
                    <div class="w-fit">
                        <h1 class="fw-bold m-auto text-4xl md:text-4xl lg:text-7xl font-bold w-full typing">I'm ON VUTHY</h1>
                    </div>
                    <h1 class="major mb-3 md:text-3xl lg:text-5xl text-2xl">Web Developer</h1>
                    <p class="text-gray-300 py-5 text-sm">Hi, I'm On Vuthy, a passionate Frontend Developer who enjoys building modern, responsive, and user-friendly websites. I love turning ideas into beautiful digital experiences using HTML, CSS, JavaScript, Vue.js, and React.</p>
                    <div class="flex gap-8">
                        <div class="flex justify-center items-center">
                            <a class="icon hover:bg-emerald-700 border-2 border-green-600 rounded-full px-2 py-1" target="_blank" href="https://web.facebook.com/on.vuthy.2025"><i class="text-2xl text-green-500 bi bi-facebook"></i></a>
                        </div>
                        <div class="flex justify-center items-center">
                            <a class="icon hover:bg-emerald-700 border-2 border-green-600 rounded-full px-2 py-1" target="_blank" href="https://t.me/on_vuthy"><i class="text-2xl text-green-500 bi bi-telegram"></i></a> 
                        </div>
                        <div class="flex justify-center items-center">
                            <a class=" icon hover:bg-emerald-700 border-2 border-green-600 rounded-full px-2 py-1" target="_blank" href="https://www.tiktok.com/@txzyzzzz"><i class="text-2xl text-green-500 font-bold bi bi-tiktok"></i></a>
                        </div>
                        <div class="flex justify-center items-center">
                            <a class=" icon hover:bg-emerald-700 border-2 border-green-600 rounded-full px-2 py-1" target="_blank" href="https://github.com/savuthy100-crypto"><i class="text-2xl text-green-500 bi bi-github"></i></a> 
                        </div>
                    </div>
                    <div class="mt-10">
                        <a target="_blank" href="../assets/On_vuthy (1).pdf" download class="down hover:bg-blue-600 text-lg font-bold bg-blue-900 text-white border-1 border-white rounded-xl p-3 px-10">
                            Download CV
                        </a>
                    </div>
                </div>
                <div class="absolute md:static left-0 top-15 w-full">
                    <div class="m-auto flex justify-center items-center md:mt-15 profile relative lg:w-[400px] lg:h-[400px] md:w-[330px] md:h-[330px] w-[300px] h-[300px] rounded-full">
                        <div class="border-white border-1 z-50 lg:w-[400px] lg:h-[400px] w-[300px] h-[300px] md:w-[350px] md:h-[350px] profile1 absolute overflow-hidden rounded-full">
                            <img class="object-cover" src="../assets/photo_2026-07-03_21-00-41.jpg" alt="img" >
                        </div>
                        <div class="profile2 bg-white opacity-35 absolute lg:w-[400px] lg:h-[400px] md:w-[330px] md:h-[330px] w-[300px] h-[300px] rounded-full"></div>
                        <div class="profile3 bg-white opacity-35 absolute lg:w-[400px] lg:h-[400px] md:w-[330px] md:h-[330px] w-[300px] h-[300px] rounded-full"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>
<style>
.down{
    animation: shadow 3s linear infinite alternate-reverse;
}
.icon:hover{
    box-shadow: 0px 0px 5px white;
}
.major{
    padding: 0;
    margin: 0;
    font-weight: bold;
    background: linear-gradient(90deg, #fbff00, #dd7703, #d47b06);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
    background-size: 300% 100%;
    animation: color1 3s linear infinite;
}
@keyframes cursor{
    50%{
        border-color: transparent;
    }
}
@keyframes shadow{
    from{
        box-shadow: 0px 0px 5px skyblue;
    }
}

@keyframes color1{
    from{
        background-position: 0;
    }
    to{
        background-position: 200%;
    }
}
@keyframes typing{
            from{
                width: 0;
            }
        }
.typing{
    background: linear-gradient(90deg, #7a47f1, #5798ff, #06b6d4);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
    font-weight: 900;
    font-family: monospace;
    letter-spacing: 1px;
    border-right: 3px solid white;
    background-size: 300% 100%;
    white-space: nowrap;
    overflow: hidden;
    animation:typing 2s steps(12),cursor 1.3s step-end infinite alternate-reverse,color1 3s linear infinite;
    padding: 0;
    margin: 0;
}
.profile{
    animation: shadow 2s infinite alternate,updown 2s infinite alternate-reverse;
}
.profile2{
    animation: zom 2s infinite alternate-reverse;
}
.profile3{
    animation: zom1 2s infinite alternate-reverse;
}
@keyframes shadow{
    from{
        box-shadow: 0px 0px 30px skyblue;
    }
}
@keyframes zom{
    from{
        transform:scale(1.18,1.18);
    }
}
@keyframes zom1{
    from{
        transform:scale(1.1,1.1);
    }
}
@keyframes updown{
    from{
        transform: translateY(-10px);
    }
}
</style>