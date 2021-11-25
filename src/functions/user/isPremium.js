'use strict';

const request = require('request-promise');

module.exports = {
    isPremium: async(id)=>{

        // Constants
        this.id = id;

        if(this.id==null) return new Error('RoScript.JS: UserId not found');

        try{
            let data = await request({url:`https://premiumfeatures.roblox.com/v1/users/${this.id}/validate-membership`,headers:{Accept:"application/json"},json:true});
            return data;
        } catch(e) {
            throw new Error(e);
        }
    }
}