const persone = [
    {
        nome : 'Carlo',
        cognome : 'Rossi',
        eta : 16
    },
    {
        nome : 'Luca',
        cognome : 'Russo',
        eta : 34
    },
    {
        nome : 'Francesca',
        cognome : 'Esposito',
        eta : 18
    },
    {
        nome : 'Tommaso',
        cognome : 'Ferrari',
        eta : 18
    },
    {
        nome : 'Anna',
        cognome : 'Colombo',
        eta : 57
    },
    {
        nome : 'Giovanna',
        cognome : 'Rizzo',
        eta : 12
    },
];

let maggiorenne = persone.filter((persona) => {
    return persona.eta >= 18;
});

let arrayTesti = [];

persone.forEach((element) => {
    if (maggiorenne.includes(element)) {
        arrayTesti.push(`${element.nome} ${element.cognome} è maggiorenne e quindi può guidare.`)
    } else {
        arrayTesti.push(`${element.nome} ${element.cognome} NON è maggiorenne e quindi NON può guidare.`)
    }
})

console.log(arrayTesti);