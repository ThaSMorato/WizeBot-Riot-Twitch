import cryptojs from 'crypto-js';

require('dotenv/config');

interface ApiResponse {
    data: any;
    status_code: number;
}

export default {
    
    getCommunPasswords(){
        return  [
            'q1w2e3r4',
            '1q2w3e4r',
            'a1b2c3d4',
            'abcd1234',
            'qwerty123',
            'password1',
            'passw0rd',
            'adobe123',
            'zaq1zaq1',
            '1q2w3e4r5t'
        ]
    },

    sanitezePassword(password: string):string{
        const format = /[\.,_'"{}[\]`~\/\\=+)(*&^%$#@!<>;?:|-]/g

        return password.replace(format, '');
    },
    
    generateHashedPassword(password: string): string{
        const SALT_ID = process.env.APP_SALT_IDENTIFIER;
        let salt = this.getSalt();
        
        let hashed = cryptojs["SHA512"](password + salt);
      
        let hashed_salt = hashed + SALT_ID + salt;
        
        
        return hashed_salt;


    },

    checkPasword(inputPassword: string, userPassword: string){
        const SALT_ID = process.env.APP_SALT_IDENTIFIER;
        let [saltedPassword, salt] = userPassword.split(SALT_ID);
        let hashed = cryptojs["SHA512"](inputPassword + salt);
        let hashed_salt = hashed + SALT_ID + salt;
        if(hashed_salt  === userPassword) return true;
        else return false;
    },

    onlyLetters(text: string): boolean{
        const letters = /^[a-zA-Z]+$/;
        let sanitezed_text = this.sanitezePassword(text);
        if(sanitezed_text.match(letters)) return true;
        return false;
    },

    onlyNumbers(text: string): boolean{
        const numbers = /^[0-9]+$/;
        let sanitezed_text = this.sanitezePassword(text);
        if(sanitezed_text.match(numbers)) return true;
        return false;
    },

    validatePassword(password: string): ApiResponse{
        if(this.getCommunPasswords().includes(password.toLowerCase())) return {data:"commun password, try anotter", status_code:406};
        if(password.length < 8) return {data:"password weak, use min 8 chars", status_code:406};
        if(this.onlyLetters(password)) return {data:"password weak, use numbers too", status_code:406};
        if(this.onlyNumbers(password)) return {data:"password weak, use letters too", status_code:406};

        return {data:true, status_code:200};
    },

    getSalt(n : number = 5): string{
        const digits = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

        let ret = '';

        let x : number;

        for(x = 0; x < n; x++) {
            let char = digits[Math.floor(Math.random() * (digits.length - 1))];
            
            ret = ret + char;
        }
        
        return ret;
    }
}


