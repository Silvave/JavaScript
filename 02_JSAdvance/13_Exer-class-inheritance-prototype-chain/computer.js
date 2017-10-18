
/** For Judge - it does not work in webstorm
 *  because it does not recognize the instances of classes
 *  when they are wrapped in function
 */
function createComputerHierarchy() {
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

    return {
        Battery,
        Keyboard,
        Monitor,
        Computer,
        Laptop,
        Desktop
    }
}

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

// let Computer = createComputerHierarchy().Computer;
// let Laptop = createComputerHierarchy().Laptop;
// let Battery = createComputerHierarchy().Battery;
// let Keyboard = createComputerHierarchy().Keyboard;
// let Monitor = createComputerHierarchy().Monitor;
// let Desktop = createComputerHierarchy().Desktop;

// let comp = new Computer(`12312`, 123, 3, 5)
let battery = new Battery(`Samsung`, 5);
let keyboard = new Keyboard(`Razor`, 0.01);
let monitor = new Monitor(`Samsung`, 20, 30);

let laptop = new Laptop(`Dell`, 2.4, 8, 260, 1.6, `grey`, new Battery(`Samsung`, 5));
let desktop = new Desktop(`Dell`, 2.6, 16, 560, keyboard, monitor);

console.log(laptop)
console.log(`-----------------`)

laptop.battery = new Battery(`Dell`, 10)

console.log(desktop)
console.log(desktop.keyboard)
desktop.keyboard = new Keyboard(`Logitech`, 0.02);
console.log(desktop.keyboard)
console.log(desktop.monitor)
// desktop.monitor = `asd`
console.log(desktop.monitor)

// modules.exports = createComputerHierarchy;
