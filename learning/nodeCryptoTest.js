// NOTES TO CRYPTO MODULE

// Cryptographic is used to secure data stored in a database. There
    // are different cryptographic techniques, hashing, encryption,
    // cipher and more. It converts the data into a secret by
    // converting plaintext into unreadable text and vice versa.
    // Hence only the sender and the receiver of that data can
    // understand its content. A cipher is an algorithm for
    // encrypting and decrypting data.

// The three main components of crypto system include plaintext,
    // cipher text and algorithm. To make the information a secret,
    // we use cipher, and an algorithm to turn plaintext to ciphertext.
    // Converting data into unreadable text is called encryption, and
    // reversing it back to plaintext is decryption.

// Cryptographic algorithms use a key to convert plaintext to
    // ciphertext. Converting ciphertext back to plaintext is possible
    // only if you have the right key with you.

// You use symmetric encryption if you encrypt and decrypt data using
    // the same key. Asymmetric encryption is used if different keys
    // are used for encryption and decryption.

// The Node.js crypto module provides cryptographic operations to help
    // you secure your Node.js application. It supports hashes, HMAC
    // for authentication, ciphers, deciphers, and more.
// The crypto module handles an algorithm that performs encryption and
    // decryption of data.


// First, we import the crypto module:
const crypto = require('crypto')
// After that, it is necessary choose the algorithm we want to work
    // with, there are different algorithms to work with for example:
        // Advanced Encryption Standard (AES),
        // Triple DES,
        // Blowfish,
        // Rivest-Shamir-Adleman (RSA),
        // ...
// We are going to choose AES, which is one of the most popular and
    // secure ones:
const algorithm = 'aes-256-cbc'

// Now we use the randomBytes() method to generate cryptographically
    // built random data generated in the written code. So basically,
    // it creates a few random bytes which are further used.
// Generate 16 bytes of random data:
const initVector = crypto.randomBytes(16)

// Protected data
const message = 'This is a secret message'

// Secret key generate 32 bytes of random data.
const securityKey = crypto.randomBytes(32)

// Now to encrypt the data we use the cipher function. For that, we use
    // the createCipheriv() method.
// Pass the first argument as the algorithm we are using, the second
    // argument as the Securitykey, and initVector as the third argument.
// The cipher function:
const cipher = crypto.createCipheriv(algorithm, securityKey, initVector)

// To encrypt the message, we use the update() method on the cipher.
    // The first argument for the method would be the message, then
    // utf-8 (input encoding), and then hex (output encoding).
let encryptedData = cipher.update(message, 'utf-8', 'hex')

// To tell the encryption to stop, we use the final() method, so that
    // the cipher can't be used once more to encrypt data.
    // And now the message is encrypted.
encryptedData += cipher.final('hex')

console.log('Encrypted data:', encryptedData)

// Now to decrypt data, we follow a very similar format to that of
    // encrypting data.
const decipher = crypto.createDecipheriv(algorithm, securityKey, initVector)

let decryptedData = decipher.update(encryptedData, 'hex', 'utf-8')

decryptedData += decipher.final('utf8')

console.log('Decrypted message: '+ decryptedData)