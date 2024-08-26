/*window.onscroll = function() {
    shrinkHeader();
};

function shrinkHeader() {
    const header = document.querySelector('header');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 100) {
        header.classList.add('shrink');
    } else {
        header.classList.remove('shrink');
    }
}*/
/*window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('shrink');
    } else {
        header.classList.remove('shrink');
    }
});*/
document.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  const fullPage = document.querySelector(".full-page");

  if (window.scrollY > fullPage.clientHeight - header.clientHeight) {
    header.classList.add("shrunk");
  } else {
    header.classList.remove("shrunk");
  }
});
