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

// let arrayTesti = [];

// persone.forEach((persona) => {
//     if (persona.eta >= 18) {
//         arrayTesti.push(`${persona.nome} ${persona.cognome} è maggiorenne e quindi può guidare.`)
//     } else {
//         arrayTesti.push(`${persona.nome} ${persona.cognome} NON è maggiorenne e quindi NON può guidare.`)
//     }
// })

let arrayTesti = persone.map((persona) => {
    if (persona.eta >= 18) {
        return `${persona.nome} ${persona.cognome} è maggiorenne e quindi può guidare.`
    } else {
        return `${persona.nome} ${persona.cognome} NON è maggiorenne e quindi NON può guidare.`
    }
});

console.log(arrayTesti);