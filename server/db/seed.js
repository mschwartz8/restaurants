const {dbConnection, Restaurant} = require('./index');

const runSeed = async () => {
    await dbConnection.sync({ force: true});

    const fishCheeks = await Restaurant.create({
        name: "Fish Cheeks",
        cuisine: "thai",
        googleLink: "https://www.fishcheeksnyc.com/",
        cost: 3
    })

    const FourCharles = await Restaurant.create({
        name: "4 Charles Prime Rib",
        cuisine: "american",
        googleLink: "https://nycprimerib.com/",
        cost: 4
    }) 
    console.log("seed complete");
    process.kill(0)

}

runSeed();