'use strict';

const Constants = require('../../util/constants');
const request = require('request-promise');
const { fetchXCSRF } = require('../../user/xcsrf');

module.exports = {
    fetchUserId: async()=>{

        // Constants
        this.xcsrf = await fetchXCSRF();
        this.token = Constants.token;

        if(this.token=="") return new Error('Cookie not found');
        try{
            let { id } = await request({url:"https://users.roblox.com/v1/users/authenticated",headers:{"x-csrf-token": this.xcsrf,Cookie: `.ROBLOSECURITY=${this.token}`,Accept:"application/json","Content-Type":"application/json"},json:true});
            return id;
        } catch(e) {
            throw new Error(e);
        }
    }
}