#!/usr/bin/env node

const path = require('path');
const fs = require('fs');
// const markdownLinkExtractor = require('markdown-link-extractor');

let document = process.argv[2];

// valida que sean extenciones md

const ValidateFileExt = (filevalidate) => {
    let ValidateExtencionArch = path.extname(filevalidate);
        if (ValidateExtencionArch === '.md') {
            filereadme(filevalidate);
            console.log(ValidateExtencionArch)
        } else console.log('the files is incorrect'); 
};



// lee el archivo


const filereadme = (filevalidate) => {
    fs.readFile(filevalidate, 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            
        }
         else {
            readmeLincks(data)
         }       
    });
};

// para imprimir los links
const readmeLincks =(filevalidate)=>{
let string =filevalidate;
         let regExp= (/https?:\S+\w/gi);
         let links = string.match(regExp);

         console.log(links);
}



const validateLinks = (links) => {
    console.log('VALIDATE'.rainbow.bold)
    links.forEach(link => {
        fetch(link).then((res) => {
            console.log('STATUS: '.brightBlue + `${res.status} ${res.statusText}`.brightGreen + ' - URL: '.brightBlue + res.url.brightWhite);
        }).catch((err) => console.log('STATUS: '.brightBlue + '404 Fail'.red + ' - URL: '.brightBlue + link.brightWhite))      
    });
}



ValidateFileExt(document);

