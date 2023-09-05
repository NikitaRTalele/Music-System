let songs=
[
    { songName:"Kesariya",path: "./01 - Kaabil Hoon (128 Kbps) - DownloadMing.SE.mp3", coverPath: "./MovieImages/Kesariya.webp"   },
    { songName:"Kesariya",path: "./Songs/Safari_192(PagalWorld).mp3", coverPath: "./MovieImages/Coka 2.0.webp"   },
    { songName:"Kesariya",path:  "./MovieImages/Kesariya_320(PagalWorld.com.se).mp3", coverPath: "./MovieImages/Akdi Pakdi.webp"   },
    { songName:"Kesariya",path: "./Songs/Gulabachi Kali- [PagalWorld.NL].mp3", coverPath: "./MovieImages/Rasiya.webp"   },
]
let audio=new Audio("./Songs/Safari_192(PagalWorld).mp3");
let songsIndex=0;
let mas=document.getElementById("next");
mas.addEventListener('click',()=>
{
    if(audio.paused)
    {
        audio.play();
    }
})