let createPart = document.getElementById('jsCreatePart');

let videoPart = document.createElement('video');
videoPart.id = "videoLoad";
videoPart.classList.add = "videoLoaded";
videoPart.src = "https://www.youtube.com/watch?v=NLi2v-Gq-5A&list=RDNLi2v-Gq-5A&start_radio=1";

let video = document.createElement("source");
video.src = "https://www.youtube.com/watch?v=NLi2v-Gq-5A&list=RDNLi2v-Gq-5A&start_radio=1";

videoPart.appendChild(video);
createPart.appendChild(videoPart);