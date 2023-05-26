var statusIcon = document.getElementById("status-icon");
var statusText = document.getElementById("status-text");
var HeartBeat = document.getElementById("heartbeat");

function checkOnlineStatus() {
  var isOnline = navigator.onLine;
  if (isOnline) {
    statusIcon.classList.remove("offline");
    statusIcon.classList.add("online");
    statusIcon.setAttribute("title", "Online");
    statusText.textContent = "Online";
    HeartBeat.classList.remove("offline");
    HeartBeat.classList.add("online");
    HeartBeat.setAttribute("title", "Online");
  } else {
    statusIcon.classList.remove("online");
    statusIcon.classList.add("offline");
    statusIcon.setAttribute("title", "Offline");
    statusText.textContent = "Offline";
    HeartBeat.classList.remove("online");
    HeartBeat.classList.add("offline");
    HeartBeat.setAttribute("title", "Offline");
  }
}

window.addEventListener("load", checkOnlineStatus);
window.addEventListener("online", checkOnlineStatus);
window.addEventListener("offline", checkOnlineStatus);

var ketversi = document.getElementById("keteranganversi");

function randomcolorversistatus() {
  var colors = ["Maroon", "Red", "Green", "Lime"];
  var randomColor = colors[Math.floor(Math.random() * colors.length)];
  var waktunya = Math.floor(Math.random() * (400 - 211 + 2) + 221 - 5);
  ketversi.style.color = randomColor;
  setTimeout(randomcolorversistatus, waktunya);
}

function randomcolorRed() {
  var colors = ["Maroon", "Red", "Green", "Lime"];
  var randomColor = colors[Math.floor(Math.random() * colors.length)];
  ketversi.style.color = randomColor;
  setTimeout(randomcolorRed, 413);
}

function checkVersiStatus() {
  randomcolorversistatus();
  var isOnline = navigator.onLine;
  if (isOnline) {
    ketversi.classList.remove("offline");
    ketversi.classList.add("online");
    ketversi.setAttribute("title", "Versi: 05");
    ketversi.textContent = "0.5";
  } else {
    ketversi.classList.remove("online");
    ketversi.classList.add("offline");
    ketversi.setAttribute("title", "Kamu Offline");
    ketversi.textContent = "Offline Mode";
  }
}

window.addEventListener("load", checkVersiStatus);
window.addEventListener("online", checkVersiStatus);
window.addEventListener("offline", checkVersiStatus);

var batasGaris1 = document.getElementById("garisPembatas1");

function Batas1() {
  var isOnline = navigator.onLine;
  if (isOnline) {
    batasGaris1.textContent = "|";
  } else {
    batasGaris1.textContent = "<|>";
  }
}

window.addEventListener("load", Batas1);
window.addEventListener("online", Batas1);
window.addEventListener("offline", Batas1);

var batasGaris2 = document.getElementById("garisPembatas2");

function Batas2() {
  var isOnline = navigator.onLine;
  if (isOnline) {
    batasGaris2.textContent = "|";
  } else {
    batasGaris2.textContent = "<|>";
  }
}

window.addEventListener("load", Batas2);
window.addEventListener("online", Batas2);
window.addEventListener("offline", Batas2);

function updateClock() {
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  hours = (hours < 10 ? "0" : "") + hours;
  minutes = (minutes < 10 ? "0" : "") + minutes;
  seconds = (seconds < 10 ? "0" : "") + seconds;
  var timeString = hours + ":" + minutes + ":" + seconds;
  document.getElementById("clock").innerHTML = timeString;
}

setInterval(updateClock, 1000);
var ListAudio = [
  'https://cdn.discordapp.com/attachments/1109603698507788288/1109611079128055950/Event.mp3',
  'https://cdn.discordapp.com/attachments/1109603698507788288/1109603981715587214/GTA_V_Welcome_to_Los_Santos.mp3',
  'https://cdn.discordapp.com/attachments/1109603698507788288/1110340838573232319/Tanah_Airku.mp3',
  'https://cdn.discordapp.com/attachments/1109603698507788288/1110346457392877658/Around_The-World.mp3',
  'https://cdn.discordapp.com/attachments/1109603698507788288/1110543701589114880/GTA_San_Andreas_Theme_Song_Remix.mp3',
  'https://cdn.discordapp.com/attachments/1109603698507788288/1110545503336276089/Meraih-Bintang.mp3'
];
var AudioBGM = document.getElementById('musik');
var MechKeyboard = document.getElementById('mechkeyboard');
var isAudioPlaying = true;
var shiftPBlocked = false;
var currentAudioIndex = 0;

