let zero = document.getElementById("zero");

const show_contact_form = () => {
    if (zero.style.visibility == "visible") {
        zero.style.visibility = "hidden";
    }
    else {
        zero.style.visibility = "visible";
    }
}

const hide_contact_form = () => {
    zero.style.visibility = "hidden";
}

//hamburger menu bar
let ham_items = document.getElementById('ham_items_wrapper');
let ham_icon = document.getElementById("ham_icon");
let nav_width = document.querySelector("#nav-width");


// we used javascript at a specific width and to do that we use window.innerwidth
const show_items = () => {
    // console.log(window.innerWidth);
    if (window.innerWidth < 768) {
        if (ham_items.style.display == "block") {
            ham_items.style.display = "none";
        }
        else {
            ham_items.style.display = "block";
        }
    }
}