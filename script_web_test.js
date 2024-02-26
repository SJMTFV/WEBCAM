
document.getElementById('btnWS').addEventListener("click", function() {
    var text = this.textContent;
    if (text =="Start Webcam") {
        this.textContent = "Stop Webcam";
        this.title = "Click to stop webcam";
        var currentDateTime = new Date();
        var timestampString = currentDateTime.toLocaleString();
        document.getElementById("timestamp").textContent = "Video Starts at: " + timestampString;
    }
    else {
        this.textContent = "Start Webcam";
    }
    
});

function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    var timeString = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
    document.getElementById('digitalClock').textContent = timeString;
}

setInterval(updateClock, 1000);
updateClock();