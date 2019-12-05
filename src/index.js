const app = require('./app');

async function initServe() {
    await app.listen(process.env.PORT||3000);
    console.log('server on port 3000');
}

initServe()