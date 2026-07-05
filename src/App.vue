<template>
  <div>
    <div class="container">
        <div class="slide">
            <div id="navbar">
                <h1>ON-VUTHY</h1>
                <ul>
                    <li>Home</li>
                    <li>About Me</li>
                    <li>Skill</li>
                    <li>Contect</li>
                </ul>
            </div>
        </div> 
    </div>

    <div class="banner">
        <div class="name">
            <p class="p">Welcome 👋</p>
            <h1 class="typing">I'm ON VUTHY</h1>
            <h1 class="major">Web Developer</h1>
            <p>Hi, I'm On Vuthy, a passionate Frontend Developer who enjoys building modern, responsive, and user-friendly websites. I love turning ideas into beautiful digital experiences using HTML, CSS, JavaScript, Vue.js, and React.</p>
            <div class="social">
                <div class="icon d-flex">
                    <a target="_blank" href="https://web.facebook.com/on.vuthy.2025"><i class="bi bi-facebook"></i></a>
                </div>
                <div class="icon d-flex">
                    <a target="_blank" href="https://t.me/on_vuthy"><i class="bi bi-telegram"></i></a>
                    
                </div>
                <div class="icon d-flex">
                    <a target="_blank" href="https://www.tiktok.com/@txzyzzzz"><i class="bi bi-tiktok"></i></a>
                    
                </div>
                <div class="icon d-flex">
                    <a target="_blank" href="https://github.com/savuthy100-crypto"><i class="bi bi-github"></i></a> 
                </div>
            </div>
            <div class="download-btn">
                <a target="_blank" href="./file/On_vuthy.pdf" download >
                    Download CV
                </a>
            </div>
        </div>
        <div class="profile">
            <div class="profile1">
                <img src="./assets/photo_2026-07-03_21-00-41.jpg" alt="">
            </div>
            <div class="profile2"></div>
            <div class="profile3"></div>
        </div>  
    </div>
  </div>
</template>

<script>
</script>

<style>
        body{
            font-family: monospace;
            padding: 0px;
            margin: 0px;
            box-sizing: border-box;
            transform: all 1s ease;
            animation-name:corlorchange;
            animation-iteration-count:infinite ;
            animation-duration: 5s;
            animation-direction: alternate-reverse;
        }
        .container{
            animation-name:drop ;
            animation-duration:1s;
        }
        #navbar{
            border: 1px solid gray;
            padding:0px 80px;
            margin-top: 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 60px;
            width: 80%;
            background-color: rgba(0, 54, 54,0.6);
            border-radius: 250px;
            animation-name :slideLeft;
            animation-duration:3s;
        }
        h1{
            color: white;
        }
        @keyframes drop{
            from{
                transform: translateY(-100px);
            }
        }
        @keyframes slideLeft {
            from{
                transform: translateY(-100px);
                transform: scale(0,1);
            }
        }ul{
            display: flex;
            justify-content: space-around;
            align-items: center;
            gap: 50px;
        }
        li{
            list-style: none;
            color: white;
            font-size: 18px;
        }
        li:hover{
            text-shadow: 0px 0px 30px gray;
        }
        .profile{
            position: relative;
            display:flex;
            justify-content: center;
            align-items: center;
            animation: slidel 2s normal,slideu 3s infinite alternate-reverse;
        }
        @keyframes slidel{
            from{
                transform: translateX(500px);
            }
        }
        @keyframes slideu{
            from{
                transform: translateY(-15px);
            }
        }
        .profile1{
            border: 2px solid white;
            z-index: 100;
            position: absolute;
            width: 500px;
            height: 500px;
            border-radius: 100%;
            background-color: aliceblue;
            animation-name:linear;
            animation-iteration-count:infinite ;
            animation-duration: 2s;
            animation-direction: alternate-reverse;
            overflow: hidden;
        }
        .profile1 img{
            object-fit: cover;
            width: 500px;
        }
        .profile2{
            opacity: 20%;
            width: 500px;
            height: 500px;
            border-radius: 100%;
            background-color: aliceblue;
            animation-name:zom;
            animation-iteration-count:infinite ;
            animation-duration: 2s;
            animation-direction: alternate-reverse;
        }
        .profile3{
            position: absolute;
            opacity: 20%;
            width: 500px;
            height: 500px;
            border-radius: 100%;
            background-color: aliceblue;
            animation-name:zom1;
            animation-iteration-count:infinite ;
            animation-duration: 2s;
            animation-direction: alternate-reverse;
        }
        @keyframes zom1{
            from{
                transform: scale(1.1,1.1);
            }
        }
        @keyframes linear{
            100%{
                box-shadow: 0px 0px 50px gray;
            }
        }
        @keyframes zom{
            from{
                transform: scale(1.2,1.2);
            }
        }.slide{
            display: flex;
            justify-content: center;
            animation-name:slide;
            animation-iteration-count:infinite ;
            animation-duration: 3s;
            animation-direction: alternate-reverse;
        }
        @keyframes slide{
            from{
                transform: scale(0.97,1);
            }
        }
        @keyframes corlorchange{
            0%{background-color: rgb(0, 20, 5);}
            40%{background-color: rgb(0, 30, 5);}
            80%{background-color: rgb(0, 40, 5);}
            100%{background-color: rgb(0, 35, 5);}           
        }
        .banner{
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 50px;
            padding: 80px 180px;
        }
        .p{
            font-size: 35px;
            color: white;
            padding: 0;
            margin: 0;
        }
        .typing{
            background: linear-gradient(90deg, #7a47f1, #5798ff, #06b6d4);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            color: transparent;
            font-size: 6em;
            font-weight: 900;
            font-family: monospace;
            letter-spacing: 1px;
            border-right: 5px solid white;
            width: 90%;
            background-size: 300% 100%;
            white-space: nowrap;
            overflow: hidden;
            animation:typing 2s steps(12),cursor 1s step-end infinite alternate-reverse,color1 3s linear infinite;
            padding: 0;
            margin: 0;
        }
        .major{
            padding: 0;
            margin: 0;
            font-weight: bold;
            font-size: 40px;
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
        }@keyframes typing{
            from{
                width: 0;
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
        p{
            font-size: 20px;
            color: grey;
        }
        .icon{
            width: 50px;
            height: 50px;
            border-radius: 100%;
            border: 2px solid grey;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .icon:hover{
            background-color: green;
            color: black;
        }
        i:hover{
            color: black;
        }
        i{
            font-size: 30px;
            color: green;
        }
        .social{
            display: flex;
            align-items: center;
            gap: 20px;
            margin-bottom:50px;
        }
        a{
            text-decoration: none;
            color:black;
        }
        .download-btn{
            width: 130px;
            font-size: 20px;
            padding: 15px 25px;
            border-radius: 20px;
            border: 1px solid white;
            background-color: rgb(1, 87, 1);
            font-weight: bold;
            animation: over 5s infinite alternate-reverse;
        }
        .download-btn:hover{
            background-color: green;
            animation: over 5s infinite alternate-reverse;
        }
        @keyframes over{
            100%{
                box-shadow: 0px 0px 15px #7a47f1;
            }
        }
    </style>