const rt      = require('request-promise');
const cheerio = require('cheerio')
const option = {
    url:`https://forum.freecodecamp.org/directory_items?period=weekly&order=likes_received&_=1518604435748`,
    json:true
}

rt(option).then((data)=>{
    console.log((data));
})