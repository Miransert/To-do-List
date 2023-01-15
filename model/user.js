// The model dir(directory) is for making it easier to manage
    // data flow, and also to sort of enforce a schema on the database.
// With mongoose, everything is derived from a Schema.
// Below, we have a schema called userSchema, which has the properties
    // name, mail and password.
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    // Adding required: true, since you cannot create a user without
        // a name obviously.
    name: { type: String, required: true},
    // Then we have also added unique: true, since there cannot be
        // multiple users with the same e-mail, but there can be
        // multiple users with the same name and same password.
        // So two e-mails cannot have same records in the database.
    // ## TRY MAKE TWO IDENTICAL EMAILS, AND SEE WHAT HAPPENS
    mail: { type: String, required: true, unique: true},
    password: { type: String, required: true}
}, {collection: 'users'}/* collection name in database */)

const model = mongoose.model('userSchema', userSchema)

module.exports = model