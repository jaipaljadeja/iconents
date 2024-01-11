const template = (variables, { tpl }) => {
  return tpl`
import * as React from 'react';
import { IconBaseProps } from "../types";

const ${variables.componentName} = (svgProps: IconBaseProps) => {
    const { title, ...props } = svgProps;
    const titleId = title; 
    return (${variables.jsx});
};
 
${variables.exports};
`;
};

module.exports = template;
