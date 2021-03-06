<h1 align="center">
    <img src="https://raw.githubusercontent.com/E-Witz/RoScript.js/main/Images/Untitled%20(3).png"></img>
</h1>

## About RoScript.js
<p align="center">RoScript is a frameworking for the Roblox API! It allows developers to fully use the Roblox API to its limits. We are against the abuse of the Roblox API.</p>

---

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

## Miscellaneous Functions
**fetchXCSRFNoToken**
`await RoScript.fetchXCSRFNoToken();`
_Returns xcsrf token without a cookie_

**fetchXCSRF**
`await RoScript.fetchXCSRF();`
_Returns xcsrf token with cookie_

---

## Publish API
**purchaseAudio**
`await RoScript.purchaseAudio(name,filedata,boolean);`
_Uploads an audio to roblox_

**uploadThumbnail**
`await RoScript.uploadThumbnail(universeid,filedata,boolean);`
_Uploads thumbnail to universe_

**upload**
`await RoScript.upload(file,id,boolean);`
_Uploads XML to selected ID_

**uploadAnimation**
`await RoScript.uploadAnimation(file,name,boolean);`
_Uploads animation_

---

## User API
**fetchStatus**
`await RoScript.fetchStatus();`
_Returns logged in users status_

**changeStatus**
`await RoScript.changeStatus(description);`
_Changes status of logged in user_

**fetchUserId**
`await RoScript.fetchUserId();`
_Returns the logged in users userid_

**changeDisplayName**
`await RoScript.changeDisplayName(data);`
_Changes the users displayname_

**playerData**
`await RoScript.playerData(userid);`
_Returns data of inputted userid_

**isPremium**
`await RoScript.isPremium(userid);`
_Returns if user has premium_

**friendsCount**
`await RoScript.friendsCount();`
_Returns friend count_

**friendRequestCount**
`await RoScript.friendRequestCount();`
_Returns friend request count_

**declineAllFriends**
`await RoScript.declineAllFriends();`
_Declines all friend requests_

**follow**
`await RoScript.follow(userid,captchaid,captchatoken,bool);`
_Follows user_

---

## Games API
**fetchServers**
`await RoScript.fetchServers(placeId,type,order,limit);`
_Returns all servers of a place_

**placeData**
`await RoScript.placeData(placeId);`
_Returns data of a place_

**universeData**
`await RoScript.universeData(universeId);`
_Returns data of an universe_

**universeProducts**
`await RoScript.universeProducts(universeId);`
_Returns products of an universe_

**universeVote**
`await RoScript.universeVote(universeId,boolean);`
_Upvotes or downvotes on an universe_

**universeVotes**
`await RoScript.universeVotes(universeId);`
_Returns upvotes or downvotes on an universe_

**buyPrivateServer**
`await RoScript.buyPrivateServer(universeId,name,price);`
_Buys a private server_

**SocialLinks**
`await RoScript.SocialLinks(universeId,JSON.stringify({"type": "Discord","url": 'https://discord.gg/HdPtp4rEHR',"title": "xd"}),boolean);`
_Sets social links onto universe_

**editPlaceData**
`await RoScript.editPlaceData(placeId,JSON.stringify({"name": "Test","maxPlayerCount":50,"description":"Test","allowCopying": false}),boolean);`
_Edits place data_

---

## Developers / Credits
* [Witz](https://github.com/WitzyBlitz) - Developer
* [Aero Softworks](https://discord.com/invite/HdPtp4rEHR) - Discord Server
