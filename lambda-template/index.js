#!/usr/bin/env node
// Used this article to write this script
// https://medium.com/nexl-engineering/build-a-cli-tool-with-node-js-create-p5-boilerplate-d4bd43753ea5

const fs = require("fs");
const path = require("path");
const yaml = require('js-yaml');

const folder = process.argv[2];
if (!folder) return console.error("please enter template type, run: create-lambda-template [plain | api]");

const sample = require(`./templates/${folder}/example-yaml`);

// Copy template into your current working directory
console.log(`Copying template into ${__dirname}`);
fs.copyFile(
    path.join(__dirname, `./templates/${folder}/example.js`), // template path
    `lambda.js`,
    (error) => {
        if (error) printError("error copying lambda.js: " + error);
    }
)

// print out a sample yaml definition for a lambda to copy and paste
console.log('Copy and paste the below sample yaml and add it to your serverless yaml file');
console.log('Sample yaml config: ');
console.log('      ')
try {
    const doc = yaml.dump(sample, { flowLevel: 5 });
    console.log(doc);
} catch (e) {
    console.log(e);
}

console.log('     ')
console.log('Lambda template creation completed');
console.log('Have a lovely day!');