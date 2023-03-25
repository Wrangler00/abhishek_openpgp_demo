require('dotenv').config();
const openpgp = require('openpgp');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;

const { encryptMessage, decryptMessage } = require('./util');
const keyGenerator = require('./keyGenerator');


app.get('/generate-keys',async (req, res) => {
    try {
        const {privateKey, publicKey} = await keyGenerator();



        return res.send({
            privateKey: privateKey.replaceAll('\\n', '\n'), publicKey: publicKey.replaceAll('\\n', '\n')
        });
    } catch (err) {
        console.error(err);
    }
})

app.get('/public-key', (req, res) => {
    try {
        return res.send({
            public_key: process.env.PGP_PUBLIC_KEY.replaceAll('\\n', '\n')
        });
    } catch (err) {
        console.error(err);
    }
})

app.post('/encrypt', async (req, res) => {
    try {
        const { data, public_key = process.env.PGP_PUBLIC_KEY } = req.body;

        console.log(data);

        const encryptedmsg = await encryptMessage(public_key, data);

        return res.send({ encryptedmsg: encryptedmsg.replaceAll('\\n', '\n') });
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal server error');
    }
});

app.post('/decrypt', async (req, res) => {
    try {
        const { data, public_key = process.env.PGP_PUBLIC_KEY } = req.body;

        const decryptedmsg = await decryptMessage(public_key, data);

        return res.send({ decryptedmsg });
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal server error');
    }
});


app.listen(PORT || 3000, () => console.log(`Server started on port ${PORT}`));