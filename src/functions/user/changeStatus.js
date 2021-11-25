'use strict';

const Constants = require('../../util/constants');
const request = require('request-promise');
const { fetchXCSRF } = require('../../user/xcsrf');

module.exports = {
    changeStatus: async(data,bool)=>{

        // Constants
        this.data = data;
        this.xcsrf = await fetchXCSRF();
        this.token = Constants.token;

        if(this.token=="") return new Error('Cookie not found');
        try{
            await request({method:"POST",url:"https://accountinformation.roblox.com/v1/description",body:JSON.stringify({
                "description": this.data
            }),headers:{"x-csrf-token": this.xcsrf,Cookie: `.ROBLOSECURITY=${this.token}`,Accept:"application/json","Content-Type":"application/json"}});
            if(bool) console.log(`\nRoScript.JS: Changed status to ${this.data}\n`);
        } catch(e) {
            throw new Error(e);
        }
    }
}