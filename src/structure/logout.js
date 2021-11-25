'use strict';

const request = require('request-promise');
const constants = require('../util/constants');

module.exports = {
    logout: async(bool)=>{

        // Constants

        this.bool = bool;
        
        if(constants.token==""){
            throw new Error('\nRoScript.JS: Not logged in!\n')
        } else {
            constants.token = "";
            if(this.bool) console.log('\nRoScript.JS: Logged out successfully!\n');
        }
    }
}