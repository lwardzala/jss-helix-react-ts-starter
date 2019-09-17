const chalk = require('chalk');
const readline = require('readline-sync');

const moduleGenerator = require('./generators/moduleGenerator');
const moduleNameValidator = require('./validators/moduleNameValidator');
const moduleValidator = require('./validators/moduleValidator');

const templateNames = ['module'];
const layerOptions = ['Foundation', 'Feature', 'Project'];

function getTemplateNames() {
    return templateNames;
}

function createModule() {
    const layerName = layerOptions[readline.keyInSelect(layerOptions, "Choose layer:", {cancel: false})];
    const moduleName = readline.question(`\nWrite module name: \n`, {limit: null});
    moduleNameValidator(moduleName);
    moduleValidator(moduleName, layerName);
    moduleGenerator.create(moduleName, layerName);
    console.log(chalk.green(`Module ${moduleName} has been scaffolded.`));
}

function create(templateName) {
    if (templateName == 'module') {
        createModule();
    }
}

module.exports = { create, getTemplateNames };