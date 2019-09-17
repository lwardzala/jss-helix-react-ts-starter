// Libraries
const fs = require('fs');
const path = require('path');

// Procedure
function create(componentPropsName, componentPropsPath) {
    const componentPropsFieldsName = componentPropsName + "Fields";
    const componentPropsTemplate = `
export default interface ${componentPropsName} {
    fields: ${componentPropsFieldsName};
}

export interface ${componentPropsFieldsName} {
    heading: FieldValue;
}
`;
    const outputFilePath = path.join(componentPropsPath, `/${componentPropsName}.ts`);
    console.log(`Creating props interface: ${outputFilePath}`);
    fs.writeFileSync(outputFilePath, componentPropsTemplate, 'utf8');
}

module.exports = { create };