// Libraries
const fs = require('fs');
const path = require('path');

// Definitions
const componentManifestDefinitionsPath = 'sitecore/definitions/components';

// Procedure

function create(componentName) {
    const manifestTemplate = `// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-manifest';

/**
 * Adds the ${componentName} component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.ts) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function(manifest) {
  manifest.addComponent({
    name: '${componentName}',
    icon: SitecoreIcon.DocumentTag,
    fields: [
      { name: 'heading', type: CommonFieldTypes.SingleLineText },
    ],
    /*
    If the component implementation uses <Placeholder> or withPlaceholder to expose a placeholder,
    register it here, or components added to that placeholder will not be returned by Sitecore:
    placeholders: ['exposed-placeholder-name']
    */
  });
}
`;

    const outputFilePath = path.join(
        componentManifestDefinitionsPath,
        `${componentName}.sitecore.ts`
    );
    if (fs.existsSync(outputFilePath)) {
        throw `Manifest definition path ${outputFilePath} already exists. Not creating manifest definition.`;
    }
    console.log(`Creating manifest: ${outputFilePath}`);
    fs.writeFileSync(outputFilePath, manifestTemplate, 'utf8');
    return outputFilePath;
}

module.exports = { create };