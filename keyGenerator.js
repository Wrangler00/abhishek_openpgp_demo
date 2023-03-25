const openpgp = require('openpgp');

module.exports = async function () {
    const { privateKey, publicKey } = await openpgp.generateKey({
        type: 'rsa', // Type of the key
        rsaBits: 4096, // RSA key size (defaults to 4096 bits)
        userIDs: [{ name: 'Abhishek', email: 'abhishek@gmail.com' }], // you can pass multiple user IDs
        passphrase: process.env.PGP_PASSPHRASE // protects the private key
    });

    // console.log(privateKey, publicKey);
    return { privateKey, publicKey };
}