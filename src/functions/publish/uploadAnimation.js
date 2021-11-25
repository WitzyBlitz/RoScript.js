'use strict';

const Constants = require('../../util/constants');
const request = require('request-promise');
const { fetchXCSRF } = require('../../user/xcsrf');

module.exports = {
    uploadAnimation: async(file,name,bool)=>{

        // Constants
        this.name = name;
        this.file = file;
        this.xcsrf = await fetchXCSRF();
        this.token = Constants.token;
        if(this.data==null) return new Error('RoScript.JS: Data not found');
        if(this.file==null) return new Error('RoScript.JS: File not inputted');
        if(this.token=="") return new Error('RoScript.JS: Cookie not found');
        try{
            await request({method:"POST",url:`https://www.roblox.com/ide/publish/uploadnewanimation?AllID=1&assetTypeName=Animation&name=${name}`,body:data,headers:{"User-Agent": "RobloxStudio/WinInet RobloxApp/0.483.1.425021 (GlobalDist; RobloxDirectDownload)","x-csrf-token": this.xcsrf,Cookie: `.ROBLOSECURITY=${this.token}`,Accept:"application/json","Content-Type":"application/xml"}});
            if(bool) console.log(`\nRoScript.JS: Uploaded Animation!\n`);
        } catch(e) {
            throw new Error(e);
        }
    }
}