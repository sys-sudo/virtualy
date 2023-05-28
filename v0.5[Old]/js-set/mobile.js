var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

        // Jika perangkat adalah seluler, arahkan ke halaman mobile
        if (isMobile) {
            window.location.href = "mobile/";
		}