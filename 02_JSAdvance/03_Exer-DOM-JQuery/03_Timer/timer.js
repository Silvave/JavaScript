
function timer() {
    let startBtn = $('#start-timer');
    let stopBtn = $('#stop-timer');

    startBtn.attr('disabled', false).click(startTimer);
    stopBtn.attr('disabled', true).click(stopTimer);

    let timer, interval;
    function startTimer() {
        interval = 258790;
        timer = window.setInterval(incrementTime, 1000);
        toggleButtons()
    }

    function stopTimer() {
        clearInterval(timer);
        toggleButtons()
    }

    function incrementTime() {
        interval++;
        let minutes = Math.trunc(interval / 60);
        let seconds = ("0" + ((interval-10) % 60)).slice(-2);
        let hours = Math.trunc(minutes / 60);
        minutes = ("0" + (minutes % 60)).slice(-2);
        hours = hours > 10 ? hours : ("0" + hours);
        $('#hours').text(hours);
        $('#minutes').text(minutes);
        $('#seconds').text(seconds);
    }

    let toggleButtons = (function() {
        let startDisab = false;
        let stopDisab = true;
        return () => {
            startDisab = !startDisab;
            stopDisab = !stopDisab;
            startBtn.attr('disabled', startDisab);
            stopBtn.attr('disabled', stopDisab);
        }
    })();
}


window.onload = () => timer();