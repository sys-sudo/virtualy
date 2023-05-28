window.addEventListener('load', function() {
    var loadingScreen = document.getElementById('loading-screen');
    var loadingAnimation = document.getElementById('loading-animation');
    
    var minDelay = 2000; // Waktu penundaan minimum (dalam milidetik)
    var maxDelay = 3000; // Waktu penundaan maksimum (dalam milidetik)
    var randomDelay = Math.random() * (maxDelay - minDelay * 1) + minDelay; // Menghasilkan waktu penundaan acak
    
    setTimeout(function() {
      loadingAnimation.style.display = 'none'; // Menghilangkan gambar loading
      loadingScreen.style.display = 'none'; // Menghilangkan loading screen
    }, randomDelay); // Mengatur waktu penundaan acak
  });