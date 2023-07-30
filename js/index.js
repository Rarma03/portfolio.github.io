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
let ham_items = document.getElementById('ham_items');
let ham_icon = document.getElementById("ham_icon");

const show_items = () => {
    if (ham_items.style.display == "block") {
        ham_items.style.display = "none";
    }
    else {
        ham_items.style.display = "block";
    }
}