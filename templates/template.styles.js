const styles = componentName => `import styled from "providers/ThemeProvider";

export const ${componentName}Container = styled.div(({ theme }) => ({
}));`;

module.exports = styles;
