
let Record = (() => {
    let id = -1;
    return class {
        constructor(temp, humid, pressure, windS) {
            this.id = ++id;
            this.temperature = temp;
            this.humidity = humid;
            this.pressure = pressure;
            this.windSpeed = windS;
        }
        toString() {
            let weatherInfoObj = [
                `Reading ID: ${this.id}`,
                `Temperature: ${this.temperature}*C`,
                `Relative Humidity: ${this.humidity}%`,
                `Pressure: ${this.pressure}hpa`,
                `Wind Speed: ${this.windSpeed}m/s`
            ];

            if (this.temperature < 20 &&
                (this.pressure < 700 || this.pressure > 900) &&
                this.windSpeed > 25) {
                weatherInfoObj.push("Weather: Stormy")
            }
            else {
                weatherInfoObj.push("Weather: Not stormy")
            }
            return weatherInfoObj.join('\n')
        }
    }
})();

let record1 = new Record(32, 66, 760, 12);
console.log(record1.toString());
console.log(`-----------------------------------`);
let record2 = new Record(10, 40, 680, 30);
console.log(record2.toString());

