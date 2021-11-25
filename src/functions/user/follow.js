'use strict';

const Constants = require('../../util/constants');
const request = require('request-promise');
const { fetchXCSRF } = require('../../user/xcsrf');

module.exports = {
    follow: async(id,captchaid,captchaToken,bool)=>{

        // Constants
        this.xcsrf = await fetchXCSRF();
        this.token = Constants.token;
        this.id = id;
        this.captchaid = captchaid;
        this.captchaToken = captchaToken;

        if(this.token=="") return new Error('Cookie not found');
        try{
            await request({method:"POST",url:`https://friends.roblox.com/v1/users/${this.id}/follow`,body:JSON.stringify({"captchaId":this.captchaid,"captchaToken":this.captchaToken,"captchaProvider":"PROVIDER_ARKOSE_LABS"}),headers:{"x-csrf-token": this.xcsrf,Cookie: `.ROBLOSECURITY=${this.token}`,Accept:"application/json","Content-Type":"application/json"}});
            if(bool) console.log(`\nRoScript.JS: Followed ${this.id}\n`);
        } catch(e) {
            throw new Error(e);
        }
    }
}