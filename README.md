# Sitecore JSS template for React Helix TypeScript projects

It's a simple variation of Sitecore JSS template for React that supports TypeScript language and Helix architecture.

### This template includes:
- TypeScript configuration for source and manifest files
- Sitecore JSS Helix scaffolder for React-TypeScript components and modules
- Helix folder structure
- Absolute paths for importing modules from Foundation, Feature and Project layers.
- ESLint configuration extended by @typescript-eslint plugin
- Sitecore JSS v12
- TypeScript v3.6.3
- ReactJS v16.8.6

## Table of content

- [Scaffolding](#scaffolding)
    - [Helix module](#helix-module)
    - [Component](#component)
- [Absolute paths](#absolute-paths)
- [References](#references)
- [Authors](#authors)

## Scaffolding

### 1. Helix module
To create a module you have to execute command:
```
jss scaffold
```

After that you will be asked to choose option in following dialog (press key "2" for choosing "module"):
```
Welcome in Sitecore JSS Helix scaffolder for React-TypeScript components

[1] component
[2] module

Choose template [1/2]:
```

Next you have to choose an appropriate layer:
```
[1] Foundation
[2] Feature
[3] Project

Choose layer [1, 2, 3]:
```

And at the end that you have to put the module name and then press enter.

Example of scaffolded module folder structure:
```
src/
    Feature/
        TestM/
            components/
            models/
            services/
```

### 2. Component
First execute command:

```
jss scaffold
```

After executing commad you will have to choose option in following dialog (press key "1" for choosing "component"):

```
Welcome in Sitecore JSS Helix scaffolder for React-TypeScript components

[1] component
[2] module

Choose template [1/2]:
```

Next you have to choose an appriopriate layer:

```
[1] Foundation
[2] Feature
[3] Project

Choose layer [1, 2, 3]:
```

After that you have to select module in which your component will be created:

```
[1] ContentBlock
[2] Errors
[3] GraphQL
[4] Styleguide
[5] TestM

Choose module [1...5]:
```

And in the end you have to put your's component name and press enter

Example of scaffolded component in folder structure:
```
sitecore/
    definitions/
        components/
            TestC.sitecore.ts
src/
    Feature/
        TestM/
            components/
                TestC/
                    index.tsx
            models/
                TestCProps.ts
```

Example of scaffolded component:
```tsx
import * as React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';
import TestCProps from 'Feature/TestM/models/TestCProps';

const TestC = (props: TestCProps) => (
  <div>
    <p>TestC Component</p>
    <Text field={props.fields.heading} />
  </div>
);

export default TestC;
```

## Absolute paths

In entire project you can use absolute path for imports.
You don't need to use imports like:
```ts
import TestComponent from '../../../Feature/TestModule/components/TestComponent';
```

It can look simpler:
```ts
import TestComponent from 'Feature/TestModule/components/TestComponent';
```

## References
- [JSS Documentation](https://jss.sitecore.com/docs)
- [Helix and Sitecore JavaScript Services (JSS)](https://www.jflh.ca/2018-10-13-helix-and-sitecore-javascript-services)
- [Developing React components in Typescript with Sitecore JSS 9.1](https://www.sergevandenoever.nl/sitecore_jss_typescript/)

## Authors
- Lukasz Wardzala - [github](https://github.com/lwardzala)