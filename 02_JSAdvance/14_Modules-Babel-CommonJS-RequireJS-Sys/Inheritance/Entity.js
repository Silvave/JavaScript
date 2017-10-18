
class Entity {
    constructor(name) {
        if (new.target === Entity)
            throw new TypeError(`Can not be instantiated directly!`);
        this.name = name
    }
}

module.exports = Entity;