<h1 align="center">
    <img src="https://raw.githubusercontent.com/E-Witz/RoScript.js/main/Images/Untitled%20(3).png"></img>
</h1>

--

## Installation

`npm i RoScript.js@latest`

---

## Start up

```js
const RoScript = require('roscript.js');
const client = new RoScript.Client();
(async()=>{
    // Create an asynchronous function
    // Await the client.login function
    await client.login('',true)
})()
```
---

## Client Functions
**login**
`await client.login('TOKEN',true)`
_Logs you into the account_

**logout**
`await client.logout(true)`
_Logs you out of the account_

**refreshToken**
`await client.refreshToken(true)`
_Refreshes the token_

---

## Functions
**fetchServers**
`await RoScript.fetchServers(placeId,type,order,limit);`
_Returns all servers of a place_

**fetchXCSRFNoToken**
`await RoScript.fetchXCSRFNoToken();`
_Returns xcsrf token without a cookie_

**fetchXCSRF**
`await RoScript.fetchXCSRF();`
_Returns xcsrf token with cookie_

**fetchStatus**
`await RoScript.fetchStatus();`
_Returns logged in users status_

**changeStatus**
`await RoScript.changeStatus(description);`
_Changes status of logged in user_

**placeData**
`await RoScript.placeData(placeId);`
_Returns data of a place_

**universeData**
`await RoScript.universeData(universeId);`
_Returns data of a universe_

**universeProducts**
`await RoScript.universeProducts(universeId);`
_Returns products of a universe_

---

## Developers / Credits
* [Witz](https://github.com/WitzyBlitz) - Developer
* [Aero Softworks](https://discord.com/invite/HdPtp4rEHR) - Discord Server
