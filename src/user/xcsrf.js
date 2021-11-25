"use strict";

const request = require('request-promise');
const Constants = require('../util/constants');

module.exports = {
    fetchXCSRFNoToken: async()=>{
       this.xcsrf = (await request({url:"https://auth.roblox.com/v2/login",method:"POST",simple:false,resolveWithFullResponse:true})).headers['x-csrf-token']
       return this.xcsrf;
    },
    fetchXCSRF: async()=>{
        if(Constants.token==""){
         throw new Error('RoScript.JS: Cookie not found');
        } else {

            //Constants

            this.token = Constants.token;
            this.xcsrf = (await request({url:"https://auth.roblox.com/v2/login",headers:{Cookie:`.ROBLOSECURITY=${this.token}`},method:"POST",simple:false,resolveWithFullResponse:true})).headers['x-csrf-token']

            return this.xcsrf;
        }
     }
};
