'use strict';

const Constants = require('../../util/constants');
const request = require('request-promise');
const { fetchXCSRF } = require('../../user/xcsrf');

module.exports = {
    upload: async(file,id,bool)=>{

        // Constants
        this.file = file;
        this.id = id;
        this.xcsrf = await fetchXCSRF();
        this.token = Constants.token;
        if(this.file==null) return new Error('RoScript.JS: File not inputted');
        if(this.id==null) return new Error('RoScript.JS: AssetId not inputted');
        if(this.token=="") return new Error('RoScript.JS: Cookie not found');
        try{
            await request({method:"POST",url:`https://data.roblox.com/Data/Upload.ashx?json=1&assetid=${this.id}`,body:file,headers:{"User-Agent": "RobloxStudio/WinInet RobloxApp/0.483.1.425021 (GlobalDist; RobloxDirectDownload)","x-csrf-token": this.xcsrf,Cookie: `.ROBLOSECURITY=${this.token}`,Accept:"application/json","Content-Type":"application/xml"}});
            if(bool) console.log(`\nRoScript.JS: Uploaded Animation!\n`);
        } catch(e) {
            throw new Error(e);
        }
    }
}