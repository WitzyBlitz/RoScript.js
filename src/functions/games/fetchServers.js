'use strict';

const request = require('request-promise');

module.exports = {
    fetchServers: async(id,type,order,limit)=>{

        // Constants
        this.placeId = id;
        this.type = type;
        this.order = order;
        this.limit = limit;

        if(this.placeId==null){
            throw new Error('RoScript.JS: No PlaceID found')
        }
        if(this.type==null){
            this.type = "Public"
        }
        if(this.order==null){
            this.order = "Asc"
        }
        if(this.limit==null){
            this.limit = "10"
        }

        try{
            let data = await request({url:`https://games.roblox.com/v1/games/${this.placeId}/servers/${this.type}?sortOrder=${this.order}&limit=${this.limit}`,headers:{Accept:"application/json","Content-Type":"application/json"},json:true});
            return data;
        } catch(e) {
            throw new Error(e);
        }
    }
}