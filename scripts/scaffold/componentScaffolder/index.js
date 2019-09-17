const fs = require('fs');
const chalk = require('chalk');
const path = require('path');
const readline = require('readline-sync');

const componentGenerator = require('./generators/componentGenerator');
const manifestGenerator = require('./generators/manifestGenerator');
const componentNameValidator = require('./validators/componentNameValidator');
const moduleValidator = require('./validators/moduleValidator');

const templateNames = ['component'];
const layerOptions = ['Foundation', 'Feature', 'Project'];

function getExistingModules(layerName) {
    const moduleDirectoryPath = path.join('src', layerName);
    const modules = [];
    fs.readdirSync(moduleDirectoryPath).forEach((moduleFolder) => {
        modules.push(moduleFolder);
    });
    return modules;
}

function getTemplateNames() {
    return templateNames;
}

function createComponent() {
    const layerName = layerOptions[readline.keyInSelect(layerOptions, "Choose layer:", {cancel: false})];
    const existingModules = getExistingModules(layerName);
    let moduleName = null;
    if (existingModules.length > 30) {
        moduleName = readline.question(`\nType existing module name: \n`, {limit: existingModules, caseSensitive: true});
    } else {
        moduleName = existingModules[readline.keyInSelect(existingModules, "Choose module:", {cancel: false})];
    }
    moduleValidator(moduleName, layerName);
    const componentName = readline.question(`\nWrite component name: \n`, {limit: null});
    componentNameValidator(componentName);
    manifestGenerator.create(componentName);
    componentGenerator.create(componentName, moduleName, layerName);
    console.log(chalk.green(`Component ${componentName} has been scaffolded.`));
}

function create(templateName) {
    if (templateName == 'component') {
        createComponent();
    }
}

module.exports = { create, getTemplateNames };