const openpgp = require('openpgp');

const encryptMessage = async (publicKeyArmored, data) => {
    try {
        const publicKey = await openpgp.readKey({ armoredKey: publicKeyArmored });

        const privateKey = await openpgp.decryptKey({
            privateKey: await openpgp.readPrivateKey({ armoredKey: process.env.PGP_PRIVATE_KEY }),
            passphrase: process.env.PGP_PASSPHRASE
        });

        const encrypted = await openpgp.encrypt({
            message: await openpgp.createMessage({ text: data }), // input as Message object
            encryptionKeys: publicKey,
            signingKeys: privateKey // optional
        });


        return encrypted;
    } catch (err) {
        console.error(err);
        throw err;
    }
}

const decryptMessage = async (publicKeyArmored, encrypted_data) => {
    try {
        const publicKey = await openpgp.readKey({ armoredKey: publicKeyArmored });

        const privateKey = await openpgp.decryptKey({
            privateKey: await openpgp.readPrivateKey({ armoredKey: process.env.PGP_PRIVATE_KEY }),
            passphrase: process.env.PGP_PASSPHRASE
        });

        const message = await openpgp.readMessage({
            armoredMessage: encrypted_data // parse armored message
        });

        console.log("message",message);

        const { data: decrypted, signatures } = await openpgp.decrypt({
            message,
            verificationKeys: publicKey, // optional
            decryptionKeys: privateKey
        });
        console.log(decrypted);

        return decrypted;
    } catch (err) {
        console.error(err);
        throw err;
    }
}

module.exports = { encryptMessage, decryptMessage };