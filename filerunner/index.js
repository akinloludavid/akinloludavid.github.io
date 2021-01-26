#!/usr/bin/env node
//Dependencies to be installed
const chokidar = require('chokidar')
const program = require('caporal')
const debounce = require('lodash.debounce')
const fs = require('fs')
const {spawn} = require('child_process')
const chalk = require('chalk')

//The program to be executed with our command line application
program 
    .version('1.0.0') // the version
    .argument('[filename]', 'Name of file to be executed') //the argument is the filename

    //What we do to the file
    .action( async ({filename})=>{

        const name = filename || 'index.js'; // assigning a variable to the filename 

        try {
            await fs.promises.access(name) // file system to access the file in the same directory
        } catch (err) {
            throw new Error(`File ${name} not found`)
        }
        let proc;

        // Debounce function
        const start = debounce(()=>{
            if(proc){
                proc.kill()
            }
            console.log(chalk.blue('>>>>>> Starting process')) // chalk is for basic styling
            proc = spawn('node', [name], {stdio: 'inherit'}) //child_process method
        }, 100)
        chokidar
            .watch('.')
            .on('add', start)
            .on('change', start)
            .on('unlink', start)
    })

program.parse(process.argv)

