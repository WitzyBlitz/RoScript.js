'use strict';

const Constants = require('../../util/constants');
const request = require('request-promise');
const { fetchXCSRF } = require('../../user/xcsrf');

module.exports = {
    fetchStatus: async()=>{

        // Constants
        this.xcsrf = await fetchXCSRF();
        this.token = Constants.token;

        if(this.token=="") return new Error('Cookie not found');
        try{
            let { description } = await request({url:"https://accountinformation.roblox.com/v1/description",headers:{"x-csrf-token": this.xcsrf,Cookie: `.ROBLOSECURITY=${this.token}`,Accept:"application/json","Content-Type":"application/json"},json:true});
            return description;
        } catch(e) {
            throw new Error(e);
        }
    }
}