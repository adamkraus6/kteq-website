$(document).ready(function () {
	let slideshow = document.getElementById("historySlideshow")
	let start = 2, end = 74 // inclusive start and end
	let html = 	'<div class="item active">' +
					'<img src="img/history/kteq1.jpg" alt="KTEQ Archive Photo 1" width="auto" height="500">' +
					'<div class="carousel-caption">' +
						'<p>KTEQ Archive Photo 1</p>' +
					'</div>' +
				'</div>'
	for(let i = start; i <= end; i++) {
		html += '<div class="item">' +
					'<img src="img/history/kteq' + i + '.jpg" alt="KTEQ Archive Photo ' + i + '" width="auto" height="500">' +
					'<div class="carousel-caption">' +
						'<p>KTEQ Archive Photo ' + i + '</p>' +
					'</div>' +
				'</div>'
	}
	slideshow.innerHTML = html
});