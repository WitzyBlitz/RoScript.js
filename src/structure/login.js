'use strict';

const request = require('request-promise');
const constants = require('../util/constants');

module.exports = {
    login: async(token,bool)=>{

        // Constants

        this.bool = bool;
        this.token = token;
        
        try{
            await request({method:"POST",uri: `https://auth.roblox.com/v1/logout`,headers: {Accept:"application/json",Cookie: `.ROBLOSECURITY=${this.token}`},json: true});
        } catch(e) {
            if(e.statusCode!=403){
                throw new Error('Invalid Token / API Error');
            } else {
                constants.token = this.token;
                if(this.bool) console.log('\nRoScript.JS: Logged into the account successfully!\n');
            }
        }
    }
}