function toggleAudio() {
  if (isAudioPlaying) {
    AudioBGM.pause();
    isAudioPlaying = false;
  } else {
    AudioBGM.play();
    isAudioPlaying = true;
  }
	if (navigator.mediaDevices && navigator.mediaDevices.volume) {
    navigator.mediaDevices.volume
      .requestAnimationFrame(function(volume) {
        if (volume > 5) {
          AudioBGM.play();
        }
		else {
          AudioBGM.pause();
		}
      })
      .catch(function() {
        // Tangani kesalahan jika tidak dapat mengakses kontrol volume
        console.error("Tidak dapat mengakses kontrol volume");
      });
  } else {
    // Tangani jika perangkat tidak mendukung akses kontrol volume
    console.error("Perangkat tidak mendukung akses kontrol volume");
  }
	
  updateIcon();
}

function updateIcon() {
  var playIcon = document.getElementById('playIcon');
  var stopIcon = document.getElementById('stopIcon');
  if (isAudioPlaying) {
    playIcon.style.display = 'none';
    stopIcon.style.display = 'inline-block';
  } else {
    playIcon.style.display = 'inline-block';
    stopIcon.style.display = 'none';
  }
}

function RandomBGM() {
  var random = Math.floor(Math.random() * ListAudio.length);
  AudioBGM.src = ListAudio[random];
  AudioBGM.play();
  currentAudioIndex = random;
  isAudioPlaying = true;
  updateIcon();
}

function playNextAudio() {
  currentAudioIndex = (currentAudioIndex + 1) % ListAudio.length;
  AudioBGM.src = ListAudio[currentAudioIndex];
  AudioBGM.play();
  isAudioPlaying = true;
  updateIcon();
}

RandomBGM();

AudioBGM.addEventListener('ended', function() {
  playNextAudio();
});

document.addEventListener('keyup', function(event) {
  if (!shiftPBlocked && event.shiftKey && event.code === 'KeyP') {
    toggleAudio();
    MechKeyboard.play();
    shiftPBlocked = true;
    setTimeout(function() {
      shiftPBlocked = false;
    }, 1280); // Blok tombol Shift + P selama 5 detik
  }
});


var audioElement = document.getElementById('musik');
var volumeSlider = document.getElementById('volumeSlider');
var volumeText = document.getElementById('volumeText');
var volumeSliderContainer = document.getElementById('volumeSliderContainer');

volumeSlider.addEventListener('input', function() {
  audioElement.volume = volumeSlider.value;
});

volumeSliderContainer.addEventListener('mouseenter', function() {
  volumeSlider.style.display = 'block';
  volumeText.style.display = 'none';
});

volumeSliderContainer.addEventListener('mouseleave', function() {
  volumeSlider.style.display = 'none';
  volumeText.style.display = 'block';
});

document.addEventListener('mousemove', function(event) {
  var mouseX = event.clientX;
  var mouseY = event.clientY;

  var volumeSliderRect = volumeSliderContainer.getBoundingClientRect();
  var volumeSliderX = volumeSliderRect.left;
  var volumeSliderY = volumeSliderRect.top;
  var volumeSliderWidth = volumeSliderRect.width;
  var volumeSliderHeight = volumeSliderRect.height;

  if (
    mouseX >= volumeSliderX &&
    mouseX <= volumeSliderX + volumeSliderWidth &&
    mouseY >= volumeSliderY &&
    mouseY <= volumeSliderY + volumeSliderHeight
  ) {
    volumeSlider.style.display = 'block';
    volumeText.style.display = 'none';
  } else {
    volumeSlider.style.display = 'none';
    volumeText.style.display = 'block';
  }
});

// Lazy loading untuk audio
AudioBGM.setAttribute('loading', 'lazy');
function lazyLoad() {
      var lazyElements = Array.from(document.querySelectorAll('[data-src]'));

      if ('IntersectionObserver' in window) {
        var lazyObserver = new IntersectionObserver(function (entries, observer) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              var lazyElement = entry.target;
              var src = lazyElement.getAttribute('data-src');
              var href = lazyElement.getAttribute('data-href');

              if (src) {
                lazyElement.setAttribute('src', src);
                lazyElement.removeAttribute('data-src');
              }

              if (href) {
                lazyElement.setAttribute('href', href);
                lazyElement.removeAttribute('data-href');
              }

              lazyObserver.unobserve(lazyElement);
            }
          });
        });

        lazyElements.forEach(function (lazyElement) {
          lazyObserver.observe(lazyElement);
        });
      } else {
        // Fallback for browsers that don't support Intersection Observer
        lazyElements.forEach(function (lazyElement) {
          var src = lazyElement.getAttribute('data-src');
          var href = lazyElement.getAttribute('data-href');

          if (src) {
            lazyElement.setAttribute('src', src);
            lazyElement.removeAttribute('data-src');
          }

          if (href) {
            lazyElement.setAttribute('href', href);
            lazyElement.removeAttribute('data-href');
          }
        });
      }
    }

    document.addEventListener('DOMContentLoaded', function () {
      lazyLoad();
    });
