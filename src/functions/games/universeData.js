'use strict';

const request = require('request-promise');

module.exports = {
    universeData: async(id)=>{

        // Constants
        this.universe = id;

        if(this.universe==null){
            throw new Error('RoScript.JS: No UniverseId found')
        }

        try{
            let { data } = await request({url:`https://games.roblox.com/v1/games?universeIds=${this.universe}`,headers:{Accept:"application/json","Content-Type":"application/json"},json:true});
            return data;
        } catch(e) {
            throw new Error(e);
        }
    }
}