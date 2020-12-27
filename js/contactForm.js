function check() {

    var i = document.forms["contactForm"]["name"];
    var e = document.forms["contactForm"]["email"];
    var m = document.forms["contactForm"]["message"];

    if (i.value == "") {
        window.alert("Morate uneti ime");
        i.focus();
        return false;
    }

    if (e.value == "") {
        window.alert("Morate uneti imejl");
        e.focus();
        return false;
    }

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!e.value.match(mailformat)) {
        window.alert("Morate uneti mejl u važećem obliku");
        e.focus();
        return false;
    }
    if (m.value == "") {
        window.alert("Morate uneti poruku");
        m.focus();
        return false;
    }
}