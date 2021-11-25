'use strict';

const Constants = require('../../util/constants');
const request = require('request-promise');
const { fetchXCSRF } = require('../../user/xcsrf');

module.exports = {
    changeDisplayName: async(userid,data,bool)=>{

        // Constants
        this.data = data;
        this.userid = userid;
        this.xcsrf = await fetchXCSRF();
        this.token = Constants.token;

        if(this.userid=="") return new Error('RoScript.JS: No UserId Inputted')

        if(this.token=="") return new Error('RoScript.JS: Cookie not found');
        try{
            await request({method:"PATCH",url:`https://users.roblox.com/v1/users/${this.userid}/display-names`,body:JSON.stringify({
                "newDisplayName": this.data
            }),headers:{"x-csrf-token": this.xcsrf,Cookie: `.ROBLOSECURITY=${this.token}`,Accept:"application/json","Content-Type":"application/json"}});
            if(bool) console.log(`\nRoScript.JS: Changed status to ${this.data}\n`);
        } catch(e) {
            throw new Error(e);
        }
    }
}