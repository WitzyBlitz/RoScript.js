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
