let track_list=
[
    { songName:"Kesariya",path: "./Songs/Kesariya(PagalWorld.com.se).mp3", coverPath: "./MovieImages/Coka 2.0.webp", artist:"Arijit Singh, Pritam"  },
    { songName:"Dhokha",path: "./Songs/Dhokha - Arijit Singh.mp3", coverPath: "./MovieImages/Coka 2.0.webp", artist:"Arijit Singh"  },
    { songName:"Aashiqui Aa Gayi",path: "./Songs/Aashiqui Aa Gayi - Radhe Shyam.mp3", coverPath: "./MovieImages/Coka 2.0.webp", artist:"Arijit Singh"  },
    { songName:"Khairiyat ",path: "./Songs/Khairiyat Sad - Chhichhore.mp3", coverPath: "./MovieImages/Coka 2.0.webp", artist:"Pritam, Arijit Singh"},   { songName:"",path: "", coverPath: "./MovieImages/Coka 2.0.webp", artist:"" },
    { songName:"Rasiya ",path: "./Songs/Rasiya - Brahmastra.mp3", coverPath: "./MovieImages/Coka 2.0.webp", artist:"Shreya Ghoshal, Tushar Joshi, Pritam"  },
    { songName:"Deva Deva",path: "./Songs/Deva Deva_192(PagalWorld.com.se).mp3", coverPath: "./MovieImages/Coka 2.0.webp", artist:"Arijit Singh"  },
    { songName:"Shayad",path: "./Songs/Shayad - Love Aaj Kal.mp3", coverPath: "./MovieImages/Coka 2.0.webp", artist:"Arijit Singh, Pritam"  },
    { songName:"Dhokha",path: "./Songs/Dhokha - Arijit Singh.mp3", coverPath: "./MovieImages/Coka 2.0.webp", artist:"Arijit Singh"  },
    { songName:"Pachtaoge",path: "./Songs/Pachtaoge - Arijit Singh.mp3", coverPath: "./MovieImages/Coka 2.0.webp", artist:"Arijit Singh"},

    
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
        track_index -= 1;
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
        master.classList.add('fa-play-circle');
        master.classList.remove('fa-pause-circle');
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
    like.classList.add("fa-heart");
    like.classList.remove("fa-heart-o");

})
