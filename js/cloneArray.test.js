const cloneArray = require('./cloneArray')

test('duplique le tableau', () => {
    const array = [1, 2, 3]
    expect(cloneArray(array)).toEqual(array) // ici, on utilise toEqual car on vérfie les références et non les valeurs
    expect(cloneArray(array)).not.toBe(array) // on vérifie que notre fonction copie bien une nouvelle version du tableau
}) 