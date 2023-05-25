import express from 'express';

const app = express();
const port = 3000;

app.get('/', (res, req) => {
    console.log('Hello');
});

app.listen(port, () => {
    console.log('Server ready!');
});
