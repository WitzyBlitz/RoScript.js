# RoScript JS
![alt text](https://raw.githubusercontent.com/E-Witz/RoScript.js/main/Images/Untitled%20(3).png)
# Installation

`npm i RoScript.js@latest`

# Start up

```js
const RoScript = require('roscript.js');
const client = new RoScript.Client();
(async()=>{
    await client.login('',true).then(async(e)=>{
    })
})()
```
# Functions
**fetchServers**
`await RoScript.fetchServers(placeId);`
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
