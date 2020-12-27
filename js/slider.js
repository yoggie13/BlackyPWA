var slider = document.getElementById('myRange');
var output = document.getElementById('price');

var gram = parseInt(slider.value);

output.innerHTML = gram + "g = " + calculate(gram) + "din";

slider.oninput = function() {
    gram = parseInt(this.value);

    output.innerHTML = gram + "g = " + calculate(gram) + "din";
}

slider.addEventListener("mousemove", function() {
    var x = slider.value;
    var color = 'linear-gradient(90deg,rgb(117,252,117)' + x + '%, rgb(214,214,214)' + x + '%)';
    slider.style.background = color;
})

function calculate(gram) {
    return price = Math.floor(gram / 200) * 360 + gram % 200 * 2;
}

function openForm() {

    var form = document.getElementById("form");
    var btn = document.getElementById("btn");
    var span = document.getElementsByClassName("close")[0];

    var gram = document.getElementById('myRange').value;

    document.getElementById('pr').innerHTML = "Naručujete " + gram + " grama kafe, po ceni od: " + calculate(gram) + "din.";

    form.style.display = "block";

    btn.onclick = function() {
        openForm();
    }

    span.onclick = function() {
        form.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == form) {
            form.style.display = "none";
        }
    }
}