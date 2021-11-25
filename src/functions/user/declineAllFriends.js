'use strict';

const Constants = require('../../util/constants');
const request = require('request-promise');
const { fetchXCSRF } = require('../../user/xcsrf');

module.exports = {
    declineAllFriends: async(bool)=>{

        // Constants
        this.xcsrf = await fetchXCSRF();
        this.token = Constants.token;

        if(this.token=="") return new Error('Cookie not found');
        try{
            await request({method:"POST",url:"https://friends.roblox.com/v1/user/friend-requests/decline-all",headers:{"x-csrf-token": this.xcsrf,Cookie: `.ROBLOSECURITY=${this.token}`,Accept:"application/json","Content-Type":"application/json"}});
            if(bool) console.log(`\nRoScript.JS: Declined All Friends\n`);
        } catch(e) {
            throw new Error(e);
        }
    }
}