window.onscroll = function() {
    var navbar = document.getElementById("navbar");
	var logo = document.getElementById("logo");
    if (window.pageYOffset > 500) {
        navbar.classList.add("compressed");
    } else {
        navbar.classList.remove("compressed");
    }
	if (window.pageYOffset > 500) {
        logo.classList.add("compressed");
    } else {
        logo.classList.remove("compressed");
    }
}