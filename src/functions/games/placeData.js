'use strict';

const request = require('request-promise');

module.exports = {
    placeData: async(id)=>{

        // Constants
        this.placeId = id;

        if(this.placeId==null){
            throw new Error('RoScript.JS: No placeId found')
        }

        try{
            let { data } = await request({url:`https://games.roblox.com/v1/games/multiget-place-details?placeIds=${this.placeId}`,headers:{Accept:"application/json","Content-Type":"application/json"},json:true});
            return data;
        } catch(e) {
            throw new Error(e);
        }
    }
}