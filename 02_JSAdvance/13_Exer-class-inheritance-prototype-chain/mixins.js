// let Computer = require('./computer');
/** Main code */
class Battery {
    constructor(manufacturer, expectedLife) {
        this.manufacturer = manufacturer;
        this.expectedLife = expectedLife;
    }
}

class Keyboard {
    constructor(manufacturer, responseTime) {
        this.manufacturer = manufacturer;
        this.responseTime = responseTime;
    }
}

class Monitor {
    constructor(manufacturer, width, height) {
        this.manufacturer = manufacturer;
        this.width = width;
        this.height = height;
    }
}

class Computer {
    constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {
        if (new.target === Computer) {
            throw new Error(`Can not instantiate from abstract class!`)
        }
        this.manufacturer = manufacturer;
        this.processorSpeed = processorSpeed;
        this.ram = ram;
        this.hardDiskSpace = hardDiskSpace;
    }
}

class Laptop extends Computer {
    constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery) {
        super(manufacturer, processorSpeed, ram, hardDiskSpace);
        this.weight = weight;
        this.color = color;
        this.battery = battery
    }

    get battery() {
        return this._battery;
    }

    set battery(battery) {
        if (!(battery instanceof Battery)) {
            throw new TypeError(`Passed prop battery is not an instance of class Battery!`)
        }
        this._battery = battery;
    }
}

class Desktop extends Computer {
    constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor) {
        super(manufacturer, processorSpeed, ram, hardDiskSpace)
        this.keyboard = keyboard;
        this.monitor = monitor;
    }

    get keyboard() {
        return this._keyboard
    }

    set keyboard(keyboard){
        if (!(keyboard instanceof Keyboard)) {
            throw new TypeError(`Passed prop newKeyboard is not an instance of class Keyboard!`)
        }
        this._keyboard = keyboard;
    }

    get monitor() {
        return this._monitor
    }

    set monitor(monitor){
        if (!(monitor instanceof Monitor)) {
            throw new TypeError(`Passed prop newMonitor is not an instance of class Monitor!`)
        }
        this._monitor = monitor;
    }
}

function createMixins() {
    function computerQualityMixin(classToExtend) {
        classToExtend.prototype.getQuality = function() {
            return (this.processorSpeed + this.ram + this.hardDiskSpace) / 3
        }
        classToExtend.prototype.isFast = function() {
            return this.processorSpeed > (this.ram / 4)
        }
        classToExtend.prototype.isRoomy = function() {
            return this.hardDiskSpace > Math.floor(this.ram * this.processorSpeed)
        }
    }
    
    function styleMixin(classToExtend) {
        classToExtend.prototype.isFullSet = function() {
            return this.manufacturer === this.keyboard.manufacturer &&
                    this.manufacturer === this.monitor.manufacturer
        }

        classToExtend.prototype.isClassy = function() {
            let isBatteryDurable = this.battery.expectedLife >= 3;
            let compColor = this.color === `Silver` || this.color === `Black`
            let isCompHeavy = this.weight < 3;

            return (isBatteryDurable && compColor && isCompHeavy)
        }
    }

    return {
        computerQualityMixin,
        styleMixin
    }
}

let computerQualityMixin = createMixins().computerQualityMixin;
let styleMixin = createMixins().styleMixin;

// let comp = new Computer(`12312`, 123, 3, 5)
// let battery = new Battery(`Samsung`, 5);
let keyboard = new Keyboard(`Dell`, 0.01);
let monitor = new Monitor(`Samsung`, 20, 30);
let laptop = new Laptop(`Dell`, 2.4, 8, 260, 1.6, `Silver`, new Battery(`Samsung`, 5));
let desktop = new Desktop(`Dell`, 2.6, 16, 560, keyboard, monitor);

// console.log(laptop)
// console.log(desktop)
// console.log(keyboard)
// console.log(monitor)
// console.log(battery)

computerQualityMixin(Computer)
styleMixin(Computer)

console.log(desktop.getQuality())
console.log(desktop.isFast())
console.log(desktop.isRoomy())
// console.log(desktop.isClassy())
console.log(desktop.isFullSet())
