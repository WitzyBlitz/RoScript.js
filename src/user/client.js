'use strict';

const Contstants = require('../util/constants');
const accountLogin = require('../structure/login');
const accountLogout = require('../structure/logout');
const accountRToken = require('../structure/refreshToken');

class Client {
    constructor() {
        this.name = "Client";
    }
    async login(cookie,bool) {
        this.cookie = cookie;
        if(this.cookie==null||this.cookie==undefined||this.cookie.includes(" ")) throw new Error('Cookie not inputted');
        try{
            await accountLogin.login(this.cookie,bool);
        } catch(e) {
            throw new Error(e);
        }
    }
    async logout(bool){
        try{
            await accountLogout.logout(bool);
        } catch(e) {
            throw new Error(e);
        }
    }
    async refreshToken(bool){
        try{
            await accountRToken.refreshToken(bool);
        } catch(e) {
            throw new Error(e);
        }
    }
}
module.exports = Client;