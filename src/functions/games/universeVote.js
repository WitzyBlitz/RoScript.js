'use strict';

const request = require('request-promise');
const Constants = require('../../util/constants');
const { fetchXCSRF } = require('../../user/xcsrf');

module.exports = {
    universeVote: async(id,bool)=>{

        // Constants
        this.universe = id;
        this.token = Constants.token;
        this.xcsrf = await fetchXCSRF();

        if(bool!=true&&bool!=false){
            throw new Error('RoScript.JS: Not Boolean Values');
        }

        if(this.token=="") return new Error('Cookie not found');

        if(this.universe==null){
            throw new Error('RoScript.JS: No UniverseId found')
        }

        try{
            let { data } = await request({url:`https://games.roblox.com/v1/games/${this.universe}/user-votes`,headers:{Cookie:`.ROBLOSECURITY=${this.token}`,"x-csrf-token": this.xcsrf,Accept:"application/json","Content-Type":"application/json"},method:"PATCH",body:JSON.stringify({vote:bool})});
            return data;
        } catch(e) {
            throw new Error(e);
        }
    }
}