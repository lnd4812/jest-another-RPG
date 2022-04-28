function Character() {}

Character.prototype.isAlive = function() {
    if (this.health ===0) {
        return false;
    }
    return true;
};

Character.prototype.getHealth= function() {
    return `${this.name}'s health is now ${this.health}!`;
};

Character.prototype.reduceHealth = function(health) {
    this.health -= health;

    if (this.health < 0) {
        this.health = 0;
    }
};

module.exports = Character;
console.log(new Character().getHealth());