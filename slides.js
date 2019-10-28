// Load asciidoctor.js and asciidoctor-reveal.js
var asciidoctor = require('asciidoctor.js')();
var asciidoctorRevealjs = require('asciidoctor-reveal.js');
asciidoctorRevealjs.register()

var options = {safe: 'safe', backend: 'revealjs'};

//requiring path and fs modules
const path = require('path');
const fs = require('fs');
var glob = require("glob")
//joining path of directory 
const directoryPath = path.join(__dirname, '*/master.adoc');
//passsing directoryPath and callback function
glob(directoryPath, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    //listing all files using forEach
    files.forEach(function (file) {
        // Do whatever you want to do with the file
        
        //var adocFile = 'walkthroughs/' + file + '/walkthrough.adoc';
        //var htmlFile = 'walkthroughs/' + file + '/walkthrough.html';
 
        //var finalFile = file + '.html';

        asciidoctor.convertFile(file, {safe: 'safe', backend: 'revealjs'});

        //fs.rename(htmlFile, finalFile, function(err) {
        //    if ( err ) console.log('ERROR: ' + err);
        //});

        console.log(file); 
    });
});





