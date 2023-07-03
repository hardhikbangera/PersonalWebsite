
    // Get the server time and display it in digital format
    function updateServerTime() {
        var serverTimeSpan = document.getElementById("server-time");
        var currentTime = new Date();
        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var seconds = currentTime.getSeconds();
        var ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // Handle midnight (0 hours)
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        var digitalTime = hours + ":" + minutes + ":" + seconds + " " + ampm;
        serverTimeSpan.textContent = digitalTime;
    }

    // Update server time every second
    setInterval(updateServerTime, 1000);
    function getVisitorCount() {
        // Make an API call to your server to retrieve the visitor count
        // Replace the URL below with the actual endpoint that returns the visitor count
        fetch('https://example.com/visitorCount')
            .then(response => response.json())
            .then(data => {
                var visitorCountSpan = document.getElementById("visitor-count");
                visitorCountSpan.textContent = data.count;
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    // Update visitor count on page load
    getVisitorCount();
