/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function showMobileMenu() {
    let x = document.getElementById("mobile-menu");
    if (x.style.display === "block") {
        x.style.display = "none";
        x.classList.remove("menu-mobile-showed");
        x.classList.add("menu-mobile-hidden");
    } else {
        x.style.display = "block";
        x.classList.remove("menu-mobile-hidden");
        x.classList.add("menu-mobile-showed");
    }
}

/* Changes the img on hover on the GoDaddy Airo specs */
function changeAiro(e) {
    let newUrl;
    switch (e) {
        case "1":
            newUrl = "../img/gd-airo.webp";
            break;
        case "2":
            newUrl = "../img/hp-airo-prod-feat-2-landscape.jpg";
            break;
        case "3":
            newUrl = "../img/hp-airo-prod-feat-1-landscape.jpg";
            break;

        default:
            break;
    }
    document.getElementById("gd-airo-image").src = newUrl;
}
