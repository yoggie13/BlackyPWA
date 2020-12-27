var IIFE = function Timer(Saturday) {

    if (Saturday == null)
        Saturday = new Date("Nov 30, 2019 10:00:00");

    // Update the count down every 1 second
    var x = setInterval(function() {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = Saturday.getTime() - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (days <= 6 && hours < 20) {
            document.getElementById("SaturdayMessage").innerHTML = "";
        } else {
            document.getElementById("SaturdayMessage").innerHTML = "Današnja isporuka je na putu!";
        }


        // Display the result in the element with id="demo"
        document.getElementById("timer").innerHTML = days + " dana " + hours + " sati " +
            minutes + " minuta i " + seconds + " sekundi do sledeće isporuke";

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            Saturday.setDate(Saturday.getDate() + 7);
            Timer(Saturday);
        }
    });

}();