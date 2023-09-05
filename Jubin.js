let track_list=
[
    { songName:"Raataan Lambiyan ",path: "./Songs/Raataan Lambiyan - Shershaah.mp3", coverPath: "./MovieImages/Coka 2.0.webp", artist:"Asees Kaur and Jubin Nautiyal"
    },
    { songName:"Lut Gaye",path: "./Songs/Lut Gaye - Jubin Nautiyal.mp3", coverPath: "./MovieImages/Coka 2.0.webp", artist:"Jubin Nautiyal"  },
    { songName:"Manike",path: "./Songs/Manike - Thank God.mp3", coverPath: "./MovieImages/Coka 2.0.webp", artist:"Jubin Nautiyal"  },
    { songName:"Dil Galti Kar Baitha Hai",path: "./Songs/Dil Galti Kar Baitha Hai - Jubin Nautiyal.mp3", coverPath: "./MovieImages/Coka 2.0.webp", artist:"Jubin Nautiyal"  },
    { songName:"Meri Aashiqui",path: "./Songs/Meri Aashiqui - Jubin Nautiyal.mp3", coverPath: "./MovieImages/Coka 2.0.webp", artist:"Jubin Nautiyal"  },

    
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
    like.classList.add("fa-heart");
    like.classList.remove("fa-heart-o");

})
