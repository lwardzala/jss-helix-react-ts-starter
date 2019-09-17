// Libraries
const chalk = require('chalk');
const readline = require('readline-sync');

// Generators
const componentScaffolder = require('./componentScaffolder');
const moduleScaffolder = require('./moduleScaffolder');

// Definitions
const componentScaffolderTemplates = componentScaffolder.getTemplateNames();
const moduleScaffolderTemplates = moduleScaffolder.getTemplateNames();
const templateOptions = [
    ...componentScaffolderTemplates,
    ...moduleScaffolderTemplates
];

console.log("Welcome in Sitecore JSS Helix scaffolder for React-TypeScript components");
// Get template name
const templateName = templateOptions[readline.keyInSelect(templateOptions, "Choose template:", {cancel: false})];

// Execution
if (componentScaffolderTemplates.includes(templateName)) {
    componentScaffolder.create(templateName);
}
if (moduleScaffolderTemplates.includes(templateName)) {
    moduleScaffolder.create(templateName);
}

console.log(chalk.green(`Scaffolding finished.`));
