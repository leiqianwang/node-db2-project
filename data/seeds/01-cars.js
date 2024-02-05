// STRETCH

    const cars = [
        {
            vin: '23848923847829341',
            make: 'Honda',
            model: 'civic',
            mileage: 98300,
            title: 'clean',
            transmission: 'automatic',
        },
        {
            vin: '2384892384781b341',
            make: 'Volkswagen',
            model: 'golf',
            mileage: 48300,
            title: 'clean',
            transmission: 'automatic',
        },
{
        vin: '9l848923847829341',
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