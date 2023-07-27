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
