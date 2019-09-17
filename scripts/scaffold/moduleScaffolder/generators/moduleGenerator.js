// Libraries
const fs = require('fs');
const path = require('path');

// Definitions
const sourceDirectoryPath = 'src';

// Procedure
function create(moduleName, layerName) {
    const moduleDirectoryPath = path.join(sourceDirectoryPath, layerName, moduleName);
    console.log(`Creating module: ${moduleDirectoryPath}`);
    fs.mkdirSync(moduleDirectoryPath);
    console.log(`Creating module's subfolders`);
    fs.mkdirSync(path.join(moduleDirectoryPath, 'components'));
    fs.mkdirSync(path.join(moduleDirectoryPath, 'models'));
    fs.mkdirSync(path.join(moduleDirectoryPath, 'services'));
    if (layerName == 'Project') {
        fs.mkdirSync(path.join(moduleDirectoryPath, 'styles'));
        fs.mkdirSync(path.join(moduleDirectoryPath, 'scripts'));
        fs.mkdirSync(path.join(moduleDirectoryPath, 'fonts'));
        fs.mkdirSync(path.join(moduleDirectoryPath, 'images'));
    }
}

module.exports = { create };