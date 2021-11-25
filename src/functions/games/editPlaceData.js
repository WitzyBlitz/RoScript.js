'use strict';

const request = require('request-promise');
const Constants = require('../../util/constants');
const { fetchXCSRF } = require('../../user/xcsrf');

module.exports = {
    editPlaceData: async(id,data,bool)=>{

        // Constants
        this.place = id;
        this.data = data;
        this.token = Constants.token;
        this.xcsrf = await fetchXCSRF();

        if(this.data==null) return new Error('RoScript.JS: Data not Found');
        if(this.token=="") return new Error('RoScript.JS: Cookie not found');

        if(this.place==null){
            throw new Error('RoScript.JS: No PlaceId found');
        }

        try{
            await request({url:`https://develop.roblox.com/v2/places/${this.place}`,resolveWithFullResponse: true,headers:{Cookie:`.ROBLOSECURITY=${this.token}`,"x-csrf-token": this.xcsrf,Accept:"application/json","Content-Type":"application/json"},method:"PATCH",body:data});
            if(bool) console.log('\nRoScript.JS: Edited Place data!\n');
        } catch(e) {
            throw new Error(e);
        }
    }
}