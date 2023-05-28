// Javascript Powered by GoogleTranslate
function doTranslate() {
	var LanguagebyUser = navigator.language;
	if (LanguagebyUser !== "en") {
		var translateUrl = "https://translate.google.com/translate?sl=en&tl=" + LanguagebyUser + "&u=" + encodeURIComponent(window.location.href);
		window.location.href = translateUrl;
	}
}