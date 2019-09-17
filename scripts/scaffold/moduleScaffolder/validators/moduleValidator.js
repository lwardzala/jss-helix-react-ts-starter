const fs = require('fs');
const path = require('path');

module.exports = function validate(moduleName, layerName) {
    const moduleDirectoryPath = path.join('src', layerName, moduleName);
    if (fs.existsSync(moduleDirectoryPath)) {
        throw `Module ${moduleDirectoryPath} already exists. Component scaffolder failed.`;
    }
}