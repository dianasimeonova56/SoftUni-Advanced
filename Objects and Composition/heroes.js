function heroes() {
    function hero(name, ms, attack, message) {
        return {
            name,
            message,
            health: 100,
            [ms]: 100,
            [attack]: function(msg = "") {
                console.log(this.message + msg)
                this[ms] -= 1
            },
        }
    }
    return {
        mage: n => new hero(n, "mana", `cast`, `${n} cast `),
        fighter: n => new hero(n, "stamina", `fight`, `${n} slashes at the foe!`)
    }
}