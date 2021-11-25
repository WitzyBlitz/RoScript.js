'use strict';

const Constants = require('../../util/constants');
const request = require('request-promise');
const { fetchXCSRF } = require('../../user/xcsrf');

module.exports = {
    uploadThumbnail: async(universeid,file,bool)=>{

        // Constants
        this.universeid = universeid;
        this.file = file;
        this.xcsrf = await fetchXCSRF();
        this.token = Constants.token;
        if(this.universeid==null) return new Error('RoScript.JS: UniverseId not found');
        if(this.file==null) return new Error('RoScript.JS: File not inputted');
        if(this.token=="") return new Error('RoScript.JS: Cookie not found');
        try{
            await request({method:"POST",url:`https://publish.roblox.com/v1/games/${this.universeid}/thumbnail/image`,formData:{"request.files":this.file},headers:{"x-csrf-token": this.xcsrf,Cookie: `.ROBLOSECURITY=${this.token}`,Accept:"application/json","Content-Type":"multipart/form-data"}});
            if(bool) console.log(`\nRoScript.JS: Uploaded Thumbnail!\n`);
        } catch(e) {
            throw new Error(e);
        }
    }
}