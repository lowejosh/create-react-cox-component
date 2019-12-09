const index = componentName => `
    export { default } from './${componentName}';
`;

module.exports = index;
