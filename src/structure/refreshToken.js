'use strict';

const request = require('request-promise');
const constants = require('../util/constants');
const { fetchXCSRF } = require('../user/xcsrf');

module.exports = {
    refreshToken: async(bool)=>{

        // Constants

        this.bool = bool;
        this.xcsrf = await fetchXCSRF();
        this.token = constants.token;

        if(constants.token==""){
            throw new Error('\nRoScript.JS: Not logged in!\n');
        } else {
            try{
                await request({method:"POST",uri: `https://auth.roblox.com/v1/logout`,headers: {Accept:"application/json",Cookie: `.ROBLOSECURITY=${this.token}`,"x-csrf-token":this.xcsrf},json: true});
                if(this.bool) console.log('\nRoScript.JS: Refreshed Token Successfully!');
                constants.token = "";
            } catch(e) {
                throw new Error(`\nRoScript.JS: ${e}\n`);
            }
        }
    }
}