var bikes = [
    {
        'bikeName' : 'road',
        'bikeWeight' : 10,
        'bikeBrand' : 'wilier'
    },
    {
        'bikeName' : 'gravel',
        'bikeWeight' : 12,
        'bikeBrand' : 'cannondale'
    },
    {
        'bikeName' : 'downhill',
        'bikeWeight' : 14,
        'bikeBrand' : 'giant'
    },
    {
        'bikeName' : 'mountain',
        'bikeWeight' : 16,
        'bikeBrand' : 'trek'
    },
    {
        'bikeName' : 'foldable',
        'bikeWeight' : 8,
        'bikeBrand' : 'specialized'
    },
    {
        'bikeName' : 'fixed',
        'bikeWeight' : 9,
        'bikeBrand' : 'bianchi'
    },
    {
        'bikeName' : 'BMX',
        'bikeWeight' : 11,
        'bikeBrand' : 'cannondale'
    }
]

console.log(bikes);

let newBike = {
    'bikeName' : 'track',
    'bikeWeight' : 11,
    'bikeBrand' : 'pinarello'
}

let newBikeCopy = {...newBike, 'bikeGears' : 1}

bikes.push(newBikeCopy);

console.log(newBike);
console.log(newBikeCopy);
console.log(bikes);

const innCont = document.querySelector('.container');

for (let i = 0; i < bikes.length; i++) {

    let {bikeName, bikeWeight, bikeBrand} = bikes[i];
    let biciCont = i + 1;

    innCont.innerHTML += `
        <div class="bike-info">
            <span>Bicicletta n. ${biciCont}</span>
            <ul>
                <li>nome: ${bikeName}</li>
                <li>peso: ${bikeWeight} kg</li>
                <li>brand: <span>${bikeBrand}</span></li>
            </ul>
        </div>
    `
}
