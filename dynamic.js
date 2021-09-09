function openCity(evt, cityName) {
    var i,
        tabcontent,
        tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i]
            .className
            .replace(" active", "");
    }
    document
        .getElementById(cityName)
        .style
        .display = "block";
    evt.currentTarget.className += " active";
}

/* Filter search */
function filter() {
    var input,
        filter,
        ul,
        li,
        a,
        i;
    input = document.getElementById("s_input");
    filter = input
        .value
        .toUpperCase();
    ul = document.getElementById("myUL");
    h1 = ul.getElementsByTagName("section");
    for (i = 0; i < h1.length; i++) {
        txtValue = h1[i].textContent || h1[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            h1[i].style.display = "";
        } else {
            h1[i].style.display = "none";
        }
    }
}
