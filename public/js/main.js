var videoPlayer = document.getElementById("video-player")

videoPlayer.play();

function changeVideo(id) {
    var videoSource = document.getElementById('video-source');

    switch (id) {
        case 1:
            videoSource.setAttribute('src', 'videos/Poke3D.mp4');
            break
        case 2:
            videoSource.setAttribute('src', 'videos/MagicPaper.mp4');
            break
        case 3:
            videoSource.setAttribute('src', 'videos/apiCoreLocation.mp4');
            break
        case 4:
            videoSource.setAttribute('src', 'videos/realm.mp4');
            break
    }

    videoPlayer.load();

    var lis = document.getElementsByClassName("project-li");

    for (var i = 0; i < lis.length; i++) {
        lis[i].innerHTML = lis[i].innerHTML.replace('<ion-icon name="checkmark-circle-outline" role="img" class="md hydrated" aria-label="checkmark circle outline"></ion-icon>', '')
    }

    var li = document.getElementById("video" + id)
    li.innerHTML = '<ion-icon name="checkmark-circle-outline" role="img" class="md hydrated" aria-label="checkmark circle outline"></ion-icon>' + li.innerHTML
}


