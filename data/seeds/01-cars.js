// STRETCH

    const cars = [
        {
            vin: '1FTPW14V69KB74536',
            make: 'Honda',
            model: 'civic',
            mileage: 98300,
            title: 'clean',
            transmission: 'automatic',
        },
        {
            vin: 'KNDJN2A29E7177095',
            make: 'Volkswagen',
            model: 'golf',
            mileage: 48300,
            title: 'clean',
            transmission: 'automatic',
        },
{
        vin: '1FADP3F28EL202068',
        make: 'Ford',
        model: 'focus',
        mileage: 118300,
        title: 'clean',
        transmission: 'automatic',
}
    ]

    // exports.seed = function(knex) {
    //    return knex('cars').truncate().then(() => {
    //              return knex('cars').insert(cars)
    //    })

    // }

    exports.seed = async function (knex) {
        await knex('cars').truncate();
        await knex('cars').insert(cars);
    }