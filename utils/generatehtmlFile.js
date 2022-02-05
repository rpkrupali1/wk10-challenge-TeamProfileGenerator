const fs = require('fs');
const { resolve } = require('path');

// function to create file by inputting file path and file content
const generateFile = (filePath, fileContent) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath,fileContent, err => {
            if(err){
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File Created!'
            });
        });
    });    
}

module.exports = generateFile;