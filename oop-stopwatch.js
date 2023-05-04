// Small Stopwatch OOP

function Stopwatch() {
    let startTime;
    let endTime;
    let duration = 0;

    Object.defineProperty(this, 'duration', {
        get: function() {
            return duration;
        }
    });

    this.start = function() {
        const date = new Date();
        const hours = date.getHours() * 360;
        const minutes = date.getMinutes() * 60;
        const seconds = date.getSeconds();
        const milliseconds = date.getMilliseconds() / 1000;
        startTime = hours + minutes + seconds + milliseconds;
    };
    this.stop = function() {
        const date = new Date();
        const hours = date.getHours() * 360;
        const minutes = date.getMinutes() * 60;
        const seconds = date.getSeconds();
        const milliseconds = date.getMilliseconds() / 1000;
        endTime = hours + minutes + seconds + milliseconds;
        duration = Number.parseFloat(endTime - startTime).toFixed(2);
    };
    this.reset = function() {
        startTime = 0;
        endTime = 0;
        this.duration = 0;
    }
}