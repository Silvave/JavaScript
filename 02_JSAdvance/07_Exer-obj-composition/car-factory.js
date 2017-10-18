
function solve(carSpecs) {

    function findEngine(power) {
        let engine = {
            small: { power: 90, volume: 1800 },
            normal: { power: 120, volume: 2400 },
            monster: { power: 200, volume: 3500 },
        };

        for (let type in engine) {
            if (engine[type].power >= power)
                return engine[type]
        }
    }
    
    function checkWheels(wheelSize) {
        let sizeWheel = Math.round(wheelSize);
        if (sizeWheel % 2 != 0)
            return [sizeWheel, sizeWheel, sizeWheel, sizeWheel];
        else
            return [sizeWheel-1, sizeWheel-1, sizeWheel-1, sizeWheel-1];
    }

    return {
        model: carSpecs.model,
        engine: findEngine(carSpecs.power),
        carriage: {
            type: carSpecs.carriage,
            color: carSpecs.color
        },
        wheels: checkWheels(carSpecs.wheelsize)
    };
}

var carSpecs = { model: 'Opel Vectra',
        power: 110,
        color: 'grey',
        carriage: 'coupe',
        wheelsize: 17 };

console.log(solve(carSpecs));