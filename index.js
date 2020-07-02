#!/usr/bin/env node

const path = require('path');
const fs = require('fs');
const {validate}=require('./utils/validate')
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
         validate(links)
}




ValidateFileExt(document);

