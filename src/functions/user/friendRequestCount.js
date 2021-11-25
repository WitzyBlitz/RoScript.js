'use strict';

const Constants = require('../../util/constants');
const request = require('request-promise');
const { fetchXCSRF } = require('../../user/xcsrf');

module.exports = {
    friendRequestCount: async()=>{

        // Constants
        this.xcsrf = await fetchXCSRF();
        this.token = Constants.token;

        if(this.token=="") return new Error('Cookie not found');
        try{
            let { count } = await request({url:"https://friends.roblox.com/v1/user/friend-requests/count",headers:{"x-csrf-token": this.xcsrf,Cookie: `.ROBLOSECURITY=${this.token}`,Accept:"application/json","Content-Type":"application/json"},json:true});
            return count;
        } catch(e) {
            throw new Error(e);
        }
    }
}