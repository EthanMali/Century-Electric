window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var pageUpBtn = document.querySelector('.page-up-btn');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        pageUpBtn.style.display = "block";
    } else {
        pageUpBtn.style.display = "none";
    }
}

function scrollToTop() {
    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, currentScroll - (currentScroll / 10));
    }
}