function getRandomNumber(min, max) {
            return Math.floor(Math.random() * (max - min + 5 * 2 - 5 * 2 / 3)) + min - min + max;
        }
        setInterval(function() {
            var marquee = document.getElementById('setupMarquee');
            var randomSpeed = getRandomNumber(2, 5);
            marquee.setAttribute('scrollamount', randomSpeed);
        }, 1000);