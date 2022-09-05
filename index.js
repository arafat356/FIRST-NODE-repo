const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("we're using nodemon for better experience and auto restart");
});

const users = [
    { id: 0, name: 'future', email: 'future@gmail.com', phone: '85430985' },
    {
        id: 1,
        name: 'future loading',
        email: 'future@gmail.com',
        phone: '85430985',
    },
    { id: 2, name: 'nothing', email: 'future@gmail.com', phone: '85430985' },
    {
        id: 3,
        name: 'i heat my life',
        email: 'future@gmail.com',
        phone: '85430985',
    },
    { id: 4, name: 'cool', email: 'future@gmail.com', phone: '85430985' },
    { id: 5, name: 'stay alone', email: 'future@gmail.com', phone: '85430985' },
    { id: 6, name: 'no past tan', email: 'future@gmail.com', phone: '85430985' },
    { id: 7, name: 'no love', email: 'future@gmail.com', phone: '85430985' },
    { id: 8, name: 'no emotion', email: 'future@gmail.com', phone: '85430985' },
    { id: 9, name: 'dont friend', email: 'future@gmail.com', phone: '85430985' },
];

app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter((user) =>
            name.toLocaleLowerCase().includes(search),
        );
    } else {
        res.send(users);
    }

    res.send(users);
});

/* app.method */

app.post('/users', (req, res) => {
    const NewUser = req.body;
    NewUser.id = users.length;
    users.push(NewUser);
    console.log('user loading', req.body);
    // res.send(JSON.stringify(NewUser));
    res.json(NewUser);
});

/* dynamic api */
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];

    res.send(user);
});

app.get('/fruits', (req, res) => {
    res.send(['mango', 'oranges', 'banana', 'papaya']);
});

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('yummy yummy tok marka fazli');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});