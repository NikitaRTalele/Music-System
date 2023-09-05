let track_list=
[
    { songName:"Khairiyat ",path: "./Songs/Khairiyat Sad - Chhichhore.mp3", coverPath: "./MovieImages/Coka 2.0.webp", artist:"Pritam"
    },   
    { songName:"Raataan Lambiyan ",path: "./Songs/Raataan Lambiyan - Shershaah.mp3", coverPath: "./MovieImages/Coka 2.0.webp", artist:"Asees Kaur and Jubin Nautiyal"
    },
    { songName:"Maan Meri Jaan",path: "./Songs/Maan Meri Jaan(PagalWorld.com.se).mp3", coverPath: "./MovieImages/Coka 2.0.webp", artist:"King"  },
    { songName:"Dhokha",path: "./Songs/Dhokha - Arijit Singh.mp3", coverPath: "./MovieImages/Coka 2.0.webp", artist:"Arijit Singh"  },
    { songName:"Shayad",path: "./Songs/Shayad - Love Aaj Kal.mp3", coverPath: "./MovieImages/Coka 2.0.webp", artist:"Arijit Singh, Pritam"  },
    { songName:"Baarishon Mein",path: "./Songs/Baarishon Mein - Darshan Raval.mp3", coverPath: "./MovieImages/Coka 2.0.webp", artist:"Dharshan Raval,Gurpreet Saini"  },
    { songName:"Coka 2.0",path: "./Songs/Coka 2 - Liger.mp3", coverPath: "./MovieImages/Coka 2.0.webp", artist:"Sukh-E, Lisa Mishra"},
    { songName:"Dil Bechara",path:  "./Songs/Dil Bechara - Title Song.mp3", coverPath: "./MovieImages/Akdi Pakdi.webp",artist:" A R Rahman" },
    { songName:"Tu/You ",path: "./Songs/Tu You - Armaan Malik.mp3", coverPath: "./MovieImages/Rasiya.webp",artist:"Armaan Malik"   },
    { songName:"Dhol Bajaa",path: "./Songs/Dhol Bajaa - Darshan Raval.mp3", coverPath: "./MovieImages/Coka 2.0.webp", artist:"Dharshan Raval,Prakriti Giri, Javed-Mohsin"  },
    // { songName:" ",path: "./Songs/", coverPath: "./MovieImages/Coka 2.0.webp", artist:""  },

]

let master = document.getElementById("master");
let track_index=0;




let isPlaying = false;
let curr_track = document.createElement('audio');
let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".art");
let track_name = document.querySelector(".name");
let track_artist = document.querySelector(".track-artist");

function loadTrack(track_index) {
    
    curr_track.src = track_list[track_index].path;

    track_art.style.backgroundImage ="url('./MovieImages/Coka 2.0.webp')";
    track_name.textContent = track_list[track_index].songName;
    track_artist.textContent = track_list[track_index].artist;
    now_playing.textContent =
        "PLAYING " + (track_index + 1) + " OF " + track_list.length;
    }
master.addEventListener('click',()=>

{
    if(curr_track.paused)
    {
        curr_track.play();
        master.classList.remove('fa-play-circle');
        master.classList.add('fa-pause-circle');
     
    }
    else 
    {
        curr_track.pause();
        master.classList.add('fa-play-circle');
        master.classList.remove('fa-pause-circle'); 
    }
    
});


let previous=document.getElementById("previous");
previous.addEventListener('click',()=>
{
    if( track_index  > 0)
    {
        master.classList.add('fa-play-circle');
        master.classList.remove('fa-pause-circle');
        track_index -= 1 ;
    }
    else 
    {
        track_index = track_list.length-1;
    }
    loadTrack(track_index);
    curr_track.play();
})


let next=document.getElementById("next");
next.addEventListener('click',()=>
{
    if(isPlaying=true || track_index < track_list.length - 1)
    {
        master.classList.add('fa-pause-circle');
        master.classList.remove('fa-play-circle');
        track_index += 1;
    }
    else
    {

        track_index = 1;
        master.classList.add('fa-pause-circle');
        master.classList.remove('fa-play-circle');
    }
    loadTrack(track_index);
    curr_track.play();
    isPlaying=false;
})
// plays first song
loadTrack(track_index);




let like=document.getElementById("like");
like.addEventListener('click',()=>
{
    like.classList.add("fa-heart-o");
    // like.classList.remove("fa-heart");

})
