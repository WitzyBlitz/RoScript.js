'use strict';

const request = require('request-promise');
const Constants = require('../../util/constants');
const { fetchXCSRF } = require('../../user/xcsrf');

module.exports = {
    SocialLinks: async(id,data,bool)=>{

        // Constants
        this.universe = id;
        this.data = data;
        this.token = Constants.token;
        this.xcsrf = await fetchXCSRF();

        if(this.data==null) return new Error('RoScript.JS: Data not Found');
        if(this.token=="") return new Error('RoScript.JS: Cookie not found');

        if(this.universe==null){
            throw new Error('RoScript.JS: No UniverseId found');
        }

        try{
            await request({url:`https://develop.roblox.com/v1/universes/${this.universe}/social-links`,headers:{Cookie:`.ROBLOSECURITY=${this.token}`,"x-csrf-token": this.xcsrf,Accept:"application/json","Content-Type":"application/json"},method:"POST",body:data});
            if(bool) console.log('\nRoScript.JS: Added SocialLinks!\n');
        } catch(e) {
            throw new Error(e);
        }
    }
}