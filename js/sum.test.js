const sum = require('./sum');

test("ajoute deux nombres", () => {
    // test en js vanilla
    // if (sum(1,2) === 3) {
    //     zsdfv
    // } else {
    //     throw Error
    // }

    // test avec JEST
    expect(sum(1, 2)).toBe(3) // on éxécute le script npm test afin de vérifier le test
})