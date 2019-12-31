var entries = document.getElementsByClassName("entry");

var onEntryClick = function(e) {
	const target = e.target.className
	if ((target === "title") || (target === "location") || (target === "year") || (target === "entry") || (target === "entry expanded")) {
		this.classList.toggle("expanded");
	}
  else {
    console.log(target);
  }
};

for (var i = 0; i < entries.length; i++) {
	entries[i].addEventListener('click', onEntryClick, false);
}

var slideIndex = 1;
const slideshows = document.getElementsByClassName("slideshow-container");
for (var i = 0; i < slideshows.length; i++) {
  showSlides(1, slideshows[i]);
}

// Next/previous controls
function plusSlides(n, elem) {
  const container = elem.parentElement;
  showSlides(slideIndex += n, container);
}

function showSlides(n, elem) {
  var i;
  var slides = elem.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

var lazyLoadInstance = new LazyLoad({
});
