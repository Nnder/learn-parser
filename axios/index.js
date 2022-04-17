const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://opoznai.bg/all/sort:popular_ever';

async function getLinks(url){
    const links = [];
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);

    $('.article_image').each(function(){
        links.push($(this).attr('href'));
    });

    return links
}

getLinks(url).then(data=> console.log(data))