'use strict';

const request = require('request-promise');
const Constants = require('../../util/constants');
const { fetchXCSRF } = require('../../user/xcsrf');

module.exports = {
    buyPrivateServer: async(id,name,price)=>{

        // Constants
        this.universe = id;
        this.token = Constants.token;
        this.xcsrf = await fetchXCSRF();
        this.price = price;
        this.name = name;

        if(this.price==null) return new Error('RoScript.JS: Price not Found');

        if(this.name==null){
            this.name = "Server";
        }

        if(this.token=="") return new Error('RoScript.JS: Cookie not found');

        if(this.universe==null){
            throw new Error('RoScript.JS: No UniverseId found');
        }

        try{
            let { data } = await request({url:`https://games.roblox.com/v1/games/vip-servers/${this.universe}`,headers:{Cookie:`.ROBLOSECURITY=${this.token}`,"x-csrf-token": this.xcsrf,Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify({name:this.name,expectedPrice:this.price})});
            return data;
        } catch(e) {
            throw new Error(e);
        }
    }
}