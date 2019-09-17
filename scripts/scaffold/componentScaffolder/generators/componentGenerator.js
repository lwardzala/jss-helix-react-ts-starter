// Libraries
const fs = require('fs');
const path = require('path');
const componentPropsTemplate = require('./propsInterfaceGenerator');

// Definitions
const sourceDirectoryPath = 'src';

function getImportPath(outputPath) {
	return outputPath.replace(/[\\]/g, '/').replace(sourceDirectoryPath + '/', '');
}

// Procedure
function create(componentName, moduleName, layerName) {
	const exportVarName = componentName.replace(/[^\w]+/g, '');
	const moduleDirectoryPath = path.join(sourceDirectoryPath, layerName, moduleName);
	const modelDirectoryPath = path.join(moduleDirectoryPath, 'models');
	const componentPropsName = exportVarName + "Props";
	const componentTemplate = `import * as React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';
import ${componentPropsName} from '${getImportPath(modelDirectoryPath)}/${componentPropsName}';

const ${exportVarName} = (props: ${componentPropsName}) => (
  <div>
    <p>${componentName} Component</p>
    <Text field={props.fields.heading} />
  </div>
);

export default ${exportVarName};
`;
	const componentDirectoryPath = path.join(moduleDirectoryPath, 'components', componentName);
	console.log(`Creating component: ${componentDirectoryPath}`);
	fs.mkdirSync(componentDirectoryPath);
	const outputFilePath = path.join(componentDirectoryPath, 'index.tsx');
	fs.writeFileSync(outputFilePath, componentTemplate, 'utf8');
	// Creating component props
	componentPropsTemplate.create(componentPropsName, modelDirectoryPath);
}

module.exports = { create };