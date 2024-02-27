window.onscroll = function() {
    var navbar = document.getElementById("navbar");
	var logo = document.getElementById("logo");
    if (window.pageYOffset > 700) {
        navbar.classList.add("compressed");
    } else {
        navbar.classList.remove("compressed");
    }
	if (window.pageYOffset > 700) {
        logo.classList.add("compressed");
    } else {
        logo.classList.remove("compressed");
    }
}
