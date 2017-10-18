class TimeSpan {
    constructor(hours, minutes, seconds) {
        this.timeObj = this.parseData({
            hours,
            minutes,
            seconds
        })

        this.allTimeInSeconds = this.timeToSeconds(this.timeObj)
    }

    parseData(timeObj) {
        for (let key of Object.keys(timeObj)) {
            if (!Number.isInteger(timeObj[key])) {
                throw new RangeError(`Invalid ${key}: ${timeObj[key]}`)
            } else {
                timeObj[key] = parseInt(timeObj[key])
            }
        }

        return timeObj
    }

    timeToSeconds({hours, minutes, seconds}) {
        return hours * 3600 + minutes * 60 + seconds
    }

    toString() {
        let seconds = this.allTimeInSeconds % 60
        let minutes = Math.trunc(this.allTimeInSeconds / 60) % 60
        let hours = Math.trunc(this.allTimeInSeconds / (60 * 60))

        seconds = ('0' + seconds).slice(-2)
        minutes = ('0' + minutes).slice(-2)

        return `${hours}:${minutes}:${seconds}`
    }
}

// Tests
console.log('' + new TimeSpan(7, 8, 5));
console.log('' + new TimeSpan(12, 76, -5));

// Tests \w invalid params
// console.log('' + new TimeSpan('', 2.5, {}));
// console.log('' + new TimeSpan(3, 2.5, {}));
console.log('' + new TimeSpan(3, 2, {}));