const getProjects = require('./notion');
// import getProjects from './notion.js';
const dotenv = require('dotenv').config()
const { Client } = require("@notionhq/client")


// Initializing a client
const notion = new Client({auth: process.env.NOTION_TOKEN,})
// Notion Database ID
const database_id = process.env.NOTION_DATABASE_ID;


// const getPages = async () => {
module.exports = async function getPages(){

    const payload = {
        path: `databases/${database_id}/query`,
        method: 'POST',
      }

    const { results } = await notion.request(payload)
    // console.log(results);

    const pages = results.map((page) => {
        return {
          id: page.properties.Slug.rich_text[0].plain_text,
        }
    })

    return pages;
}

// (async () => {
//     const nPages = await getPages()
//     console.log(nPages);
// })();