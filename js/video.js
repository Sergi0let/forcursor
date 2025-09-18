const video =
	document.getElementById('video') ||
	document.querySelector('video.elementor-video');
const playButton = document.getElementById('playButton');

// Перевіряємо, чи існує video елемент перед встановленням властивостей
if (video) {
	video.loop = false; // на всякий случай
}

if (playButton && video) {
	playButton.addEventListener('click', function () {
		console.log('мы тут');
		if (video.ended) {
			video.currentTime = 0;
			video.play();
			playButton.style.display = 'none';
		} else {
			video.muted = !video.muted;
			playButton.style.display = 'none';
		}
	});
}

if (video && playButton) {
	video.addEventListener('ended', function () {
		console.log('видео закончилось');
		playButton.style.display = 'block';
		playButton.style.backgroundImage = 'url("../images/repeat.png")';
	});
}
