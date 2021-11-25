'use strict';

const Constants = require('../../util/constants');
const request = require('request-promise');
const { fetchXCSRF } = require('../../user/xcsrf');

module.exports = {
    purchaseAudio: async(name,file,bool)=>{

        // Constants
        this.name = name;
        this.file = file;
        this.xcsrf = await fetchXCSRF();
        this.token = Constants.token;
        if(this.name==null) this.name = "String";
        if(this.file==null) return new Error('RoScript.JS: File not inputted')
        if(this.token=="") return new Error('RoScript.JS: Cookie not found');
        try{
            await request({method:"POST",url:"https://publish.roblox.com/v1/audio",body:JSON.stringify({
                "name": this.name,"file":this.file
            }),headers:{"x-csrf-token": this.xcsrf,Cookie: `.ROBLOSECURITY=${this.token}`,Accept:"application/json","Content-Type":"application/json"}});
            if(bool) console.log(`\nRoScript.JS: Purhcased Audio ${this.name}\n`);
        } catch(e) {
            throw new Error(e);
        }
    }
}