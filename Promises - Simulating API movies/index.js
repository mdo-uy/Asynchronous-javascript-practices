async function notifyCustomer() {
    const customer = await getCustomer(1);
    console.log('Customer: ', customer);
    if (customer.isGold) {
        const movies = await getTopMovies();
        console.log('Top movies: ', movies);
        await sendEmail(customer.email, movies);
        console.log('Email sent...');
    }
}
notifyCustomer();


function getCustomer(idClient) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                id: idClient,
                name: 'Mauricio De Oliveira',
                isGold: true,
                email: 'mauricio.d.oliveira1@gmail.com'
            });
        }, 2000);
    });
}

function getTopMovies() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(['movie1', 'movie2']);
        }, 2000);
    });
}

function sendEmail(email, movies) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 2000);
    });
}