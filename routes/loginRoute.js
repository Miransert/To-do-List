// ______________________________ 2 ______________________________
/*  
Access control in websites and web applications is a top priority
    for security, but how you set up access depends on how you store
    the data to be authenticated. This, in turn, enables user
    authorization. Cookies and tokens are two common ways of setting
    up authentication.
Cookies are chunks of data created by the server and sent to the
    client for communication purposes. Tokens, usually referring to JSON
    Web Tokens (JWTs), are signed credentials encoded into a long
    string of characters created by the server. The main difference
    between cookies and tokens is their nature: tokens are stateless
    while cookies are stateful.
With this in mind, why is there a need to store authentication on the
    browser? Because HTTP is stateless, even if you authenticate with 
    one request, the server essentially "forgets" that authentication 
    with subsequent requests. Therefore, you need to supply the 
    token/cookie on every request for authentication by the server. 
    The frontend stores the token or cookie and uses it to make 
    subsequent requests to the server until the cookie or token expires.
Generally, the process works like this:
    1. You sign in.
    2. The server verifies your sign-in details and generates an
        cookie, or in case of JWT apporach, an accessToken.
    3. The authentication cookie/accessToken is used to make a request
        to your homepage that displays your unique dashboard.

Detailed proccess of JWT:
    In case of the JWT approach, the accessToken itself contains
        the encrypted “userId”, and the accessToken is not saved
        within any sessionDB.
    Since no DB is required in case of the “jwt approach”, it is
        sometimes called “stateless” approach to managing sessions,
        since no “state” or “session” is saved within a DB (it is
        contained within the JWT token itself).
    The JWT tokens are sometimes referred to as “Bearer Tokens”
        since all the information about the user i.e. “bearer” is
        contained within the token.

Detailed proccess of session cookie:
    In case of the session cookie based approach, the sessionId does
        not contain any userId information, but is a random string
        generated and signed by the “secret key”.
    The sessionId is then saved within a sessionDB. The sessionDB
        is a database table that maps “sessionId” < — -> “userId”.
    Since sessionIds are stored in a sessionDB, the “session cookie
        approach” is sometimes called “stateful” approach to managing
        sessions, since the “state” or “session” is saved within a DB.

So to maintain sessions, each subsequent request to the server (in
    case of session-cookie approach) should include the “cookie
    (sessionId)”, OR (in case of JWT approach) should include the
    “accessToken”.

Session Cookie in bot words:
    1. User puts in login information, e.g. username and password,
        and submits it to a server.
    2. Then the server validates it, which creates a session in the
        database, and then response back to the client browser with
        a sessionID.
    3. The sessionID will be saved in the browsers cookie jar, which
        is a place in the browser to save key-value pairs.
    4. The key-value pair will be sent back to the server on each
        subsequent request, and it can then respond back with content
        designed for the currently logged in user.
    

JWT in bot words:
    1. User puts in login information, e.g. username and password,
        and submits it to a server.
    2. The server then generates a JSON Web Token, and the jot is
        created with a private key on the server.
    3. Then it is sent back to the client browse, where it is normally
        kept in local storage.
    4. On future request, the jot will be added to the authorization
        header, prefixed by bearer. The server then only needs to
        validate the signature there is no need for a database lookup
        somewhere else in the infrastructure, and that is way more
        efficient when dealing with distributed system in the cloud.
        A Bearer Token is just a string, potentially arbitrary, that
        is used for authorization.

Session Cookie conclusion:
    So you will have an ID you usually will store in a cookie in the
        client browser, so everytime the user makes a request, it will
        sent it to the server, and the server will use that sessionID
        that it gets from the cookie, and then it will look up the data
        in the database.

JWT conclusion:
    So a token is being sent back and forth from the client browser
        to the server, and we know who that user is based on that token.
    JWT is called stateless:
        no backend storage, you don't need to store any of the data in
            a sepearte place e.g. a database.
        microservices, it is easier to work with multiple servers with
            JWT where they need to authenticate eachother and
            communicate together working for the same client browser.
    JWT has cons, e.g:
        The client browser's tokens are publicly
            available, and if someone copy pastes the token data into the
            JWT.io website, they can see the data.
        If the token has a lot of data, it can slow down all the
            requests, since as we said before, it sends the token back
            and forth between the client and the server.
        Because we store data in tokens, it is also valid for a certain
            amount of time, so maybe its valid for an hour, a month, a
            minute, just whatever you set. This means that until that
            token is valid, that data is still existing and cannot be
            removed manually. So if there where to happen some sort of
            hack attack happening to the token, the token would not be
            able to be removed to stop the hacker from getting access to
            the token data.
*/
const express = require('express')
const router = express.Router()
const path = require('path')
const rootDir = require('../utils/path')

router.get('/login', (req, res) =>{
    res.sendFile(path.join(rootDir, 'views', 'loginPage.html'))
})
// There are two ways of creating a login authentication, either
    // with cookies, or with tokens (usually reffering to JWT).
    // Read about it in point 2 in line 2.

module.exports = router